/*eslint no-mixed-operators: "off"*/

// Generic utility functions
import { assign, clone } from 'lodash';

// Is a value string or null?
export function isStringOrNull (value) {
    return !value || typeof value === 'string';
}

// If the value has an id property return its id, else return the value
export function getId (value) {
    return value && value.id || value;
}

// Sort objects by id property of
export function sortById (a = {}, b = {}) {
    return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
}

// Sort objects by name property
export function sortByName (a = {}, b = {}) {
    a = a.name && a.name.toUpperCase();
    b = b.name && b.name.toUpperCase();

    return (a > b) ? 1 : (a < b) ? -1 : 0;
}

// Return a new clone of the object with args assigned to it
export function compose (obj, ...args) {
    return assign(clone(obj), ...args);
}

// Convert a space seperated string to an upper snake cased string
// e.g. "cat and dog" -> "CAT_AND_DOG"
export function upperSnakeCase (string) {
    return string.split(' ').join('_').toUpperCase();
}

// Convert an underscore or space sepertated sting to a camel-cased string
// e.g. "eat RHUBARB_pie" -> "eatRhubarbPie"
export function camelCase (string) {
    let words = string.toLowerCase().split(/_| /);
    return words.reduce((word, next) =>
        word + next[0].toUpperCase() + next.slice(1));
}

// Log message with a timestamp.
export const log = logFactory();

// Log error with a timestamp.
export const logError = logFactory('error');

// Create new loggers with the specified severity
export function logFactory (severity = 'log') {
    return (...messages) => {
        let timestamp = new Date().toISOString();
        console[severity](timestamp, ...messages);
    };
}
