# Silvarion - Nová éra

Interaktivní mapa fantasy světa Silvarion s možností označování osídlených regionů.

## 📁 Struktura projektu

```
Mapa/
├── index.html          # Hlavní HTML soubor
├── css/
│   └── styles.css      # Všechny styly aplikace
├── js/
│   ├── main.js         # Vstupní bod aplikace
│   ├── map.js          # Logika mapy a regionů
│   ├── storage.js      # Správa localStorage
│   └── ui.js           # UI komponenty a ovládání
└── README.md           # Dokumentace
```

## 🎯 Funkce

- **Interaktivní regiony**: Kliknutím na region ho označíte jako osídlený
- **Automatické ukládání**: Stav mapy se ukládá do localStorage
- **Vizuální feedback**: Osídlené regiony mění barvu a zvýrazňují se

## 🚀 Spuštění

Projekt je čistě frontendový a nevyžaduje žádný build proces.

### Lokální spuštění

1. Otevřete `index.html` v moderním webovém prohlížeči
2. Nebo použijte lokální server (doporučeno):

```bash
# Python 3
python -m http.server 8000

# Node.js (s npx)
npx serve

# VS Code Live Server extension
```

Poté otevřete `http://localhost:8000` v prohlížeči.

## 💾 Ukládání dat

Data se ukládají do `localStorage` prohlížeče s prefixem `map_silvarion_v5_`.

- Každý region má vlastní klíč: `map_silvarion_v5_reg{ID}`
- Data přetrvávají i po zavření prohlížeče

## 🎨 Customizace

### Změna názvů regionů

Názvy regionů jsou definovány v `js/config.js`:

```javascript
export const REGIONS = {
    reg1: {
        name: 'Listoví',
        color: '#cfd8dc',
    }
}
```

### Úprava pozice textů

Pokud chcete posunout text regionu, upravte `labelX` a `labelY` v `js/config.js`:

```javascript
reg1: {
    name: 'Listoví',
    labelX: 150,      // Konkrétní X pozice (místo null)
    labelY: 200,      // Konkrétní Y pozice (místo null)
    labelMaxWidth: 100  // Šířka pro zalamování textu
}
```

- `null` = automatický výpočet ze středu regionu
- Číslo = pevná pozice v pixelech

### Změna barev

Barvy jsou definovány v `css/styles.css` pomocí CSS proměnných:

```css
:root {
    --bg-paper: #e8dac6;
    --border-outer: #2a1a11;
    --ocean-color: #89cff0;
    --ink-color: #1a0f0a;
    --sand-color: #e6cf8b;
}
```

### Barvy regionů

Každý region má vlastní barvu definovanou v sekci "REGION COLORS" v `styles.css`:

```css
#reg1.settled { fill: #cfd8dc; } /* Listoví */
#reg2.settled { fill: #90a4ae; } /* Šeroles */
/* ... */
```

## 📦 Moduly

### `main.js`
Vstupní bod aplikace, inicializuje mapu a UI.

### `map.js`
- `initializeMap()` - Inicializace mapy a regionů
- `getCenter()` - Výpočet středu regionu pro umístění textu
- `createLabel()` - Vytvoření popisku regionu
- `toggleRegion()` - Přepnutí stavu regionu

### `storage.js`
- `saveRegionState()` - Uložení stavu regionu
- `loadRegionState()` - Načtení stavu regionu
- `clearAllRegionStates()` - Vymazání všech dat
- `hasSavedData()` - Kontrola existence uložených dat

### `ui.js`
- `initializeControls()` - Inicializace tlačítek
- `handleSave()` - Obsluha tlačítka "Uložit"
- `handleReset()` - Obsluha tlačítka "Resetovat"
- `showNotification()` - Zobrazení notifikace

## 🌐 Kompatibilita

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Vyžaduje podporu ES6 modulů

## 📝 Licence

Projekt je volně k použití pro osobní účely.

