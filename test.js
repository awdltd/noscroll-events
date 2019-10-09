import WhenVisible from './index.js';

// Test args
let element = document.getElementById('monitor');
let onEnter = () => (element.textContent = 'visible');
let onLeave = () => (element.textContent = 'not visible');
let threshold = 0.2;
let repeat = true;

// Simple
// new WhenVisible(element, onEnter);

// Full
new WhenVisible(element, onEnter, onLeave, threshold, repeat);
