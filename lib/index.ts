import { _replaceAdjacentItems } from '@writetome51/array-replace-adjacent-items';


// index can be negative or positive.

export function replaceAt(index, newValue, array): void {

	// index and array are type-checked here:
	_replaceAdjacentItems(index, 1, [newValue], array);
}
