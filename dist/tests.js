"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var arrays_match_1 = require("@writetome51/arrays-match");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
index_1.replaceAt(1, [10], arr);
if (arrays_match_1.arraysMatch(arr, [1, [10], 3, 4, 5, 6, 7, 8, 9, 10]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
index_1.replaceAt(-1, [20], arr);
if (arrays_match_1.arraysMatch(arr, [1, [10], 3, 4, 5, 6, 7, 8, 9, [20]]))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
index_1.replaceAt(0, [20, 21], arr);
if (arrays_match_1.arraysMatch(arr, [[20, 21], [10], 3, 4, 5, 6, 7, 8, 9, [20]]))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
index_1.replaceAt(6, ['a', 'b', 'c'], arr);
if (arrays_match_1.arraysMatch(arr, [[20, 21], [10], 3, 4, 5, 6, ['a', 'b', 'c'], 8, 9, [20]]))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
index_1.replaceAt(1, [], arr);
if (arrays_match_1.arraysMatch(arr, [[20, 21], [], 3, 4, 5, 6, ['a', 'b', 'c'], 8, 9, [20]]))
    console.log('test 4A passed');
else
    console.log('test 4A FAILED');
// Test 5: if anything but integer is passed as first arg, must trigger error:
var errorTriggered = false;
try {
    index_1.replaceAt('', [1], arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 6: if invalid index is passed as first arg, must trigger error:
errorTriggered = false;
try {
    index_1.replaceAt(10, [1], arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 7: if anything but array is passed as third arg, must trigger error:
errorTriggered = false;
try {
    index_1.replaceAt(1, [], {});
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
// Test 8: if empty array is passed as third arg, must trigger error:
errorTriggered = false;
try {
    index_1.replaceAt(1, 1, []);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
