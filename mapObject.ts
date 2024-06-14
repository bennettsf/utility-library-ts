/**
 * function that maps the values of an object to a new type.
 * @param obj - The input object with keys of type K and values of type V.
 * @param mapFn - The mapping function that converts values of type V to type U.
 * @returns A new object with keys of type K and values of type U.
 */
function mapObject<K extends string | number | symbol, V, U>(obj: Record<K, V>, mapFn: (value: V) => U): Record<K, U> {
    const result: Record<K, U> = {} as Record<K, U>;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = mapFn(obj[key]);
        }
    }
    return result;
}

export { mapObject };
