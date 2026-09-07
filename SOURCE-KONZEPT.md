# SOURCE — Konzept

> Lokal auf dem Handy laufende Sourcing-App. Auf der Messe erfasst du ein Produkt
> in 10–20 Sekunden. Aus diesen simplen Daten baut die App später automatisch
> deine komplette Sourcing-Datenbank.
>
> **Foto → Preis → Stand → speichern.** Alles andere kommt abends im Hotel.
>
> Stand: 06.09.2026 · Basis: dein Konzeptentwurf, mit sieben Gegenvorschlägen
> (Abschnitt 14) und einer Technik-Entscheidung, die du treffen musst (Abschnitt 13).

---

## 1. Startscreen

```
  SOURCE
  Shanghai Furniture Fair · 6 September 2026

  Total potential purchases
  ¥ 84.300  ≈  € 10.095

  124 Products  ·  31 Suppliers  ·  18 Favorites

  ┌────────────────────────────────┐
  │      +  SCAN PRODUCT           │
  └────────────────────────────────┘

  ⭐ Must Buy              18
  🤔 Review Later          37
  🏢 Suppliers             31
  ⚖  Vergleich              4 markiert
  📥 Inbox                 27 unbearbeitet

  Recently Added
  [Sofa]   Cloud Sofa 03     ¥4.800   €575
  [Chair]  Lounge Chair      ¥1.200   €144
  [Table]  Coffee Table      ¥2.900   €347
```

Fünf Einstiege, mehr nicht: **Scan · Messeübersicht · Favoriten · Lieferanten ·
Vergleich**. Die Inbox kommt dazu, sobald sie nicht leer ist — sie ist der
Arbeitsstapel für den Abend.

---

## 2. Der Scan-Flow

„Scan Product" öffnet **direkt die Kamera**, kein Zwischenscreen. Du machst 1–5
Fotos, danach landest du in der schnellen Eingabemaske.

Unten liegen dauerhaft vier große Buttons — mehr brauchst du im Laufen nicht:

| 📸 Photo | 💰 Price | 🏢 Supplier | ⭐ Save |
|---|---|---|---|
| weitere Aufnahme | Zifferntastatur, Währungs-Chip | Stand übernehmen oder neu | speichern und weiter |

**„Save" ist der einzige Pflicht-Tap.** Ein Produkt darf mit nichts als einem Foto
in der Datenbank landen — sonst hörst du am dritten Stand auf, die App zu benutzen.
Alles Unvollständige wandert in die Inbox.

Nach dem Speichern: **„Nächstes Produkt, gleicher Stand"** — Messe, Halle, Booth,
Lieferant und Preisart bleiben stehen. Sechs Produkte am selben Stand in 90 Sekunden.

---

## 3. Produktkarte

Oben großes Produktfoto (wischbar durch alle Aufnahmen), darunter:

```
Cloud Sofa 03

Preis
  ¥ 4.800 RMB          ← Leitwährung, so angeboten
  € 575
  $ 670

Supplier     Shanghai Hengtai Furniture
Booth        Hall 5.1 — B17
MOQ          5 Stück
Maße         240 × 95 × 72 cm      → 1,64 m³
Material     Bouclé / Aluminium / Foam
Lead Time    25–35 Tage
Preisart     EXW · FOB · CIF · unbekannt

Status       ⭐ Must Buy   ❤️ Favorit   🤔 Vielleicht   ❌ Nein

Bewertung
  Design     9/10
  Qualität   8/10
  Preis      7/10
  ─────────────────
  Gesamt     8.4/10
```

€ und $ werden aus dem gespeicherten Wechselkurs berechnet. Kurs einmal täglich
online aktualisierbar, die App funktioniert davon unabhängig komplett offline.
Sichtbar bleibt immer, wie alt der Kurs ist.

---

## 4. Smart Inbox

Der wichtigste Mechanismus der App — und er braucht keinerlei KI.

Du fotografierst 40 Produkte, ohne eines davon fertig auszufüllen. Alles landet in:

```
📥 Inbox — 27 unbearbeitet
```

Abends im Hotel gehst du den Stapel durch. Die App bereitet vor, was sie ohne
Internet kann:

- **nach Zeit und Standort gruppiert** — Fotos innerhalb weniger Minuten am selben
  Ort gehören mit hoher Wahrscheinlichkeit zum selben Stand, also zum selben Lieferanten
