/**
 * Fog Module
 * Handles fancy multi-layer cloud fog of war visibility for regions
 */

/**
 * Hide fog for a specific region (all cloud layers)
 * @param {string} regionId - The ID of the region (e.g., "reg1")
 */
export function hideFogFor(regionId) {
    if (!regionId) return;
    // Select all cloud layers for this region
    const selector = `.overlay-fog .fog-cloud[data-region="${regionId}"]`;
    const clouds = document.querySelectorAll(selector);
    clouds.forEach(cloud => {
        cloud.classList.add('hidden');
    });
}

/**
 * Show fog for a specific region (all cloud layers)
 * @param {string} regionId - The ID of the region (e.g., "reg1")
 */
export function showFogFor(regionId) {
    if (!regionId) return;
    // Select all cloud layers for this region
    const selector = `.overlay-fog .fog-cloud[data-region="${regionId}"]`;
    const clouds = document.querySelectorAll(selector);
    clouds.forEach(cloud => {
        cloud.classList.remove('hidden');
    });
}

/**
 * Update fog visibility based on region settled state
 * @param {string} regionId - The ID of the region
 * @param {boolean} isSettled - Whether the region is settled (discovered)
 */
export function updateFogVisibility(regionId, isSettled) {
    if (isSettled) {
        hideFogFor(regionId);
    } else {
        showFogFor(regionId);
    }
}

/**
 * Initialize fog system
 * Sets up event listeners and exposes API
 */
export function initializeFog() {
    // Listen for custom regionFound event (for backward compatibility)
    document.addEventListener('regionFound', (e) => {
        const id = e?.detail?.regionId || e?.detail?.id;
        if (id) hideFogFor(id);
    });

    // Expose simple API to window for external scripts
    window.revealRegion = (regionId) => hideFogFor(regionId);
    window.hideFogFor = hideFogFor;
    window.showFogFor = showFogFor;
}

