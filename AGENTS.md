# AGENTS.md – Portfolio 2.0 / Codex Arbeitsregeln

## Ziel

Arbeite preis-leistungsbewusst, langsam genug für Qualität, aber ohne unnötige Tool-Aufrufe, Screenshots, Browser-Runs oder große Refactorings.  
Dieses Projekt ist ein Angular-Portfolio. Aktuell liegt der Fokus auf der Hero-Section und responsivem Feintuning.

## Grundregel: Erst prüfen, dann ändern

Bevor du Code änderst:

1. Lies nur die direkt relevanten Dateien.
2. Erkläre kurz, welche Stelle du ändern willst.
3. Ändere nur den kleinsten nötigen Bereich.
4. Keine großen Umstrukturierungen, wenn der Nutzer nur Feintuning möchte.
5. Keine Desktop-/Tablet-Bereiche anfassen, wenn das Problem nur Mobile betrifft.

## Sparsamer Tool-Einsatz

Bitte arbeite ressourcenschonend:

- Keine unnötigen Browser-Starts.
- Keine wiederholten Screenshots ohne konkreten Grund.
- Keine vollständigen Projekt-Scans, wenn eine konkrete Datei genannt ist.
- Keine langen Suchläufe durch `node_modules`, `dist`, `.angular`, `.git` oder Build-Ordner.
- Nutze vorhandenen Kontext und aktuelle Datei zuerst.
- Führe Tests/Builds nur aus, wenn sie für die Änderung wirklich nötig sind.
- Wenn ein Screenshot nötig ist, nur die betroffene Auflösung prüfen, nicht alle Größen automatisch.
- Nach jeder Änderung stoppen und kurz berichten, statt direkt weiter viele Varianten auszuprobieren.

## Git-Regeln

- Niemals automatisch `git push` ausführen.
- Niemals automatisch mergen.
- Keine Commits ohne ausdrückliche Erlaubnis.
- Änderungen erst zeigen und erklären.
- Wenn eine Commit-Nachricht sinnvoll ist, nur vorschlagen.

## Projektdatei aktuell

Hauptdatei für das aktuelle Thema:

```text
src/app/pages/home/hero/hero.scss
```

## Aktuelle Testgrößen

Diese Größen sind wichtig:

```text
699 × 840
610 × 840
520 × 840
421 × 840
420 × 840
390 × 844
375 × 667
360 × 740
320 × 568
```

## Mobile-Breakpoints im Projekt

Die aktuell wichtigen Bereiche:

```scss
@media (max-width: 699.98px) and (min-height: 641px)
```

Master-Mobile-Bereich für ca. 699 bis 421 Breite.

```scss
@media (max-width: 420px) and (min-height: 641px)
```

Extra-Mobile-Bereich ab 420 Breite.

```scss
@media (max-width: 360px)
```

Finaler Small-Mobile-Bereich für 360 und 320.  
Dieser Block muss ganz unten bleiben, damit er nicht von älteren Mobile-Regeln überschrieben wird.

## Aktueller Hero-Mobile-Stand

Bekannte letzte Punkte:

- 699×840: Wave noch zu tief.
- 610×840: Text soll zentrierter sein, Button etwas tiefer und besser zum Text zentriert.
- 421×840: Wave eher zu hoch, Foto etwas höher, mehr Abstand zwischen Text und Button.
- 420×840: mehr Abstand zwischen Text und Button, `I am` größer/besser flankierend.
- 390×844: mehr Abstand zwischen Text und Button.
- 375×667: Wave höher.
- 360×740: Wave höher, `I am` größer/besser flankierend, mehr Abstand zwischen Text und Button.
- 320×568: Wave höher, `I am` soll Name/Role besser flankieren, Text/Button-Abstand verbessern.

## Vorgehen bei CSS-Feintuning

Bitte so arbeiten:

1. Prüfe zuerst, welche Media Query bei der genannten Größe greift.
2. Prüfe, ob später in der Datei ein anderer Block denselben Wert überschreibt.
3. Wenn nötig, nutze einen kleinen finalen Override ganz unten.
4. Ändere möglichst nur:
   - `--wave-top`
   - `.hero-photo-wrap top`
   - `.hero-text top / left / column-gap`
   - `.iam font-size / top / transform`
   - `.hero-cta top`
   - Button-Größe nur bei kleinen Geräten.
5. Keine unnötigen Änderungen an Farben, Fonts, HTML-Struktur oder Desktop-Layout.

## CSS-Qualitätsregeln

- Keine wilden Einzelwerte überall verteilen.
- Lieber vorhandene Blöcke sauber anpassen.
- Spezialblöcke nur nutzen, wenn sich Anforderungen widersprechen.
- Kommentare kurz und hilfreich.
- Keine toten Regeln liegen lassen.
- Keine doppelten Blöcke mit gleichem Zweck, wenn sie zusammengeführt werden können.
- Wenn ein Block bewusst als finaler Override dient, klar kommentieren.

## Antwortformat nach Änderungen

Nach jeder Änderung bitte kurz antworten:

```text
Geändert:
- Datei:
- Block:
- Werte:

Gedacht für:
- Auflösung(en):

Bitte testen:
- konkrete Größenliste
```

## Vermeide unnötigen Verbrauch

Nicht machen:

- Automatisch alle Auflösungen durchtesten.
- Mehrere Browser-Fenster öffnen.
- Ohne Auftrag Refactoring starten.
- Große neue Layout-Systeme bauen.
- Screenshots in Schleifen machen.
- Lange Erklärungen wiederholen.
- Änderungen an mehreren Dateien, wenn eine SCSS-Datei reicht.

Besser:

- Eine Änderung.
- Kurzer Grund.
- Kurze Testliste.
- Auf Nutzerfeedback warten.

## Wenn unsicher

Wenn die Änderung mehrere Bereiche beeinflussen könnte, frage zuerst kurz nach oder schlage zwei kleine Optionen vor:

```text
Option A: Master-Mobile-Kurve anpassen
Option B: kleiner finaler Override nur für diese Breite
```

Nicht einfach großflächig umbauen.
