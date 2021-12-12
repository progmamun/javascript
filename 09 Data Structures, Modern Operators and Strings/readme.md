# Data Structures, Modern Operators and Strings

## Iterables: arrays, strings, maps, sets, NOT objects

# Data structure

1. Simple list?

- Arrays or Sets

1. Arrays

- `task = ['code', 'Eat', 'Code'];`
- Use when you need ordered list of values(might contain duplicates)
- Use when you need to `manipulate` date

2. Sets

- `tasks = new Set(['Code', 'Eat', 'Code']);`
- Use when you need to work with `unique` values
- Use when `high-performance` is really important
- Use to remove duplicates from arrays

2. Key/ Values Pairs?

- Objects or Maps

1. Objects

- `task = { task: 'Code', date: 'today', repeat: true};`
- More `"traditional"` key/value store("abused" objects)
- Easier to write and access values with . add []
- Use when you need to include function(methods)
- Use when working with JSON (can convert to map)

2. Maps

- `task = new Map(['task', 'Code')], ['date', 'today'], [false, 'Start Coding!']);`
- Better performance
- Keys can have any data type
- Easy to iterate
- Easy to compute size
- Use when you simply need to map key to values
- Use when you need keys that are not strings
