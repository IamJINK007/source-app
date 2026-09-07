# SOURCE

Sourcing-App für Möbelmessen. Läuft lokal auf dem iPhone, funktioniert
vollständig offline, speichert alles ausschließlich auf dem Gerät.

Konzept: [`SOURCE-KONZEPT.md`](SOURCE-KONZEPT.md)

---

## Erfassen

Am Stand hast du zehn bis zwanzig Sekunden. Der Erfassen-Screen besteht darum
aus drei Dingen: einer **bildschirmfüllenden Aufnahmefläche**, einem großen
Preisfeld und einer **festen Aktionsleiste**, die immer sichtbar bleibt — du
musst nie ans Seitenende scrollen, um zu speichern. Name, Kategorie und
Preisart sitzen hinter einem Aufklapper; im Gedränge sind sie Ballast, im Hotel
zwei Taps entfernt. Der einzige Pflicht-Tap ist **Speichern**: ein Produkt darf
mit nichts als einem Foto in der Datenbank landen, alles Unvollständige wandert
in die Inbox.

- Kamera oder Fotomediathek, beliebig viele Fotos je Produkt
- **Fotorollen**: Produkt, Preisschild, Visitenkarte, Messestand, Katalog, Detail
- **„Speichern & nächstes"** vererbt Messe, Stand, Lieferant, Währung und Preisart
- Sterne-Status: Must Buy, Favorit, Vielleicht, Nein
- Vollbild-Anzeige mit Wischen, Rollenwechsel und Titelbild-Auswahl
- **Sprachnotizen** direkt im Erfassen-Flow. Hände voll, laut am Stand, keine
  Lust zu tippen — einsprechen und abends abschreiben. Bis drei Minuten je
  Aufnahme, liegen wie alles andere lokal im Gerät und wandern mit ins Backup.
- Schnelltasten für Preisschild und Visitenkarte, damit die Rolle gleich stimmt

## Preisschild einfügen

iPhones erkennen Text in Fotos von selbst (Live Text). Du fotografierst das
Preisschild, hältst im Bild auf den Text, kopierst — und tippst in der App auf
**Einfügen**. Die App liest heraus, was drinsteht:

```
¥ 3.980 / set          →  Preis 3.980 · RMB · pro Set
MOQ 10                 →  MOQ 10
1800 × 900 × 760 mm    →  Maße 180 × 90 × 76 cm
```

Sie versteht `4.800` und `4,800` als Viertausendachthundert, aber `320.50` als
Dezimalzahl. Sie erkennt ¥ ￥ RMB CNY 元, $ USD, € EUR, deutsche wie chinesische
Schreibweisen (`起订量 20`, `型号: HT-8827`), rechnet Millimeter und Meter in
Zentimeter um und liest Maße **zuerst**, damit nicht die erste Kantenlänge als
Preis durchgeht. Fehlt die Einheit, wird sie aus der Größenordnung geschlossen
und offen als Annahme gekennzeichnet.

Vor dem Übernehmen zeigt sie, was sie gefunden hat. Nichts wird still gesetzt.

## Preis und Währung

- RMB, USD und EUR. Die **Leitwährung** — die, in der tatsächlich angeboten
  wurde — wird gespeichert und ist immer die Rechenbasis. Nie hin und zurück.
- **Incoterm ist ein eigenes Feld** (EXW / FOB / CIF / DDP) und wird pro Stand
  vererbt, statt auf „unbekannt" zu stehen.
- Preisbasis pro Stück, pro Set oder pro Karton. MOQ separat.
- Kurse über drei Quellen holbar, mit Zeitstempel gecacht, jederzeit von Hand
  überschreibbar. Ohne Netz rechnet die App mit dem gespeicherten Kurs weiter
  und sagt, wie alt er ist.

## Kalkulation

Drei Stufen, umschaltbar in den Einstellungen:

