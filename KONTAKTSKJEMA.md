# Kontaktskjema på Cloudflare Pages

Skjemaet bruker Pages Function i `functions/api/contact.js` og Cloudflare Email Sending REST API. Det viser aldri mottakeradressen i nettleseren.

## Før skjemaet kan sende e-post

1. Aktiver Cloudflare Email Sending og onboard et avsenderdomene i Cloudflare DNS. `CONTACT_FROM` må være en adresse på dette domenet.
2. Lag et Cloudflare API-token med bare tillatelsen **Email Sending: Edit**.
3. I Cloudflare Pages-prosjektet: åpne **Settings → Variables and Secrets** og legg inn disse verdiene for Production (og Preview hvis skjemaet skal virke der):

   | Navn | Type | Innhold |
   | --- | --- | --- |
   | `CF_ACCOUNT_ID` | Secret | Cloudflare account ID |
   | `CF_EMAIL_API_TOKEN` | Secret | API-tokenet med Email Sending: Edit |
   | `CONTACT_TO` | Secret | Adressen som skal motta henvendelser |
   | `CONTACT_FROM` | Secret | Verifisert avsenderadresse på det onboardede domenet |

4. Lagre innstillingene og deploy Pages-prosjektet på nytt.

Cloudflare Email Sending må være tilgjengelig på kontoen. På Free-planen er utsending begrenset til verifiserte mottakeradresser; sending til andre mottakere krever Workers Paid. Se [Cloudflare Email Service](https://developers.cloudflare.com/email-service/) og [Cloudflares REST API for utsending](https://developers.cloudflare.com/email-service/api/send-emails/rest-api/).

Skjemaet har validering, feltgrenser, en skjult honeypot og kontroll av at innsendingen kommer fra samme origin. For produksjonstrafikk kan Cloudflare også få en rate limit-regel for `/api/contact`.
