# Koble kontaktskjemaet til Formspree

Kontaktskjemaet i `index.html` sender innsendinger til Formspree-endepunktet `https://formspree.io/f/mdegvkqw`. Selve e-postmottakeren lagres i Formspree og er ikke skrevet inn i nettsidens kode.

Kontroller i Formspree at e-postvarsling er slått på for riktig mottakeradresse. Formspree krever at mottakeradressen er verifisert i kontoen.

Skjemaet bruker vanlig JavaScript `fetch` med AJAX og forventer JSON-svar. Det inkluderer også Formsprees `_gotcha` honeypot-felt for å fange automatisert søppelpost. Se [Formsprees AJAX-veiledning](https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax/) og [honeypot-dokumentasjon](https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering/).
