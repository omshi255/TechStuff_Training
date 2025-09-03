```
JavaScript Data Types
│
├── Primitive (7 types)
│   Definition: 
│   → Immutable (cannot be changed once created).
│   → Stored directly in memory (stack).
│   → Represent a single value.
│
│   ├── Number
│   │    → Represents integers and floating-point numbers.
│   │    → Special values: NaN, Infinity, -Infinity.
│   │
│   ├── BigInt
│   │    → Represents very large integers beyond the safe limit of Number.
│   │
│   ├── String
│   │    → Sequence of characters, text data.
│   │    → Created with '', "", or backticks (``).
│   │    → Backticks support interpolation and multi-line strings.
│   │
│   ├── Boolean
│   │    → Logical values: true or false.
│   │
│   ├── Undefined
│   │    → A variable declared but not assigned any value.
│   │
│   ├── Null
│   │    → Represents intentional absence of any object value.
│   │
│   └── Symbol
│        → Unique and immutable value, often used as object keys.
│
└── Non-Primitive (Reference types)
    Definition: 
    → Mutable (can be changed after creation).
    → Stored in heap memory, variable stores only a reference (address).
    → Can hold multiple values and complex structures.
    │
    └── Object
         → A collection of key-value pairs.
         │
         ├── Plain Objects { key: value }
         │    → Example: { name: "Alice", age: 25 }
         │    → Useful methods:
         │         • Object.keys(obj)   → returns all keys
         │         • Object.values(obj) → returns all values
         │         • Object.entries(obj)→ returns [key, value] pairs
         │
         ├── Arrays
         │    → Ordered list of values. Example: [1, 2, 3]
         │
         ├── Functions
         │    → Blocks of reusable code.
         │
         ├── Special Objects
         │    → Date, RegExp, Map, Set, WeakMap, WeakSet, etc.
```