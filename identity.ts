/**
 * identity function that returns the input value as-is.
 * @param value - The input value of type T.
 * @returns The same value of type T.
 */
function identity<T>(value: T): T {
    return value;
}

export { identity };