| Stufe | Inhalt |
|---|---|
| **Aus** | nur Einkaufspreise, am schlanksten |
| **Einstandskosten** | Warenwert + Fracht nach Volumen + Zoll + Nebenkosten = Landed Cost |
| **Mit Verkauf** | zusätzlich Zielpreis, Marge, Kalkulationsfaktor, Ampel und Verhandlungsgrenze |

- Gerechnet wird mit dem **Kartonmaß**, nur ersatzweise mit dem Produktmaß.
  Bei Möbeln macht der Unterschied schnell zwanzig Prozent aus.
- Einfuhrumsatzsteuer ist bei Vorsteuerabzug ein durchlaufender Posten und
  bleibt aus der Marge heraus — umschaltbar.
- **Break-even**: bis zu welchem Einkaufspreis der Zielfaktor hält. Das ist
  deine Verhandlungsgrenze, und du hast sie am Stand auf dem Handy.
- Fracht, Zoll und Nebenkosten lassen sich pro Produkt überschreiben, wenn du
  eine echte Zahl vom Spediteur hast.

## Container-Planer

Produkte mit Menge hineinlegen, Füllstand ablesen: 20′, 40′ oder 40′ HQ.
Warnt bei Überladung und bei Unterfüllung unter 65 Prozent, weil LCL pro
Kubikmeter deutlich teurer ist und die Kalkulation kippt. Kapazität ist
nutzbares Ladevolumen, nicht Nennvolumen.

## Lieferanten

Halle, Booth, Ansprechpartner, WeChat, Telefon, Website, Ort.
**Visitenkarte und Standfoto** direkt aus der Kamera — abtippen musst du nichts.
Rating von 1 bis 10 und Einschätzungs-Checkboxen (eigener Hersteller, Export
nach Europa, Zertifikate, Customization, Samples).

**Anfrage erstellen** baut daraus ein englisches Inquiry-Sheet mit allen
Positionen und den Standardfragen zu Preisstaffel, Kartonmaß, Lieferzeit,
Mustern, Zertifikaten und Zahlungsbedingungen — teilbar über das iOS-Teilen-Menü
direkt nach WeChat oder Mail, oder als Druckansicht zum Sichern als PDF.

## Smart Inbox

Alles Unvollständige sammelt sich hier, gruppiert nach Zeitnähe: Fotos, die
innerhalb von zwölf Minuten entstanden sind, gehören meist zum selben Stand.
Eine ganze Gruppe wird mit einem Tap einem Lieferanten zugeordnet, die Preisart
für alle auf einmal gesetzt. Preise trägst du **direkt in der Inbox** ein, ohne
jedes Produkt einzeln zu öffnen — Feld antippen, Zahl, weiter. Jede Zeile zeigt,
was noch fehlt.

Das ersetzt den größten Teil dessen, wofür man sonst Texterkennung bräuchte,
und funktioniert im Flugmodus.

## Liste, Auswahl, Vergleich

- Volltextsuche über Name, Material, Stand, Tags und Notizen
- Filter nach Status, Kategorie, Tag, Halle und Lieferant
- Sieben Sortierungen, Gruppierung nach Lieferant, Halle, Kategorie oder Status
- **Mehrfachauswahl** per Langdruck auf eine Kachel oder über „Auswählen" in
  der Kopfzeile. Erst dann erscheinen Auswahlkreise — im Normalzustand bleibt
  das Raster ruhig. Sammelaktionen: Status setzen, Stand zuordnen, Tag
  vergeben, in den Container legen, löschen
- **Vergleich** von bis zu vier Produkten. Bestwert je Zeile markiert, dazu
  Best Value, Cheapest und Best Quality. Best Value ist Gesamtnote geteilt
  durch Preis in Euro — eine Formel, die du nachrechnen kannst.
- **Duplikat-Hinweis**: gleiche Kategorie, Preis im Umkreis von fünfzehn
  Prozent, anderer Stand. Vielleicht derselbe Artikel zweimal gesehen.

