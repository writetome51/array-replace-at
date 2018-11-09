"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var replaceAt_1 = require("./replaceAt");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
replaceAt_1.replaceAt(1, [10], arr);
console.log(arr);
replaceAt_1.replaceAt(1, [20], arr);
console.log(arr);
replaceAt_1.replaceAt(-1, [20], arr);
console.log(arr);
replaceAt_1.replaceAt(0, [20, 21, 22, 23], arr);
console.log(arr);
replaceAt_1.replaceAt(-1, [21, 22, 23, 24], arr);
console.log(arr);
replaceAt_1.replaceAt(6, ['a', 'b', 'c'], arr);
console.log(arr);
replaceAt_1.replaceAt(-13, ['a', { prop: 1 }, 'c'], arr);
console.log(arr);
// should trigger error:
//  replaceAt('', [1], arr);
// should trigger error:
//  replaceAt(Infinity, [1], arr);
// should trigger error:
//  replaceAt(13, [1], arr); // invalid index
// should trigger error:
//  replaceAt(1, [], arr); // if newValues empty, func doesn't know how many items to replace
// should trigger error:
//  replaceAt(1, {}, arr);
// should trigger error:
//  replaceAt(1, [1], {});
