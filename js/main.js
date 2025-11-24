/**
 * Main Application Entry Point
 * Initializes the map application
 */

import { initializeMap } from './map.js';
import { initializeControls } from './ui.js';
import { initializeFog } from './fog.js';
import { APP_CONFIG } from './config.js';

/**
 * Load app configuration into HTML
 */
function loadAppConfig() {
    // Set title
    const titleElement = document.querySelector('.legend-title');
    if (titleElement) {
        titleElement.textContent = APP_CONFIG.mapTitle;
    }

    // Set subtitle
    const subtitleElement = document.querySelector('.legend-subtitle');
    if (subtitleElement) {
        subtitleElement.textContent = APP_CONFIG.mapSubtitle;
    }

    // Set page title
    document.title = APP_CONFIG.mapTitle;
}

/**
 * Initialize the application when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    loadAppConfig();
    initializeFog();
    initializeMap();
    initializeControls();
});