## Alles direkt ausfüllen

Auf der Produktseite ist **jede Zeile ein Formular**. Antippen öffnet ein Sheet
mit genau dem einen Feld — Textfeld, Chips, drei Maßfelder oder Schieber, je
nachdem, was gebraucht wird. Kein Umweg über einen Bearbeiten-Bildschirm, kein
Suchen nach der richtigen Zeile in einem langen Formular. Ein Plus am
Zeilenende heißt: fehlt noch.

Das gilt auch für alles, was früher einfach nichts angezeigt hat: fehlende
Fotos, leere Tags, keine Bewertung, keine Notiz. Nichts ist eine Sackgasse.

Oben steht, **was fehlt und wie viel**. Ein Tipp darauf startet einen geführten
Durchlauf: Feld für Feld, mit Fortschrittsbalken und „Weiter", in einer
sinnvollen Reihenfolge — erst das, was den Preis vergleichbar macht (Preis,
Preisart, Lieferant), dann Stand und Kategorie, dann Kartonmaß für die Fracht,
zuletzt der Rest. Abbrechen geht jederzeit, das Ausgefüllte bleibt.

Zwei Sheets rechnen mit: Bei den Maßen läuft das Volumen in m³ mit, während man
tippt. Bei der Bewertung die gewichtete Gesamtnote. Wer beim Erfassen einen
Lieferanten braucht, den es noch nicht gibt, legt ihn aus dem Sheet heraus an —
der Durchlauf macht danach weiter, wo er war.

## Nichts geht verloren

Jede Eingabe wird 400 ms nach dem letzten Tastendruck automatisch in die
Datenbank geschrieben — auch beim Seitenwechsel, beim Wegwischen der App und
beim Sperren des Telefons. Wer aus dem Bearbeiten-Screen zurücktippt statt auf
„Fertig" zu drücken, verliert nichts. Eine kleine Zeile über dem Knopf zeigt
den Zustand an.

## Prozess, Modellnummer, Ausführungen

Neben dem Interesse-Status (Must Buy, Favorit, Vielleicht, Nein) gibt es eine
zweite Dimension: **wo die Position im Beschaffungsprozess steht** — Muster
angefragt, Angebot erhalten, bestellt. Filterbar und gruppierbar.

Dazu **Modellnummer** (chinesische Lieferanten referenzieren fast alles über
`HT-8827` statt über den Namen) und ein Feld für **Ausführungen und Farben**.
Beides landet in der Suche, im Anfrage-Sheet und im Bericht.

## Nachfassen nach der Messe

Die Messe endet Freitag, dann fängt die Arbeit an. Diese Ansicht sortiert alle
Lieferanten nach ihrem Stand im Prozess:

| Gruppe | Was drinsteht |
|---|---|
| **Noch nicht angefragt** | Lieferanten mit Must Buy oder Favorit, an die keine Anfrage raus ist |
| **Wartet auf Antwort** | Anfrage gesendet, mit Tagen seit dem Versand. Ab fünf Tagen wird die Karte markiert |
| **Angebot erhalten** | Antwort da — vergleichen, Muster bestellen, verhandeln |
| **Bestellt** | erledigt |

Der Zähler startet, sobald du das Anfrage-Sheet teilst; hast du anderweitig
geschrieben, vermerkst du es mit einem Tap. Je Karte: nachfassen, Antwort
vermerken oder erneut anfragen. Überfällige Anfragen erscheinen als Zahl auf
der Startseite.

## Preis-Einordnung

Nach zwei Messetagen kennt die App zwölf Sofas. Ab vier vergleichbaren Funden
zeigt jede Produktseite, wo dieses eine steht: eine Verteilung mit Median,
dazu **„Liegt im teuersten Viertel — teurer als 5 von 5 vergleichbaren Sofas."**

