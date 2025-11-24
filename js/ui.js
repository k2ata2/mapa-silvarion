/**
 * UI Module
 * Handles user interface interactions and controls
 */

import { clearAllRegionStates } from './storage.js';
import { showFogFor } from './fog.js';

/**
 * Initialize UI controls
 */
export function initializeControls() {
    // Save button handler
    const saveButton = document.querySelector('[data-action="save"]');
    if (saveButton) {
        saveButton.addEventListener('click', handleSave);
    }

    // Reset button handler
    const resetButton = document.querySelector('[data-action="reset"]');
    if (resetButton) {
        resetButton.addEventListener('click', handleReset);
    }
}

/**
 * Handle save action
 */
function handleSave() {
    alert("Tvůj postup v nové zemi byl uložen.");
}

/**
 * Handle reset action
 */
function handleReset() {
    if (confirm("Opravdu chceš vymazat celou novou mapu a začít znovu?")) {
        resetMap();
    }
}

/**
 * Reset the entire map to initial state
 */
function resetMap() {
    const regions = document.querySelectorAll('.region');

    regions.forEach(region => {
        region.classList.remove('settled');
        region.style.fill = '';

        const label = document.getElementById(`label-g-${region.id}`);
        if (label) {
            label.classList.remove('active');
        }

        // Show fog for all regions
        showFogFor(region.id);
    });

    clearAllRegionStates();
}

/**
 * Show notification message
 * @param {string} message - The message to display
 * @param {string} type - The type of notification (info, success, error)
 */
export function showNotification(message, type = 'info') {
    // Simple alert for now, can be enhanced with custom UI
    alert(message);
}

