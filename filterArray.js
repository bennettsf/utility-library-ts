"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterArray = void 0;
/**
 * function that filters elements of an array based on a predicate function.
 * @param array - The input array of type T[].
 * @param predicate - The predicate function that takes an element of type T and returns a boolean.
 * @returns A new array with elements of type T that satisfy the predicate.
 */
function filterArray(array, predicate) {
    return array.filter(predicate);
}
exports.filterArray = filterArray;
