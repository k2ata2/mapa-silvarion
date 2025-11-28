/**
 * Configuration Module
 * Contains region data and application settings
 */

/**
 * Region configuration
 * Maps region IDs to their names, colors, and label positions
 *
 * Properties:
 * - name: Display name of the region
 * - color: Fill color when settled
 * - description: Color description
 * - labelX: X coordinate for label (optional, auto-calculated if not set)
 * - labelY: Y coordinate for label (optional, auto-calculated if not set)
 * - labelMaxWidth: Maximum width for text wrapping in pixels (optional)
 */
export const REGIONS = {
    reg1: {
        name: 'Listoví',
        color: '#849570',
        description: 'Šedá/Bílá',
        labelX: 270,
        labelY: 290,
        labelMaxWidth: 120
    },
    reg2: {
        name: 'Šeroles',
        color: '#98aa94',
        description: 'Modrošedá',
        labelX: 315,
        labelY: 480,
        labelMaxWidth: 120
    },
    reg3: {
        name: 'Kamenné věže',
        color: '#a1acae',
        description: 'Tmavá šedá',
        labelX: 260,
        labelY: 750,
        labelMaxWidth: 120
    },
    reg4: {
        name: 'Jeskyně ozvěn',
        color: '#c5a194ff',
        description: 'Žlutá',
        labelX: 475,
        labelY: 920,
        labelMaxWidth: 120
    },
    reg5: {
        name: 'Čirná zátoka',
        color: '#70d1c4ff',
        description: 'Světle zelená',
        labelX: 725,
        labelY: 720,
        labelMaxWidth: 120
    },
    reg6: {
        name: 'Křišťálový Dvůr',
        color: '#73ce7fff',
        description: 'Fialová',
        labelX: 1030,
        labelY: 700,
        labelMaxWidth: 120
    },
    reg7: {
        name: 'Šeptající údolí',
        color: '#bfe1a8ff',
        description: 'Hnědá',
        labelX: 1317,
        labelY: 770,
        labelMaxWidth: 120
    },
    reg8: {
        name: 'Skálopád',
        color: '#dbbd5aff',
        description: 'Tmavě hnědá',
        labelX: 1550,
        labelY: 660,
        labelMaxWidth: 120
    },
    reg9: {
        name: 'Stříbrohvozd',
        color: '#a8ccb3',
        description: 'Tmavě zelená',
        labelX: 1370,
        labelY: 270,
        labelMaxWidth: 120
    },
    reg10: {
        name: 'Zelené údolí',
        color: '#afc895',
        description: 'Mátová',
        labelX: 1050,
        labelY: 215,
        labelMaxWidth: 120
    },
    reg11: {
        name: 'Sněhostep',
        color: '#c4d9e2ff',
        description: 'Světle modrá',
        labelX: 781,
        labelY: 190,
        labelMaxWidth: 120
    },
    reg12: {
        name: 'Svitobrod',
        color: '#e2b5bbff',
        description: 'Olivová',
        labelX: 880,
        labelY: 475,
        labelMaxWidth: 120
    },
    reg13: {
        name: 'Nekonečné planiny',
        color: '#f3d281',
        description: 'Tmavě modrá',
        labelX: 531,
        labelY: 650,
        labelMaxWidth: 120
    },
    reg14: {
        name: 'Jiskerné štíty',
        color: '#9c8f7cff',
        description: 'Tyrkysová',
        labelX: 555,
        labelY: 350,
        labelMaxWidth: 120
    },
    reg15: {
        name: 'Nivaglen',
        color: '#8cc062ff',
        description: 'Zelená',
        labelX: 1215,
        labelY: 450,
        labelMaxWidth: 120
    }
};

/**
 * Discovery order configuration
 * Defines the order in which regions are discovered over time
 */
export const DISCOVERY_ORDER = [
    'reg9',   // Stříbrohvozd
    'reg2',   // Šeroles
    'reg7',   // Šeptající údolí
    'reg3',   // Kamenné věže
    'reg10',  // Zelené údolí
    'reg12',  // Svitobrod
    'reg1',   // Listoví
    'reg14',  // Jiskerné štíty
    'reg15',  // Nivaglen
    'reg11',  // Sněhostep
    'reg5',   // Čirná zátoka
    'reg6',   // Křišťálový Dvůr
    'reg13',  // Nekonečné planiny
    'reg8',   // Skálopád
    'reg4',   // Jeskyně ozvěn
];

/**
 * Application settings
 */
export const APP_CONFIG = {
    storagePrefix: 'map_silvarion_v5_',
    mapTitle: 'Silvarion',
    mapSubtitle: 'Království',
    saveMessage: 'Tvůj postup v nové zemi byl uložen.',
    resetConfirmMessage: 'Opravdu chceš vymazat celou novou mapu a začít znovu?',

    // Discovery animation settings
    startDate: '2025-12-01T17:55:00',  // Start date and time for discovery timeline (ISO 8601 format)
    initialDelay: 1000,                // Delay before animation starts (ms)
    discoveryDelay: 600                // Delay between each region discovery (ms)
};

