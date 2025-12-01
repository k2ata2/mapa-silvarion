/**
 * Map Module
 * Handles map initialization, region interactions, and label management
 */

import { REGIONS, DISCOVERY_ORDER, APP_CONFIG } from './config.js';
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
 * Discover a region (reveal it)
 * @param {string} regionId - The region ID
 */
function discoverRegion(regionId) {
    const region = document.getElementById(regionId);
    if (!region) return;

    const config = REGIONS[regionId];

    // Mark as settled
    region.classList.add('settled');

    // Apply color from config
    if (config) {
        region.style.fill = config.color;
    }

    // Update label
    const labelGroup = document.getElementById(`label-g-${regionId}`);
    if (labelGroup) {
        labelGroup.classList.add('active');
    }

    // Hide fog
    updateFogVisibility(regionId, true);
}

/**
 * Check if a date is a weekend (Saturday or Sunday)
 * @param {Date} date - The date to check
 * @returns {boolean} True if weekend, false if weekday
 */
function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
}

/**
 * Calculate how many weekdays have passed since start date/time
 * First region is discovered immediately after start time if it's a weekday
 * @returns {number} Number of weekdays since start date/time
 */
function getWeekdaysSinceStart() {
    const startDate = new Date(APP_CONFIG.startDate);
    const now = new Date();

    // If we haven't reached the start time yet, return 0 (no regions discovered)
    if (now < startDate) {
        return 0;
    }

    // If start date is a weekday and we've passed it, count it as day 1
    let weekdayCount = isWeekend(startDate) ? 0 : 1;
    let currentDate = new Date(startDate);

    // Count additional weekdays from start date to now
    while (currentDate < now) {
        // Move to next 24-hour period
        currentDate = new Date(currentDate.getTime() + (24 * 60 * 60 * 1000));

        // Only count if it's a weekday and we've passed this time
        if (currentDate <= now && !isWeekend(currentDate)) {
            weekdayCount++;
        }
    }

    return weekdayCount;
}

/**
 * Start the animated discovery sequence
 */
export function startDiscoveryAnimation() {
    const weekdaysSinceStart = getWeekdaysSinceStart();

    // If we haven't reached start time yet, no regions to discover
    if (weekdaysSinceStart === 0) {
        console.log('Start time has not been reached yet. No regions to discover.');
        return;
    }

    const regionsToDiscover = Math.min(weekdaysSinceStart, DISCOVERY_ORDER.length);

    console.log(`Weekdays since start: ${weekdaysSinceStart}, Discovering ${regionsToDiscover} regions`);

    // Discover regions one by one with animation
    for (let i = 0; i < regionsToDiscover; i++) {
        const regionId = DISCOVERY_ORDER[i];
        const delay = APP_CONFIG.initialDelay + (i * APP_CONFIG.discoveryDelay);

        setTimeout(() => {
            discoverRegion(regionId);
        }, delay);
    }
}

/**
 * Initialize a single region
 * @param {SVGElement} region - The region element
 * @param {SVGAElement} textSvg - Top text layer
 */
function initializeRegion(region, textSvg) {
    const regionId = region.id;
    const center = getCenter(region);

    // Create and append label
    const label = createLabel(region, center);
    if (label) {
        textSvg.appendChild(label);
    }

    // All regions start hidden (fog visible)
    updateFogVisibility(regionId, false);
}

/**
 * Initialize the map
 */
export function initializeMap() {
    const regions = document.querySelectorAll('.region');
    const textSvg = document.querySelector('.overlay-svg-text');

    if (!textSvg) {
        console.error('Text SVG overlay not found');
        return;
    }

    regions.forEach(region => {
        initializeRegion(region, textSvg);
    });
}