Darunter der **Preis je m³** gegen den Median der Gruppe. Bei Möbeln entscheidet
das Volumen über die Fracht, und ein günstiges Sofa, das doppelt so viel Platz
frisst, ist am Ende teurer. Das ist die Zahl, die sonst niemand am Stand hat.

## Messebericht

Alles mit Must Buy oder Favorit, nach Lieferant gruppiert, mit Fotos, Preisen,
Landed Cost, Gesamtvolumen und Container-Füllstand. Zum Drucken, als PDF sichern
oder als Text teilen — für den Partner zuhause, der nicht mit auf der Messe war.

## Bewertung und Verhandlung

Design, Qualität und Preis je 1 bis 10, gewichtete Gesamtnote — Standard
50 / 40 / 10 Prozent, verstellbar. Verhandlungs-Log je Produkt: Angebot,
Gegenangebot, finaler Preis, jeweils mit Datum. Der finale Preis übernimmt
sich in die Produktkarte.

## Hallen und Rückweg

Produkte je Halle, dazu der Must-Buy-Rückweg für den letzten Messetag,
sortiert nach Halle und Standnummer. Eine Abhakliste, keine echte Karte —
Messeplandaten gibt es nicht als Datei. Am besten neben den offiziellen
Hallenplan legen.

## Statistik

Produkte, Lieferanten, Hallen, Gesamtvolumen, Warenwert, Durchschnittspreis
und Durchschnittsnote. Verteilungen nach Kategorie, Status, Halle und
Top-Lieferanten, Erfassung pro Tag, Preisspanne mit Median.

## Backup

**Das Wichtigste an der ganzen App.** Alles liegt auf einem Gerät.

- **Vollbackup als ZIP** — Daten, alle Fotos, deren Rollen und alle
  Sprachnotizen. Eigener store-only ZIP-Writer, kein externes Paket
- **JSON** ohne Fotos, klein und schnell
- **CSV** mit 48 Spalten für Excel und Numbers, inklusive Modellnummer,
  Landed Cost, Faktor, Marge, Kartonmaß, Fortschritt und Verhandlungsstand
