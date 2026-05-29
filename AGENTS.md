# AGENTS.md

## Allgemeine Arbeitsregeln

Arbeite sorgfältig, effizient und ressourcenschonend.

Das Ziel ist: hochwertige Änderungen mit möglichst wenig unnötigem Verbrauch von Zeit, Tokens, Screenshots, Browserläufen und Rechenleistung.

## Ressourcen schonen

Nutze so wenige teure Aktionen wie möglich.

Starte keine Browser-Automatisierung, keine Screenshot-Tests, kein Headless-Chrome, keine visuellen Test-Loops und keine großen Prüf-Schleifen, außer es ist für die Aufgabe wirklich notwendig.

Bevorzugt:

* Code direkt lesen
* relevante Dateien gezielt prüfen
* Suche/grep verwenden
* CSS/HTML/Logik logisch analysieren
* kleine, gezielte Änderungen machen

Vermeiden:

* wiederholte Screenshots
* wiederholte Browserstarts
* lange Viewport-Test-Loops
* Builds nach jeder kleinen Änderung
* unnötige Paketinstallationen
* Refactoring von nicht betroffenen Dateien
* mehrere Bereiche gleichzeitig ändern, wenn es nicht nötig ist

Wenn ein Screenshot oder Browser-Test nötig ist, dann nur mit den wichtigsten 1–3 Größen testen und kurz erklären, warum.

## Vor jeder Codeänderung

Verstehe zuerst die Aufgabe und prüfe die relevanten Dateien.

Vor dem Bearbeiten kurz klären:

* welche Dateien wahrscheinlich betroffen sind
* welche Regeln, Funktionen oder Komponenten aktiv sind
* was die kleinste sichere Änderung ist
* welche Nebenwirkungen möglich sind

Nicht blind raten.
Keinen fremden oder nicht betroffenen Code ändern.

## Änderungsstrategie

Mache kleine, gezielte und rückgängig machbare Änderungen.

Bevorzuge vorhandene Regeln/Funktionen anzupassen, statt viele neue Overrides hinzuzufügen.

Keine unnötigen Abstraktionen, Dependencies oder großen Refactors einbauen.

Halte dich an den bestehenden Code-Stil und die vorhandene Struktur.

Bei CSS-/Responsive-Fixes:

* zuerst prüfen, welche Media Queries wirklich greifen
* keine zufälligen Pixelwerte raten
* Bereiche/Ranges stabil fixen, nicht nur eine einzelne zufällige Größe
* bereits funktionierende Breakpoints nicht kaputtmachen
* Änderungen möglichst klein und klar begrenzt halten

Bei JavaScript/TypeScript/Backend-Fixes:

* bestehendes Verhalten erhalten, außer die Aufgabe verlangt ausdrücklich eine Änderung
* Fehler sauber behandeln
* Funktionen einfach und lesbar halten
* keine unnötigen Logs
* Konsole sauber halten

## Testregeln

Nur Tests ausführen, die zur Änderung passen.

Nicht alles testen, wenn nur ein kleiner Bereich geändert wurde.

Bevorzugte Reihenfolge:

1. Code statisch prüfen und logisch analysieren
2. gezielten Test für den geänderten Bereich ausführen
3. finalen Build oder kompletten Test nur ausführen, wenn nötig

Nicht denselben teuren Befehl mehrfach ohne Grund ausführen.

Wenn ein Build/Test fehlschlägt, zuerst die Fehlermeldung lesen und gezielt die Ursache beheben. Keine zufälligen Änderungen ausprobieren.

## Git-Regeln

Niemals pushen, außer der User fordert es ausdrücklich.

Niemals committen, außer der User fordert es ausdrücklich.

Vor größeren Änderungen zuerst Status prüfen:

```bash
git status
```

Nach Änderungen kurz zusammenfassen, welche Dateien geändert wurden.

Keine generierten Dateien, Lockfiles oder nicht betroffenen Dateien ändern, außer es ist wirklich notwendig.

Keine Dateien löschen und keine destruktiven Befehle ausführen, ohne vorher klar zu erklären, warum.

## Kommunikation

Kurz, klar und praktisch antworten.

Vor riskanten oder ressourcenintensiven Aktionen zuerst Plan erklären oder nachfragen.

Nach Abschluss kurz zusammenfassen:

* was geändert wurde
* warum es geändert wurde
* welche Dateien betroffen sind
* welche Tests/Checks ausgeführt wurden
* was manuell noch geprüft werden sollte

## Sicherheit

Keine Secrets, Tokens, API-Keys, Passwörter, Umgebungsvariablen oder privaten Daten offenlegen.

Keine `.env`-Dateien ändern, außer der User fordert es ausdrücklich.

Keine Secrets in Git einfügen.

## Priorität

Die konkrete Aufgabe des Users hat Vorrang.

Falls es zusätzliche projektspezifische Anweisungen in anderen Dateien gibt, diese ebenfalls beachten.

Wenn Anweisungen sich widersprechen, vor riskanten Änderungen nachfragen.

## Hauptprinzip

Qualität zuerst, aber mit minimalem Ressourcenverbrauch.

Nur das tun, was wirklich nötig ist.
Sauber, gezielt, nachvollziehbar und ohne unnötige Screenshots, Browserläufe, Tests, Refactors oder Verbrauch.
