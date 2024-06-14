/**
 * function that takes an array and returns a new array with elements in reverse order.
 * @param array - The input array of type T[].
 * @returns A new array with elements of type T in reverse order.
 */
function reverseArray<T>(array: T[]): T[] {
    return array.slice().reverse();
}

export { reverseArray };
