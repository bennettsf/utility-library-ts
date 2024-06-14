import { filterArray } from './filterArray';
import { identity } from './identity';
import { mapObject } from './mapObject';
import { reverseArray } from './reverseArray';

// Test identity function
console.log(identity<number>(1)); // 1
console.log(identity<string>("hello")); // "hello"

// Test reverseArray function
console.log(reverseArray<number>([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverseArray<string>(["a", "b", "c"])); // ["c", "b", "a"]

// Test mapObject function
console.log(mapObject({a: 1, b: 2}, x => x.toString())); // {a: "1", b: "2"}

// Test filterArray function
console.log(filterArray<number>([1, 2, 3, 4], x => x % 2 === 0)); // [2, 4]