/**
 * Storage Module
 * Handles localStorage operations for saving and loading map state
 */

const STORAGE_PREFIX = 'map_silvarion_v5_';

/**
 * Save region state to localStorage
 * @param {string} regionId - The ID of the region
 * @param {boolean} isSettled - Whether the region is settled
 */
export function saveRegionState(regionId, isSettled) {
    localStorage.setItem(`${STORAGE_PREFIX}${regionId}`, isSettled);
}

/**
 * Load region state from localStorage
 * @param {string} regionId - The ID of the region
 * @returns {boolean|null} - The settled state or null if not found
 */
export function loadRegionState(regionId) {
    const state = localStorage.getItem(`${STORAGE_PREFIX}${regionId}`);
    return state === 'true' ? true : (state === 'false' ? false : null);
}

/**
 * Clear all region states from localStorage
 */
export function clearAllRegionStates() {
    const regions = document.querySelectorAll('.region');
    regions.forEach(region => {
        localStorage.removeItem(`${STORAGE_PREFIX}${region.id}`);
    });
}

/**
 * Check if there is any saved data
 * @returns {boolean} - True if there is saved data
 */
export function hasSavedData() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(STORAGE_PREFIX)) {
            return true;
        }
    }
    return false;
}

