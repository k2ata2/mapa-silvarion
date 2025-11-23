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
        labelX: 260,
        labelY: null,
        labelMaxWidth: 120
    },
    reg2: {
        name: 'Šeroles',
        color: '#98aa94',
        description: 'Modrošedá',
        labelX: null,
        labelY: 480,
        labelMaxWidth: 120
    },
    reg3: {
        name: 'Kamenné věže',
        color: '#a1acae',
        description: 'Tmavá šedá',
        labelX: null,
        labelY: null,
        labelMaxWidth: 120
    },
    reg4: {
        name: 'Jeskyně ozvěn',
        color: '#e0b5a7',
        description: 'Žlutá',
        labelX: null,
        labelY: null,
        labelMaxWidth: 120
    },
    reg5: {
        name: 'Čirná zátoka',
        color: '#fff3c9',
        description: 'Světle zelená',
        labelX: null,
        labelY: null,
        labelMaxWidth: 120
    },
    reg6: {
        name: 'Křišťálový Dvůr',
        color: '#f9dadf',
        description: 'Fialová',
        labelX: 1030,
        labelY: null,
        labelMaxWidth: 120
    },
    reg7: {
        name: 'Šeptající údolí',
        color: '#e1b5a8',
        description: 'Hnědá',
        labelX: null,
        labelY: 740,
        labelMaxWidth: 120
    },
    reg8: {
        name: 'Skalopád',
        color: '#bf9976',
        description: 'Tmavě hnědá',
        labelX: null,
        labelY: 620,
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
        labelX: null,
        labelY: null,
        labelMaxWidth: 120
    },
    reg11: {
        name: 'Sněhostep',
        color: '#8bbcd3ff',
        description: 'Světle modrá',
        labelX: null,
        labelY: null,
        labelMaxWidth: 120
    },
    reg12: {
        name: 'Svitobrod',
        color: '#e2959f',
        description: 'Olivová',
        labelX: 900,
        labelY: null,
        labelMaxWidth: 120
    },
    reg13: {
        name: 'Nekonečné planiny',
        color: '#f3d281',
        description: 'Tmavě modrá',
        labelX: null,
        labelY: null,
        labelMaxWidth: 120
    },
    reg14: {
        name: 'Jiskerné štíty',
        color: '#c4c0d9',
        description: 'Tyrkysová',
        labelX: null,
        labelY: null,
        labelMaxWidth: 120
    },
    reg15: {
        name: 'Nivaglen',
        color: '#ee9381',
        description: 'Zelená',
        labelX: null,
        labelY: null,
        labelMaxWidth: 120
    }
};

/**
 * Application settings
 */
export const APP_CONFIG = {
    storagePrefix: 'map_silvarion_v5_',
    mapTitle: 'Silvarion',
    mapSubtitle: 'Království',
    saveMessage: 'Tvůj postup v nové zemi byl uložen.',
    resetConfirmMessage: 'Opravdu chceš vymazat celou novou mapu a začít znovu?'
};

