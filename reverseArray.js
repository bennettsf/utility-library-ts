"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseArray = void 0;
/**
 * function that takes an array and returns a new array with elements in reverse order.
 * @param array - The input array of type T[].
 * @returns A new array with elements of type T in reverse order.
 */
function reverseArray(array) {
    return array.slice().reverse();
}
exports.reverseArray = reverseArray;
