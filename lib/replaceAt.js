"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _replaceAdjacentItems_1 = require("@writetome51/array-replace-adjacent-items/_replaceAdjacentItems");
// index can be negative or positive.
function replaceAt(index, newValue, array) {
    // The parameters index and array are type-checked here:
    _replaceAdjacentItems_1._replaceAdjacentItems(index, 1, [newValue], array);
}
exports.replaceAt = replaceAt;
