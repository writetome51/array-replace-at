# replaceAt(index, newValue, array): void

Replaces item at `index` with `newValue` in `array`.   
`index` can be negative or positive.

## Examples
```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
replaceAt(1, 20, arr);
// arr is now [ 1, 20, 3, 4, 5, 6, 7, 8, 9, 10 ]
    
replaceAt(-1, 20, arr);  
// arr is now [ 1, 20, 3, 4, 5, 6, 7, 8, 9, 20 ]
    
replaceAt(0, 'hello', arr);  
// arr is now [ 'hello', 20, 3, 4, 5, 6, 7, 8, 9, 20 ]

replaceAt(-2, [21, 22], arr);  
// arr is now [ 'hello', 20, 3, 4, 5, 6, 7, 8, [21, 22], 20 ]
```

## Installation
`npm i  @writetome51/array-replace-at`

## Loading
```
import {replaceAt} from '@writetome51/array-replace-at';
var replaceAt = require('@writetome51/array-replace-at').replaceAt;
```