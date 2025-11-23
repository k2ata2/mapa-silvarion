# Developer Documentation

## Architektura projektu

Projekt je rozdělen do modulárních JavaScript souborů s jasnou separací zodpovědností.

### Struktura modulů

```
js/
├── main.js      - Vstupní bod, orchestrace inicializace
├── map.js       - Logika mapy, regionů a labelů
├── storage.js   - Abstrakce nad localStorage
├── ui.js        - UI komponenty a event handlery
└── config.js    - Konfigurace a konstanty
```

### Tok dat

1. **Inicializace** (`main.js`)
   - DOMContentLoaded event
   - Volá `initializeMap()` a `initializeControls()`

2. **Načtení mapy** (`map.js`)
   - Iteruje přes všechny `.region` elementy
   - Pro každý region:
     - Vypočítá střed pro umístění labelu
     - Vytvoří SVG text element
     - Načte uložený stav ze storage
     - Přidá event listener pro kliknutí

3. **Interakce uživatele**
   - Kliknutí na region → `toggleRegion()`
   - Změna CSS třídy `.settled`
   - Uložení do localStorage
   - Aktualizace vizuálního stavu

4. **Persistence** (`storage.js`)
   - Klíče: `map_silvarion_v5_{regionId}`
   - Hodnoty: `'true'` nebo `'false'`

## Přidání nového regionu

1. Přidat SVG `<path>` element do `index.html` (bez data-name atributu):
```html
<path id="reg16" class="region" d="..."/>
```

2. Přidat barvu do `css/styles.css`:
```css
#reg16.settled { fill: #hexcolor; }
```

3. Přidat do `js/config.js`:
```javascript
reg16: {
    name: 'Nový Region',
    color: '#hexcolor',
    description: 'Popis barvy',
    labelX: null,  // null = auto-calculate, nebo konkrétní číslo
    labelY: null,  // null = auto-calculate, nebo konkrétní číslo
    labelMaxWidth: 120  // Maximální šířka pro zalamování textu
}
```

## Úprava pozice labelu

Pro přesné umístění textu regionu upravte hodnoty v `js/config.js`:

```javascript
reg1: {
    name: 'Listoví',
    labelX: 150,      // Konkrétní X pozice (místo null)
    labelY: 200,      // Konkrétní Y pozice (místo null)
    labelMaxWidth: 100  // Šířka pro zalamování
}
```

- `labelX: null` - automatický výpočet ze středu regionu
- `labelX: 150` - pevná pozice X
- `labelMaxWidth` - určuje, kdy se text zalomí na více řádků

## Změna chování

### Změna animací
Upravte transitions v `css/styles.css`:
```css
.region {
    transition: fill 0.3s ease, fill-opacity 0.3s ease, stroke-width 0.3s ease;
}
```

### Změna ukládání
Upravte `STORAGE_PREFIX` v `js/storage.js` pro novou verzi dat:
```javascript
const STORAGE_PREFIX = 'map_silvarion_v6_';
```

### Přidání nových UI prvků
1. Přidat HTML markup do `index.html`
2. Přidat styly do `css/styles.css`
3. Přidat logiku do `js/ui.js`

## Debugging

### Console logging
Přidejte do modulů:
```javascript
console.log('Region clicked:', regionId);
console.log('Saved state:', loadRegionState(regionId));
```

### Kontrola localStorage
V DevTools Console:
```javascript
// Zobrazit všechna data
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(key, localStorage.getItem(key));
}

// Vymazat všechna data
localStorage.clear();
```

## Performance

### Optimalizace SVG
- Používáme `vector-effect: non-scaling-stroke` pro konzistentní šířku čar
- SVG filtry jsou aplikovány pouze na skupinu, ne jednotlivé elementy

### Event delegation
Aktuálně používáme individuální event listenery. Pro velké množství regionů zvažte:
```javascript
svg.addEventListener('click', (e) => {
    if (e.target.classList.contains('region')) {
        toggleRegion(e.target);
    }
});
```

## Testování

### Manuální testy
1. Kliknutí na region → změní barvu
2. Refresh stránky → stav přetrvává
3. Reset → všechny regiony se vrátí do výchozího stavu
4. Responzivita → mapa se přizpůsobuje velikosti okna

### Browser kompatibilita
Testováno v:
- Chrome 90+
- Firefox 88+
- Safari 14+

## Budoucí vylepšení

- [ ] Export/import mapy jako JSON
- [ ] Statistiky (kolik regionů osídleno)
- [ ] Undo/Redo funkcionalita
- [ ] Tooltip s informacemi o regionu
- [ ] Vyhledávání regionů
- [ ] Různé režimy zobrazení (politická mapa, terén, atd.)
- [ ] Multiplayer synchronizace