- **Vorschlag „diese 6 Fotos = 1 Lieferant"**, du bestätigst mit einem Tap
- **QR-Codes** aus den Fotos gelesen (offline möglich)
- **Preis, Produktart, Visitenkarten-Felder** — nur wenn OCR aktiv ist, siehe Abschnitt 12

Diese Zeitgruppierung ist der eigentliche Trick. Sie ersetzt 80 % dessen, wofür man
sonst KI bräuchte, und funktioniert im Flugmodus.

---

## 5. Supplier-System

Jedes Produkt hängt an einem Lieferantenprofil.

```
Foshan M&K Furniture

📍 Foshan, Guangdong
👤 Kevin Zhang
💬 WeChat gespeichert      ☎ Telefon      🌐 Website
📇 Visitenkarte (Foto)     🏢 Standfoto

Produkte gespeichert: 7
  Sofa           ¥4.800
  Lounge Chair   ¥1.200
  Coffee Table   ¥  850
  Sideboard      ¥2.100
  …

Supplier Rating   8.7 / 10

☑ wirkt professionell        ☐ Trader          ☑ eigener Hersteller
☑ Export nach Europa         ☑ CE / Zertifikate
☑ Customization möglich      ☑ Logo möglich    ☑ Samples möglich
```

Die Checkboxen sind wertvoller als sie aussehen: nach vier Messetagen ist genau das
der Unterschied zwischen „mit dem kann man arbeiten" und „netter Stand, keine Ahnung".

**Verhandlungs-Log** je Produkt: Angebot ¥4.800 → dein Gegenangebot ¥3.600 →
final ¥4.100, mit Datum. Sonst weißt du am Freitag nicht mehr, wo ihr am Dienstag standet.

---

## 6. Messe-Modus

Du startest eine Messe:

```
China International Furniture Fair — Shanghai 2026
```

Ab dann gehört alles automatisch dazu, und die App speichert durchgehend die Kette:

```
Hall → Booth → Supplier → Produkt

Hall 3
  Booth C21 · Mobili Furniture · 4 Produkte
  Booth C24 · Yipin Home · 2 Produkte
Hall 5.1
  Booth B17 · Shanghai Hengtai · 7 Produkte
```

Dazu ein **Stand Reference Photo** — ein Foto vom Stand selbst, mit Logo und
Standnummer im Bild. Das ist am dritten Tag mehr wert als jede Notiz.

---

## 7. Kategorien und Tags

Feste Kategorien, damit Filter funktionieren:

`Sofas · Chairs · Tables · Beds · Cabinets · Lighting · Outdoor · Accessories`

Freie Tags, damit du denken kannst:

`Hotel · Apartment · Luxury · Minimal · Japandi · Outdoor · Potential Business · Buy for myself`

Die Kategorie wird beim Speichern vorgeschlagen (zuletzt benutzte zuerst),
Tags vergibst du im Hotel.

---

## 8. Vergleichsmodus

Bis zu vier Produkte markieren, „Compare" drücken:

|  | Sofa A | Sofa B | Sofa C |
|---|---|---|---|
| RMB | ¥4.800 | ¥3.500 | ¥5.200 |
| EUR | €575 | €419 | €623 |
| MOQ | 5 | 20 | 2 |
| Qualität | 9 | 7 | 9 |
| Lead Time | 30 d | 20 d | 35 d |
| Supplier | 9/10 | 6/10 | 8/10 |

Und darunter die Auswertung:

```
Best Value    Sofa A
Cheapest      Sofa B
Best Quality  Sofa C
```

„Best Value" ist dabei kein Bauchgefühl, sondern eine offengelegte Formel:
**Gesamtnote ÷ Landed Cost**, normiert auf 100. Die App zeigt, wie sie darauf kommt —
eine Empfehlung, deren Rechenweg man nicht sieht, glaubt man nach dem zweiten Mal nicht mehr.

Zeilen mit dem größten Unterschied werden hervorgehoben, damit man beim Wischen
sieht, worauf es ankommt.

---

## 9. Import-Kosten

Denn ¥4.000 Einkaufspreis sagt für sich genommen wenig.

