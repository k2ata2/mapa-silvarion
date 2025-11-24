/**
 * Map Module
 * Handles map initialization, region interactions, and label management
 */

import { saveRegionState, loadRegionState } from './storage.js';
import { REGIONS } from './config.js';
import { updateFogVisibility } from './fog.js';

/**
 * Get the center point of an SVG element
 * @param {SVGElement} element - The SVG element
 * @returns {Object} - Object with x and y coordinates
 */
function getCenter(element) {
    const bbox = element.getBBox();
    return {
        x: bbox.x + bbox.width / 2,
        y: bbox.y + bbox.height / 2
    };
}

/**
 * Create a label for a region
 * @param {SVGElement} region - The region element
 * @param {Object} center - The center coordinates
 * @returns {SVGElement} - The created label group
 */
function createLabel(region, center) {
    const regionId = region.id;
    const config = REGIONS[regionId];

    if (!config) {
        console.warn(`No configuration found for region: ${regionId}`);
        return null;
    }

    const displayName = config.name.toUpperCase();

    // Use configured position or fall back to calculated center
    const labelX = config.labelX !== null ? config.labelX : center.x;
    const labelY = config.labelY !== null ? config.labelY : center.y + 10;

    // Create group for label
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "label-group");
    g.setAttribute("id", `label-g-${regionId}`);

    // Create text element
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", labelX);
    text.setAttribute("y", labelY);
    text.setAttribute("class", "label-text");
    text.textContent = displayName;

    // Handle long names by splitting into multiple lines
    // Split if name contains space and is longer than configured max width would allow
    if (displayName.includes(' ') && displayName.length > 10) {
        const words = displayName.split(' ');
        text.textContent = words[0];
        text.setAttribute("y", labelY - 10);

        const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.setAttribute("x", labelX);
        tspan.setAttribute("dy", "1.2em");
        tspan.textContent = words.slice(1).join(' ');
        text.appendChild(tspan);
    }

    g.appendChild(text);
    return g;
}

/**
 * Toggle region settled state
 * @param {SVGElement} region - The region element
 */
function toggleRegion(region) {
    const regionId = region.id;
    const isSettled = region.classList.toggle('settled');
    const config = REGIONS[regionId];

    // Apply color from config
    if (isSettled && config) {
        region.style.fill = config.color;
    } else {
        region.style.fill = '';
    }

    // Update label
    const labelGroup = document.getElementById(`label-g-${regionId}`);
    if (labelGroup) {
        if (isSettled) {
            labelGroup.classList.add('active');
        } else {
            labelGroup.classList.remove('active');
        }
    }

    // Update fog visibility
    updateFogVisibility(regionId, isSettled);

    // Save state
    saveRegionState(regionId, isSettled);
}

/**
 * Initialize a single region
 * @param {SVGElement} region - The region element
 * @param {SVGElement} svg - The SVG container
 * @param {SVGAElement} textSvg - Top text layer
 */
function initializeRegion(region, svg, textSvg) {
    const regionId = region.id;
    const center = getCenter(region);
    const config = REGIONS[regionId];

    // Create and append label
    const label = createLabel(region, center);
    if (label) {
        textSvg.appendChild(label);

        // Load saved state
        const savedState = loadRegionState(regionId);
        const isSettled = savedState === true;

        if (isSettled) {
            region.classList.add('settled');
            label.classList.add('active');

            // Apply color from config
            if (config) {
                region.style.fill = config.color;
            }
        }

        // Set initial fog visibility based on saved state
        updateFogVisibility(regionId, isSettled);
    }

    // Add click handler
    region.addEventListener('click', () => toggleRegion(region));
}

/**
 * Initialize the map
 */
export function initializeMap() {
    const regions = document.querySelectorAll('.region');
    const svg = document.querySelector('svg');
    const textSvg = document.querySelector('.overlay-svg-text');
    
    if (!svg) {
        console.error('SVG element not found');
        return;
    }
    
    regions.forEach(region => {
        initializeRegion(region, svg, textSvg);
    });
}

