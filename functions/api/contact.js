const MAX_BODY_LENGTH = 8_000;
const ALLOWED_TOPICS = new Set(["Spørsmål", "Forespørsel", "Innspill", "Annet"]);

function jsonResponse(body, status = 200) {
    return new Response(JSON.stringify(body), {
        status,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "no-store",
            "X-Content-Type-Options": "nosniff"
        }
    });
}

export async function onRequestPost({ request, env }) {
    const origin = request.headers.get("Origin");
    if (origin && origin !== new URL(request.url).origin) {
        return jsonResponse({ error: "Ugyldig forespørsel." }, 403);
    }

    if (!request.headers.get("Content-Type")?.toLowerCase().includes("application/json")) {
        return jsonResponse({ error: "Ugyldig forespørsel." }, 415);
    }

    const contentLength = Number(request.headers.get("Content-Length") || 0);
    if (contentLength > MAX_BODY_LENGTH) {
        return jsonResponse({ error: "Meldingen er for lang." }, 413);
    }

    let payload;
    try {
        const rawBody = await request.text();
        if (rawBody.length > MAX_BODY_LENGTH) {
            return jsonResponse({ error: "Meldingen er for lang." }, 413);
        }
        payload = JSON.parse(rawBody);
    } catch {
        return jsonResponse({ error: "Meldingen kunne ikke leses." }, 400);
    }

    // Honeypot: quietly accept bot submissions without sending an email.
    if (typeof payload.website === "string" && payload.website.trim()) {
        return jsonResponse({ ok: true });
    }

    const name = typeof payload.name === "string" ? payload.name.trim() : "";
    const email = typeof payload.email === "string" ? payload.email.trim() : "";
    const topic = typeof payload.topic === "string" ? payload.topic : "";
    const message = typeof payload.message === "string" ? payload.message.trim() : "";
    const formStartedAt = Number(payload.formStartedAt);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        !name || name.length > 100 ||
        !emailPattern.test(email) || email.length > 254 ||
        !ALLOWED_TOPICS.has(topic) ||
        !message || message.length > 5_000 ||
        !Number.isFinite(formStartedAt) || Date.now() - formStartedAt < 2_000
    ) {
        return jsonResponse({ error: "Kontroller feltene og prøv igjen." }, 400);
    }

    if (!env.CF_ACCOUNT_ID || !env.CF_EMAIL_API_TOKEN || !env.CONTACT_TO || !env.CONTACT_FROM) {
        return jsonResponse({ error: "Kontaktskjemaet er ikke ferdig konfigurert ennå." }, 503);
    }

    const text = [
        `Ny henvendelse fra kontaktskjemaet på Martha's Good & Lovely`,
        "",
        `Navn: ${name}`,
        `E-post: ${email}`,
        `Tema: ${topic}`,
        "",
        "Melding:",
        message
    ].join("\n");

    let mailResponse;
    try {
        mailResponse = await fetch(
            `https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(env.CF_ACCOUNT_ID)}/email/sending/send`,
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${env.CF_EMAIL_API_TOKEN}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    to: env.CONTACT_TO,
                    from: env.CONTACT_FROM,
                    reply_to: email,
                    subject: `[MGL] ${topic} fra ${name}`,
                    text
                })
            }
        );
    } catch {
        return jsonResponse({ error: "E-posttjenesten er midlertidig utilgjengelig. Prøv igjen senere." }, 502);
    }

    if (!mailResponse.ok) {
        return jsonResponse({ error: "E-posten kunne ikke sendes. Prøv igjen senere." }, 502);
    }

    let mailResult;
    try {
        mailResult = await mailResponse.json();
    } catch {
        return jsonResponse({ error: "E-posten kunne ikke bekreftes sendt. Prøv igjen senere." }, 502);
    }

    if (!mailResult.success) {
        return jsonResponse({ error: "E-posten kunne ikke sendes. Prøv igjen senere." }, 502);
    }

    return jsonResponse({ ok: true });
}

export async function onRequest({ request }) {
    if (request.method === "OPTIONS") {
        return new Response(null, {
            status: 204,
            headers: { "Allow": "POST, OPTIONS", "Cache-Control": "no-store" }
        });
    }

    return jsonResponse({ error: "Metoden støttes ikke." }, 405);
}