```
Produkt         ¥ 4.000   →   € 479
Shipping                      € 130
Customs                       €  45
VAT                           € 110
Other Costs                   €  25
─────────────────────────────────────
Estimated landed cost         € 789

Target selling price          € 1.799
Estimated gross margin        € 1.010  ·  56 %
```

Alle Felder sind optional und pro Messe vorbelegbar, damit du sie nicht 124-mal
eintippst. Shipping wird aus dem Volumen berechnet (Abschnitt 10), nicht geraten.

---

## 10. Container Calculator

Bei Möbeln entscheidet das Volumen, nicht das Gewicht.

```
Produkt        240 × 95 × 72 cm
Volumen        1,64 m³
Kartonmaß      255 × 102 × 80 cm   →   2,08 m³      ← das zählt

40 HQ Container · ~68 m³ nutzbar
Estimated capacity        ~ 32 Sofas
Shipping cost / unit      ca. € 154
```

Dazu ein Füllstand über alle markierten Produkte:

```
40′ HQ   ██████████████░░░░░░   41,2 / 68 m³   (61 %)
```

Beantwortet die Frage, die du auf jeder Messe hast: Kriege ich damit einen Container
voll, oder muss ich LCL fahren? Mit Warnung bei Unterfüllung — LCL ist pro m³
deutlich teurer und kippt die Kalkulation.

---

## 11. Hall View und Rückweg-Route

Aus Halle und Booth baut die App die Übersicht:

```
Hall 1    12 Produkte
Hall 2     7 Produkte
Hall 3    19 Produkte
Hall 5.1  11 Produkte
```

Und am letzten Messetag: *„Zeig mir alle ⭐ Must Buy, die ich nochmal besuchen muss."*

```
Hall 2 → Booth D12   Sofa „Nimbus"
Hall 3 → Booth B07   Esstisch Eiche
Hall 5 → Booth A31   Outdoor-Serie
        3 Stände · abhaken beim Besuch
```

Ehrlich dazu: das ist eine **nach Halle und Standnummer sortierte Abhakliste**,
keine echte Karte — Messeplandaten gibt es nicht als Datei. Was gut funktioniert:
den offiziellen Hallenplan als Foto hinterlegen und die Liste danebenlegen.
Für den Zweck reicht das vollkommen.

---

## 12. Foto → Informationen (OCR / AI)

Dein Killer-Feature. Es ist auch das einzige, das eine echte technische
Vorentscheidung erzwingt — deshalb hier ungeschminkt.

**Was erkannt werden soll**

| Aufnahme | Ziel |
|---|---|
| Preisschild | `¥ 3.980 / set`, `MOQ 10`, `1800 × 900 × 760 mm` |
| Visitenkarte | Company · Contact · WeChat · Phone · Email · Website |
| QR-Code | WeChat-Kontakt, Katalog-Link |
| Produktkatalog | Modellname, Maße, Materialangabe |
| Messestand | Firmenname, Standnummer |

**Was realistisch geht**

| Weg | Chinesisch | Offline | Verfügbar |
|---|---|---|---|
| **Apple Vision Framework** | sehr gut (zh-Hans/zh-Hant seit iOS 14) | ja | nur in nativer App mit Dev-Build — **nicht in Expo Go** |
| **Cloud-Vision (GPT/Claude/Google)** | exzellent | nein | **in China ohne VPN nicht erreichbar** |
| **Tesseract.js im Browser** | Ziffern gut, Chinesisch schwach | ja | überall, sofort |
| **iOS Live Text** | sehr gut | ja | schon auf deinem Handy — manuell kopieren |

Zwei Punkte, die die Planung verändern:

1. **Apple Vision braucht einen nativen Build**, also Apple-Developer-Account und
   EAS Build. In Expo Go läuft es nicht.
2. **Cloud-KI ist in China nicht erreichbar.** OpenAI und Claude sind hinter der
   Great Firewall ohne VPN tot. Die KI-Features wären also genau dort nicht nutzbar,
   wo du sie brauchst — es sei denn, du hast einen funktionierenden VPN im Hotel.

Für Ziffern auf Preisschildern ist Tesseract.js im Browser übrigens brauchbar
(`¥`, Zahlen, `mm`, `MOQ`) — das wäre ein Zwischenschritt ohne native App.

---

## 13. Technik — die eine Entscheidung

