# Complete-Javascript

# What is JavaScript?

- JAVASCRIPT IS A HIGH-LEVEL PROTOTYPE-BASED OBJECT-ORIENTED MULTI-PARADIGM INTERPRETED OR JUST-IN-TIME COMPILED DYNAMIC SINGLE-THREADED GARBAGE-COLLECTED PROGRAMMING LANGUAGE WITH FIRST-CLASS FUNCTIONS AND A NON-BLOCKING EVENT LOOP CONCURRENCY MODEL. 🙂🙂🙂

# Which array method to use? "I want..:"

| To mutate original array                                                                        | A new array                                                                                                                                               |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Add to original:** .push (end) .unshift (start)                                               | **Computed from original:** .map(loop)                                                                                                                    |
| **Remove from original:** .pop (end) .shift(start) .splice(any)**Others:** .reverse .sort .fill | **Filtered using condition:** .filter, **Portion of original:** .slice **Adding original to other** .concat, **Flattening the original:** .flat, .flatMap |

| An Array index                                                       | An array element                   |
| -------------------------------------------------------------------- | ---------------------------------- |
| **Based on value:** .indexOf **Based on test condition:** .findIndex | **Based on test condition:** .find |

| Know if array includes                                                  | A new String                         |
| ----------------------------------------------------------------------- | ------------------------------------ |
| **Based on value:** .includes **Based on test condition:**.some, .every | **Based on separator string:** .join |

| To transform to value                                                                                                                 | To just loop array                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **Based on accumulator:** .reduce (Boil down array to single value of any type: number, string, boolean, or even new array or object) | **Based on callback** .forEach(Does not create a new array, just loops over it) |
