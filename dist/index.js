"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_replace_adjacent_items_1 = require("@writetome51/array-replace-adjacent-items");
// index can be negative or positive.
function replaceAt(index, newValue, array) {
    // index and array are type-checked here:
    array_replace_adjacent_items_1._replaceAdjacentItems(index, 1, [newValue], array);
}
exports.replaceAt = replaceAt;