Du hast React Native + Expo + SQLite + Apple Vision vorgeschlagen. Das ist für die
Vollversion die richtige Wahl. Nur: **so bekommst du diese Woche nichts aufs Handy.**

| Weg | auf dem Handy in | Kosten | OCR | Haken |
|---|---|---|---|---|
| **PWA** (HTML/JS, IndexedDB) | ~1 Stunde | 0 € | nur Tesseract.js | kein Apple Vision |
| **Expo Go** | 2–3 h deiner Zeit | 0 € | keins | braucht Laptop + Expo-Account, läuft in fremder App-Sandbox |
| **RN standalone** (EAS Build) | 1–3 Tage | 99 $/Jahr | Apple Vision | Developer-Account-Freischaltung dauert oft 24–48 h |

**Der Punkt:** In deinem eigenen V1-Umfang ist gar kein OCR enthalten — Kamera,
Produktkarten, RMB/EUR/USD, Supplier, Booth, Favoriten, Kategorien, Vergleich.
**Genau das kann eine PWA vollständig.** Der native Weg lohnt sich für V2, wo OCR lebt.

### Vorschlag: zwei Spuren

**Spur A — jetzt, für diese Messe.** SOURCE als PWA. Vanilla JS, IndexedDB, Service
Worker, Homescreen-Icon. Kein Store, kein Account, kein Build. Ich baue sie, du
öffnest den Link einmal im Hotel-WLAN, danach läuft sie im Flugmodus. Morgen früh
in Halle 3 einsatzbereit.

**Spur B — nach der Messe, wenn Spur A sich bewährt hat.** React Native + Expo,
SQLite, Apple Vision, optional Cloud-Vision. Das Datenmodell ist von Anfang an
identisch (IndexedDB-Stores ≙ SQLite-Tabellen), es gibt einen JSON-Export, und die
native App importiert deine Shanghai-Daten beim ersten Start.

Es kann gut sein, dass du nach der Messe feststellst, dass Spur A reicht. Dann hast
du 99 $ und drei Tage gespart. Stellst du fest, dass dich das Abtippen der Preise
wirklich Zeit gekostet hat, ist Spur B ihr Geld wert — und du weißt dann genau, warum.

### Aufbau (Spur A)

```
index.html      eine Datei, mehrere Views
app.js          State, Navigation, Views
db.js           IndexedDB: products · suppliers · fairs · photos · settings
fx.js           Kurs holen, cachen, manuell überschreiben
calc.js         Umrechnung, CBM, Landed Cost, Marge, Best-Value  ← reine Funktionen
sw.js           Service Worker, offline-first
manifest.json   Icon, standalone, Portrait
```

Keine externen Abhängigkeiten zur Laufzeit — keine Google Fonts, keine CDNs
(in China blockiert). Fotos beim Speichern auf 1600 px / JPEG q0.8 heruntergerechnet,
rund 250 KB statt 4 MB. Nichts verlässt das Gerät.

---

## 14. Was ich an deinem Konzept ändern würde

Sieben Punkte, alle klein, alle mit Konsequenz.

**1 · Container mit Kartonmaß rechnen, nicht mit Produktmaß.**
Dein Sofa hat 1,64 m³, der Karton hat rund 2,08 m³ — Möbel reisen verpackt.
Aus „~42 Sofas" werden real eher **~32**, und die Fracht je Stück steigt von
€117 auf ca. €154. Das ist keine Kleinigkeit: es sind 24 % auf einen Posten,
der bei billigen Möbeln über die Marge entscheidet. Die App fragt beides ab und
rechnet mit dem Karton, sobald er da ist.

**2 · Die Gesamtnote braucht eine offengelegte Gewichtung.**
Design 9, Qualität 8, Preis 7 ergibt im Schnitt 8,0 — du hast 8,4 geschrieben.
Das passt zu einer Gewichtung von **Design 50 % · Qualität 40 % · Preis 10 %**,
also einem design-getriebenen Einkäufer. Genau so setze ich es als Default,
verstellbar in den Einstellungen. Wichtig ist nur, dass die Zahl reproduzierbar ist.

**3 · VAT gehört nicht in die Marge, wenn du gewerblich einkaufst.**
In deinem Beispiel steckt die Einfuhrumsatzsteuer mit €110 im Landed Cost.
Mit Vorsteuerabzug ist sie ein durchlaufender Posten: Landed wird €679 statt €789,
die Marge 62 % statt 56 %. Ein Schalter in den Einstellungen, beide Zahlen sichtbar.