- **Import** mit Wahl: **zusammenführen** oder **ersetzen**. Zusammenführen
  gleicht über die Kennungen ab, behält bei Konflikten die neuere Fassung und
  lässt alles stehen, was nur auf diesem Gerät liegt — Wiederherstellen ist
  damit gefahrlos, und zwei Telefone lassen sich zusammenlegen. Vorher siehst
  du, was im Backup steckt und wie viel davon neu ist; danach die Bilanz
  („12 neu, 3 aktualisiert, 40 unverändert").
- Ab 17 Uhr erinnert die App, wenn seit zwanzig Stunden kein Backup lief

---

## Oberfläche

Erklärtexte ziehen sich zurück: Was am ersten Tag hilft, steht am dritten nur
im Weg. Nach drei Besuchen eines Bildschirms bleibt die Kurzfassung. Warnungen
sind davon ausgenommen — die bleiben.


Dunkel, fast monochrom, warm. Farbe trägt ausschließlich Bedeutung: Gold für
Must Buy, Rosé für Favorit, Blaugrau für Vielleicht, Rot für Nein und für die
Ampel. Alles andere ist Knochenweiß auf warmem Anthrazit. Keine Emojis, sondern
ein eigenes Inline-SVG-Sprite aus 37 Symbolen in einheitlicher Strichstärke.

Die Startseite ist eine Übersicht, keine Menüliste: Einkaufsvolumen groß oben,
darunter die Erfassen-Taste, vier Statuskacheln mit Zahlen, ein Streifen der
zuletzt erfassten Produkte **als Bilder** und vier Übersichtskacheln.

Kontraste sind für helle Messehallen ausgelegt — Sekundärtext liegt bei etwa
8:1, Tertiärtext bei 4,4:1 gegen den Hintergrund.

Bewegung ist sparsam: Seiten blenden auf und steigen sieben Pixel, Listen
gestaffelt, der Navigationsindikator gleitet, Bilder blenden ein statt zu
springen, die Summe zählt hoch. Alles hinter `prefers-reduced-motion`
abgeschaltet.

Die Navigation klebt am unteren Rand — auf jedem Bildschirm, beim Scrollen und
während der Seitenanimation. Sie hängt an `<body>`, nicht am animierten
Seitencontainer, denn ein transformierter Vorfahre macht aus `position:fixed`
sonst `position:absolute` und die Leiste wandert mit nach oben. Die Höhe der
Home-Anzeige kommt aus `safe-area-inset-bottom`.

Kommt die Tastatur hoch, misst `visualViewport` ihre Höhe: Die Navigation
fährt nach unten weg, die Aktionsleiste rückt direkt über die Tasten, statt
wie sonst auf iOS mitten im Bild hängen zu bleiben. Beim Schließen fährt
alles zurück.

## Technik

```
index.html            komplette App: Markup, CSS und JS in einer Datei
manifest.webmanifest  Homescreen-Installation
sw.js                 Service Worker, cacht die App-Shell für offline
icon-*.png            App-Icons
```

Kein Build-Schritt, keine Abhängigkeiten, keine externen Fonts oder CDNs —
in China ohnehin blockiert. Bilder laden über einen IntersectionObserver erst
kurz bevor sie ins Sichtfeld kommen, und der Object-URL-Cache ist gedeckelt:
bei 300 Produkten sind zehn Bilder im Speicher statt dreihundert. Vollbilder
werden beim Verlassen der Detailseite wieder freigegeben. Daten in IndexedDB, Fotos als Blob, beim Speichern
auf 1600 px / JPEG q0.8 heruntergerechnet, rund 250 KB statt 4 MB.
Sprachnotizen über MediaRecorder, als `audio/mp4` auf iOS.
Icons sind ein eigenes Inline-SVG-Sprite, keine Emojis.

Über das Homescreen-Symbol lange drücken führt direkt zu Erfassen, Inbox oder
Container-Planer.

Updates meldet die App über den Service Worker und lädt erst nach Bestätigung
neu — nicht mitten in der Erfassung.

## Grosse iPhones, Quer- und Hochformat

Die App ist auf 390 Punkte Breite entstanden. Ab **430 Punkten** — iPhone Pro
Max und aufwärts — greift ein eigener Satz Regeln. Nicht grössere Schrift: ein
Buchstabe ist in Punkten auf jedem iPhone gleich gross. Sondern mehr Inhalt und
grosszügigere Flächen: 24 statt 20 Punkte Seitenrand, Produktbilder im
Verhältnis 4:3 statt quadratisch (Möbel sind breiter als hoch, und es passt
eine halbe Reihe mehr auf den Schirm), breitere Karten im Streifen der zuletzt
erfassten Produkte, und jede Trefferfläche auf mindestens 44 Punkte — die
Datenzeilen liegen bei 49, die Chips bei 44, die Navigation bei 58.

Die **Dynamic Island** wird über `safe-area-inset-*` freigehalten, im
Hochformat oben, im Querformat seitlich. Letzteres fehlte: die App kannte nur
oben und unten, quer lag der Inhalt unter der Insel. Jetzt respektieren
`#app`, Navigation, Aktionsleiste, Auswahlleiste, Recorder, Sheets und die
Vollbildanzeige alle vier Seiten.

Im **Querformat** fraß ein einziges Produktfoto den ganzen Bildschirm — 4:3 auf
956 Punkte Breite sind 717 Punkte Höhe, mehr als das Gerät hat. Jetzt ist die
Galerie ein Streifen über 38 % der Höhe, die Navigation legt Beschriftung neben
das Symbol statt darunter, das Produktraster geht auf vier Spalten und das
Rahmenwerk drumherum wird schmaler, damit Ware statt Bedienung zu sehen ist.

## Zurückwischen und Scrollstand

Auf 6,9 Zoll liegt der Zurück-Pfeil oben links ausserhalb dessen, was ein
Daumen erreicht. Ein **Zug vom linken Rand** tut dasselbe: die Seite folgt
gedämpft und blendet leicht ab, ab 78 Punkten geht es zurück. Über
Bildstreifen, Chip-Reihen, Tabellen und Eingabefeldern greift die Geste nicht,
und von der Startseite aus auch nicht — dort führt kein Zurück hin.

Der **Scrollstand jeder Seite wird gemerkt**. Wer aus einem Produkt in eine
Liste mit dreissig Einträgen zurückkommt, landet wieder dort, wo er war, statt
oben.

## Fotos vom iPhone

Ein Foto vom 17 Pro Max hat 24 Megapixel, im Modus für maximale Auflösung 48.
Die App hat es zweimal parallel dekodiert — einmal fürs Bild, einmal fürs
Vorschaubild — was auf iOS den Speicher sprengt. Jetzt wird einmal dekodiert
und beides aus derselben Quelle gezogen.

Verkleinert wird in **Halbierungsschritten**: ein einziger Sprung von 8000 auf
1600 Pixel franst sichtbar aus, weil Canvas bei mehr als Faktor zwei nur grob
filtert. 4000 × 3000 Pixel sind in gut 200 ms auf 1600 × 1200 plus 400 × 300
Vorschau heruntergerechnet.

Und `createImageBitmap` bekommt jetzt `imageOrientation: "from-image"`. Ohne
das ignoriert es die EXIF-Drehung — hochkant fotografierte Schränke lagen quer.

## Maße schon beim Erfassen

Der Erfassen-Bildschirm hatte lange nur Name, Kategorie und Preisart hinter dem
Aufklapper — mit dem Maßband am Stand kam man an kein Maßfeld heran. Jetzt
stehen dort **Produktmaß, Kartonmaß, Modellnummer, MOQ und Material**, mit
mitlaufendem Volumen in m³ während man tippt. Zugeklappt bleibt der Bildschirm
so schnell wie vorher: Foto, Preis, Stand, Status.

## Warum die untere Leiste zu hoch saß

Die Tastaturerkennung rechnete `innerHeight − visualViewport.height`. In einem
Safari-Tab ist der sichtbare Bereich aber schon **ohne** Tastatur um die Höhe
der Safari-Leisten kleiner, 50 bis 90 Punkte. Genau um diesen Betrag rutschte
die Aktionsleiste nach oben — und über 80 Punkten fuhr die Navigation ganz weg.

Verlässlich ist nur die Kombination: ein **Textfeld hat den Fokus** *und* der
fehlende Bereich hat Tastaturgröße (mindestens 120 Punkte). Fokuswechsel lösen
die Neuberechnung mit aus, weil iOS die Größenänderung je nach Version davor
oder danach meldet.

## Warum die Animationen unruhig wirkten

`render()` baut die Seite neu auf und lief bei **jedem** Statuschip, jedem
gespeicherten Feld, jedem Filter — und spielte dabei jedes Mal die komplette
Eintrittsanimation samt Zahlenzähler und Bild-Einblendung neu ab. Ein Tipp auf
„Must Buy" ließ die ganze Seite noch einmal von unten einfliegen.

Die Eintrittsanimation gehört zum Seitenwechsel. Bleibt die Route gleich, wird
nur der Inhalt getauscht: kein Neueinblenden, kein Hochzählen, und Bilder, die
schon geladen waren, sind sofort da statt erneut aufzublenden.

Dazu zwei teure Stellen entschärft: der Sheet-Hintergrund animierte Deckkraft
**auf** einem unscharfen Vollbild-Layer — das zwingt iOS, den Weichzeichner in
jedem Bild neu zu rechnen; jetzt bleibt die Unschärfe konstant und nur die
Farbe fährt hoch. Und die vollbreiten Leisten filtern nur noch Unschärfe statt
zusätzlich Sättigung. Animiert werden ausschließlich `transform` und `opacity`.

## Welche Fassung läuft

Ganz oben in den Einstellungen steht die Fassungsnummer und ein Knopf **„Auf
Update prüfen"**. Die App sieht außerdem selbst nach, sobald sie in den
Vordergrund kommt, wenn das Netz zurückkehrt und alle 15 Minuten — sonst merkt
man eine neue Fassung erst beim nächsten Kaltstart, und der kommt bei einer App
auf dem Homescreen tagelang nicht.

## Wenn etwas schiefgeht

Auf einer Messe ist ein **stiller** Fehler das Schlimmste: man tippt weiter und
merkt erst abends im Hotel, dass nichts angekommen ist. Alles, was sonst nur in
der Konsole landen würde — ein geworfener Fehler, ein abgelehntes Promise —
wird jetzt einmal ruhig als Meldung sichtbar und in einem Protokoll der letzten
25 Einträge abgelegt (`errorLog()` in der Konsole). Derselbe Fehler in Folge
meldet sich nicht doppelt.

Ein Sonderfall bekommt statt einer Meldung eine Handlung: **voller Speicher**.
Dann steht dort „Platz schaffen" und der Weg führt direkt zum Backup. Und weil
das schleichend passiert — dreihundert Produkte mit je zwei Fotos sind achtzig
Megabyte — prüft die App den Füllstand beim Start, alle zehn Minuten und bei
jeder Rückkehr in den Vordergrund. Ab 80 Prozent warnt ein Banner auf der
Startseite, bevor etwas verloren geht.

Fotos, die sich nicht lesen lassen, wurden an einer Stelle stumm verschluckt.
Jetzt sagt die App, wie viele es waren — und ob der Grund der Speicher war und
nicht das Bild.

## Eingaben, die nicht stimmen können

Die Feld-Sheets prüfen, bevor sie speichern, und sagen den Grund in einem Satz:
ein negativer Preis, Buchstaben in einem Zahlenfeld, eine MOQ unter eins, ein
Maß von null, ein Maß über 20 Metern (fast immer Millimeter statt Zentimeter),
oder zwei von drei Maßen — ohne das dritte gibt es kein Volumen und damit keine
Frachtrechnung. Das Getippte bleibt dabei stehen, man korrigiert nur die eine
Stelle. Ein leeres Feld ist immer erlaubt: so löscht man einen Wert.

## Lange Texte

Ein Produktname ohne Leerzeichen — auf chinesischen Preisschildern eher Regel
als Ausnahme — hat die Seite um 800 Pixel nach rechts gesprengt. Ursache waren
Grid-Spuren mit `1fr`: die haben `min-width:auto` und wachsen mit einem
unteilbaren Wort einfach mit. Alle Spuren stehen jetzt auf `minmax(0,1fr)`, und
`#app` erlaubt Umbruch an beliebiger Stelle — Zahlen, Preise und Eingabefelder
ausgenommen, die sollen zusammenbleiben.

## Auf dem iPhone installieren

Die App braucht eine echte `https://`-Adresse — über `file://` funktionieren
weder IndexedDB noch der Service Worker.

1. Adresse in **Safari** öffnen (nur Safari kann auf iOS installieren).
2. Teilen-Symbol → **Zum Home-Bildschirm**.
3. Die App vom Icon starten. Ab jetzt läuft sie offline.

Web-Apps auf dem Homescreen sind von der Sieben-Tage-Löschregel ausgenommen,
die für normale Safari-Tabs gilt, und die App fordert zusätzlich
`storage.persist()` an. Trotzdem: **abends das ZIP-Backup exportieren.**

## Lokal testen

```bash
python3 -m http.server 8000
# -> http://localhost:8000
```

## Erste Schritte

Beim ersten Start fragt die App nach der Messe und holt, wenn Netz da ist,
die Wechselkurse. Danach: **Produkt erfassen.** Foto, Preis, speichern.
Der Rest kann bis zum Abend warten.
