/**
 * function that filters elements of an array based on a predicate function.
 * @param array - The input array of type T[].
 * @param predicate - The predicate function that takes an element of type T and returns a boolean.
 * @returns A new array with elements of type T that satisfy the predicate.
 */
function filterArray<T>(array: T[], predicate: (value: T) => boolean): T[] {
    return array.filter(predicate);
}

export { filterArray };