**4 · Die Leitwährung mitspeichern.**
Auf Exportmessen wird häufig in **USD FOB** quotiert, nicht in RMB. Wenn die App
den USD-Preis in RMB umrechnet und du später aus RMB wieder in USD zurückrechnest,
wandert der Preis. Also: speichern, in welcher Währung tatsächlich angeboten wurde,
und immer aus dieser Zahl heraus rechnen. Die anderen beiden sind nur Anzeige.

**5 · „Preisart unbekannt" nicht als Default.**
Du hast EXW/FOB/CIF/unbekannt vorgesehen — richtig. Aber wenn „unbekannt"
vorausgewählt ist, steht es am Freitag bei 80 Produkten. Vorschlag: die Preisart
wird **pro Stand einmal** gesetzt und dann vererbt, und die Inbox markiert alles
ohne Preisart als unvollständig.

**6 · Hall View ist eine Abhakliste, keine Karte.**
Siehe Abschnitt 11. Sag es der App-Beschreibung ruhig ehrlich — sonst enttäuscht
das Feature beim ersten Öffnen, obwohl es seinen Zweck erfüllt.

**7 · Tägliches Backup ist Pflicht, nicht Kür.**
Bei SQLite oder IndexedDB liegt alles auf einem Gerät. Handy weg, Akku leer,
iOS räumt PWA-Daten auf — und die Messe ist weg. Deshalb: abends eine Erinnerung
„Backup exportieren", ZIP über das Teilen-Menü in iCloud oder als Mail an dich selbst.
Das ist der einzige echte Single Point of Failure im ganzen Konzept.

---

## 15. Roadmap — Stand

**V1 · gebaut** — PWA, offline, alles lokal
Messe-Modus · Kamera und Mehrfachfotos · Produktkarte mit allen Feldern ·
RMB/USD/EUR mit gecachtem Kurs und Leitwährung · Supplier und Booth ·
Status und gewichtete Bewertung · Kategorien und Tags · Smart Inbox mit
Zeitgruppierung · Vergleich · Suche · Hall View · JSON/CSV/ZIP-Export

**V2 · gebaut**
Landed Cost in drei Stufen (aus / Einstandskosten / mit Verkauf) ·
Container-Planer mit Mengen und Füllstand · Marge, Kalkulationsfaktor,
Deal-Ampel und Break-even · Verhandlungs-Log · Fotorollen und
Vollbild-Anzeige · Visitenkarten- und Standfoto beim Lieferanten ·
Anfrage-Sheet auf Englisch zum Teilen oder Drucken · Sprachnotizen ·
Mehrfachauswahl mit Sammelaktionen · Sortieren und Gruppieren ·
Inbox mit Direkteingabe der Preise · Duplikat-Hinweis · Statistik ·
Modellnummer, Ausführungen und Prozess-Status · druckbarer Messebericht ·
Erststart-Assistent · Löschen mit Rückgängig · Offline- und Update-Hinweis ·
Backup-Erinnerung am Abend

**V2.1 · gebaut**
Preisschild aus der Zwischenablage lesen (Live Text) · Backup zusammenführen
statt nur ersetzen · Nachfassen nach der Messe entlang des Prozessstands ·
Preis-Einordnung gegen die eigenen Funde, auch je m³

**V3 · offen, nach der Messe zu entscheiden**
Native App (React Native + Expo + SQLite) · Apple Vision OCR für Preisschilder
und Visitenkarten · QR-Scan · Übersetzung Chinesisch → Deutsch ·
Cloud-Vision, wenn Netz da ist

Ob V3 sich lohnt, entscheidet sich an einer einzigen Frage: hat dich das
Abtippen der Preise auf dieser Messe wirklich Zeit gekostet? Wenn nicht,
sparst du dir 99 $ im Jahr und drei Tage Arbeit.

## 16. Nächster Schritt

V1 als PWA ist so geschnitten, dass sie **diese Messe noch trägt**. Sag Bescheid,
dann baue ich sie in `furniture-app/` — du bekommst einen Link, öffnest ihn einmal
im Hotel-WLAN, legst sie auf den Homescreen, und morgen früh in Halle 3 läuft sie
im Flugmodus.
