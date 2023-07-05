# Przewodnik Programisty

## FoundryVTT

### Gdzie jest folder z projektem?

#### Windows

#### OSX

Skorzystaj z poniższej komendy przejścia do folderu:

`cd ~/Library/Application Support/FoundryVTT/Data/systems/AZS`

Pamiętaj o tym, że ścieżki instalacji mogą się zmienić w przyszłości. Proszę dokonaj aktualizacji skryptu.

## TODOs List

Korzystamy w projekcie z aplikacji Trello, więc poproś o dostęp do tablicy.

## Git

W projekcie korzystamy z [GitFlow].

[GitFlow] łatwo jest zainicjalizować w [GitKraken].

Najwygodniej się korzysta z git używając [GitKraken]. Naprawdę świetny kompan w używaniu git'a.

### ssh

Warto wygenerować klucze dla ssh. Można to zrobić bezpośrednio w [GitKraken].

- https://www.gitkraken.com/learn/git/tutorials/how-git-ssh-works

### Podstawowe komendy dla git

Zajrzyj do przewodnika z linku:

- https://www.gitkraken.com/pdfs/git-basics-cheat-sheet

## HTML

### Handlebars

Handlebars to prosty język szablonów.

Używa Template'a i Input Object do generowania HTML lub innych formatów tekstowych.
Szablony Handlebars wyglądają jak zwykły tekst z osadzonymi wyrażeniami Handlebars.

```handlebars
<p>{{firstname}} {{lastname}}</p>
```

Wyrażenie Handlebars to wyrażenie otoczone podwójnymi nawiasami, jak: `{{wyrażenie Handlebars}}`.
Podczas wykonywania szablonu wyrażenia te są zastępowane wartościami z Input Object.

W razie wątpliwości zajrzyj do [dokumentacji](https://handlebarsjs.com/api-reference/), ewentualnie
skorzystaj z [StackOverflow](https://stackoverflow.com/search?q=handelbars) lub po prostu wyszukaj
w internecie.

- https://handlebarsjs.com/api-reference/

## CSS

### SCSS

## JavaScript

## Narzędzia

### Terminal

### VSCode

### WebStorm

### RunJS

[RunJS] to aplikacja przydatna w eksperymentowaniu na kodzie JS lub TypeScript. Jest opcja darmowa.
Płatna nie jest droga. Płaci się tylko raz. Warto rozważyć dla dodatkowych feature'ów.

### GitKraken

[GitKraken]: https://www.gitkraken.com/
[GitFlow]: https://danielkummer.github.io/git-flow-cheatsheet/index.pl_PL.html
[RunJS]: https://runjs.app/
