# Changelog

## [2.0.0] - Refaktorizace konfigurace

### Změny
- **BREAKING**: Názvy regionů přesunuty z HTML do `js/config.js`
- Odstraněny `data-name` atributy z SVG path elementů
- Přidána možnost nastavit vlastní pozici labelů (`labelX`, `labelY`)
- Přidána možnost nastavit maximální šířku textu (`labelMaxWidth`)

### Výhody
- Všechna konfigurace regionů na jednom místě
- Snadnější úprava názvů bez editace HTML
- Možnost přesného umístění textů
- Lepší kontrola nad zalamováním textu

### Migrace z verze 1.0

Pokud jste měli vlastní názvy v HTML:
```html
<!-- PŘED -->
<path id="reg1" class="region" data-name="Můj Region" d="..."/>

<!-- PO -->
<path id="reg1" class="region" d="..."/>
```

Přesuňte názvy do `js/config.js`:
```javascript
reg1: {
    name: 'Můj Region',
    color: '#cfd8dc',
    labelX: null,
    labelY: null,
    labelMaxWidth: 120
}
```

## [1.0.0] - Iniciální refaktorizace

### Přidáno
- Rozdělení do modulárních souborů
- CSS v samostatném souboru
- JavaScript moduly (map.js, storage.js, ui.js, config.js)
- Dokumentace (README.md, DEVELOPER.md)
- Clean code s komentáři a JSDoc

### Zachováno
- Všechna původní funkcionalita
- Ukládání do localStorage
- Interaktivní regiony
- Vizuální styly

