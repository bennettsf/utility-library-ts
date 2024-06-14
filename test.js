"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterArray_1 = require("./filterArray");
const identity_1 = require("./identity");
const mapObject_1 = require("./mapObject");
const reverseArray_1 = require("./reverseArray");
// Test identity function
console.log((0, identity_1.identity)(1)); // 1
console.log((0, identity_1.identity)("hello")); // "hello"
// Test reverseArray function
console.log((0, reverseArray_1.reverseArray)([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log((0, reverseArray_1.reverseArray)(["a", "b", "c"])); // ["c", "b", "a"]
// Test mapObject function
console.log((0, mapObject_1.mapObject)({ a: 1, b: 2 }, x => x.toString())); // {a: "1", b: "2"}
// Test filterArray function
console.log((0, filterArray_1.filterArray)([1, 2, 3, 4], x => x % 2 === 0)); // [2, 4]
