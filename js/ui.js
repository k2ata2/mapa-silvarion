/**
 * UI Module
 * Handles user interface interactions and controls
 */

/**
 * Initialize UI controls
 */
export function initializeControls() {
    // Save button handler
    const saveButton = document.querySelector('[data-action="save"]');
    if (saveButton) {
        saveButton.addEventListener('click', handleSave);
    }

    // Reset button handler (disabled - no longer needed)
    const resetButton = document.querySelector('[data-action="reset"]');
    if (resetButton) {
        resetButton.style.display = 'none'; // Hide reset button
    }
}

/**
 * Handle save action
 */
function handleSave() {
    alert("Tvůj postup v nové zemi byl uložen.");
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

