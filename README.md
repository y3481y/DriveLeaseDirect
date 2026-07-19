[README.md](https://github.com/user-attachments/files/30171529/README.md)
# DriveLeaseDirect — Auto lease website

Een kant-en-klare landingspagina voor een auto lease bedrijf, klaar om
gratis te hosten via **GitHub Pages**.

## Bestanden

```
index.html          → de website zelf
css/style.css        → alle vormgeving (kleuren, lettertypes, layout)
js/script.js         → de rekentool en kleine animaties
images/              → hier komen je eigen foto's (zie LEES-DIT.txt)
```

## Stap 1 — Maak een GitHub account

1. Ga naar https://github.com/join
2. Kies een gebruikersnaam, vul je e-mailadres en een wachtwoord in
3. Bevestig je e-mailadres via de mail die je ontvangt

## Stap 2 — Maak een nieuwe repository (map voor je project)

1. Log in op https://github.com
2. Klik rechtsboven op de **+** en kies **New repository**
3. Repository name: bijvoorbeeld `drivelease-direct-website`
4. Zet 'm op **Public**
5. Vink verder niets aan (geen README, geen .gitignore) en klik op
   **Create repository**

## Stap 3 — Upload de bestanden

De makkelijkste manier, zonder iets te installeren:

1. Open je nieuwe repository op GitHub
2. Klik op **Add file → Upload files**
3. Sleep de hele inhoud van deze map (`index.html`, de map `css`,
   de map `js` en de map `images`) naar het uploadvak
   - Let op: sleep de *inhoud* van deze map, niet de map zelf
4. Klik onderaan op **Commit changes**

## Stap 4 — Zet GitHub Pages aan

1. Ga in je repository naar **Settings** (tabblad bovenaan)
2. Klik in het linkermenu op **Pages**
3. Bij **Branch** kies je `main` en map `/ (root)`, klik op **Save**
4. Ververs de pagina na ongeveer 1 minuut — bovenaan verschijnt een
   link zoals:

   `https://jouwgebruikersnaam.github.io/drivelease-direct-website/`

Dat is je live website. Elke keer dat je een bestand aanpast en
opnieuw upload (of via **Add file → Upload files** vervangt), werkt
GitHub Pages de site automatisch bij binnen een paar minuten.

## Je eigen foto's toevoegen

Zie `images/LEES-DIT.txt` voor de exacte bestandsnamen die de site
verwacht (`hero-auto.jpg`, `auto-1.jpg`, `auto-2.jpg`, `auto-3.jpg`).
Upload ze gewoon in de map `images` via dezelfde **Add file → Upload
files** knop.

## Zelf teksten of prijzen aanpassen

- Bedrijfsnaam "DriveLeaseDirect" staat bovenaan in `index.html`
  (`<title>`, het logo-blok in de header) en in de footer — pas aan
  met zoeken/vervangen als je een andere naam wilt.
- Het logo is nu een simpel SVG-icoon (auto-silhouet). Heb je een
  eigen logobestand (bv. `logo.png`)? Vervang dan in `index.html` het
  `<svg class="logo-mark">`-blok door
  `<img src="images/logo.png" class="logo-mark" alt="DriveLeaseDirect logo">`.
- De merkenstrip (BMW, Mercedes-Benz, Audi, Volvo, Volkswagen) staat
  nu als tekst — dit is bewust gedaan omdat de originele logo's
  beschermde merken zijn. Wil je de echte logo's tonen, gebruik dan
  officieel beschikbare merklogo's (bv. via de perspagina van elk
  merk) en zet ze als losse afbeeldingen in de `.brand-strip` sectie.
- Prijzen en autospecificaties staan in het blok `AANBOD` in
  `index.html`.
- De rekenformule van de rekentool (het geschatte maandbedrag) staat
  bovenin `js/script.js` bij `BASISPRIJS` en `MAX_TOESLAG` — dit zijn
  fictieve richtprijzen, pas ze aan naar je eigen tarieven.
- Het contactformulier stuurt nu nog niets echt door. Wil je
  aanvragen in je mailbox ontvangen? Koppel het formulier gratis aan
  https://formspree.io (kleine aanpassing in het `<form>`-element in
  `index.html`).

## Een eigen domeinnaam gebruiken (optioneel)

Onder **Settings → Pages** kun je bij **Custom domain** een eigen
domeinnaam invullen (bijvoorbeeld `www.kilometerlease.nl`), mits je
die domeinnaam al hebt gekocht bij een provider zoals TransIP of
Vimexx. GitHub laat daarna zien welke DNS-instelling je bij die
provider moet toevoegen.
