# Complete-Javascript

# Which array method to use? "I want..:"

| To mutate original array | A new array | An Array index | An array element | Know if array includes | A new String | To transform to value | To just loop array |
| ------------------------ | ----------- | -------------- | ---------------- | ---------------------- | ------------ | --------------------- | ------------------ |

|**Add to original:** .push (end) .unshift (start)| **Computed from original:** .map(loop)|**Based on value:** .indexOf|**Based on test condition:** .find|**Based on value:** .includes|**Based on separator string:** .join|**Based on accumulator:** .reduce (Boil down array to single value of any type: number, string, boolean, or even new array or object)|**Based on callback** .forEach(Does not create a new array, just loops over it)|
|**Remove from original:** .pop (end) .shift(start) .splice(any)|**Filtered using condition:** .filter, **Portion of original:** .slice|**Based on test condition:** .findIndex|' |**Based on test condition:**.some, .every|'|'|'|
|**Others:** .reverse .sort .fill | **Adding original to other** .concat, **Flattening the original:** .flat, .flatMap |' |' |'|'|'|
