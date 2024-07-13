Note:-

Differences between `var`, `let`, and `const` in JavaScript.

### `var`

- **Scope**: `var` is function-scoped, meaning it is limited to the function within which it is declared. If declared outside any function, it becomes globally scoped.
- **Hoisting**: Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`. This means you can reference them before the declaration in the code.
- **Re-declaration**: You can re-declare variables declared with `var` without any errors.

Example:
```javascript

console.log(a); // undefined (due to hoisting)
var a = 10;
console.log(a); // 10

function testVar() {
    var b = 20;
    if (true) {
        var b = 30; // Same variable
        console.log(b); // 30
    }
    console.log(b); // 30
}
testVar();
```

### `let`
- **Scope**: `let` is block-scoped, meaning it is limited to the block (enclosed by `{}`) where it is declared.
- **Hoisting**: Variables declared with `let` are hoisted but not initialized. Accessing them before declaration results in a `ReferenceError`.
- **Re-declaration**: You cannot re-declare variables declared with `let` within the same scope.

Example:
```javascript

console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
console.log(x); // 10

function testLet() {
    let y = 20;
    if (true) {
        let y = 30; // Different variable
        console.log(y); // 30
    }
    console.log(y); // 20
}
testLet();
```

### `const`
- **Scope**: Like `let`, `const` is block-scoped.
- **Hoisting**: Variables declared with `const` are also hoisted but not initialized. Accessing them before declaration results in a `ReferenceError`.
- **Re-declaration**: You cannot re-declare variables declared with `const` within the same scope.
- **Assignment**: `const` variables must be initialized at the time of declaration and cannot be reassigned. However, if a `const` variable is an object or an array, the contents of the object or array can be modified.

Example:
```javascript
console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 10;
console.log(z); // 10

function testConst() {
    const w = 20;
    if (true) {
        const w = 30; // Different variable
        console.log(w); // 30
    }
    console.log(w); // 20
}
testConst();

const obj = { key: "value" };
obj.key = "newValue"; // This is allowed
console.log(obj.key); // newValue

const arr = [1, 2, 3];
arr.push(4); // This is allowed
console.log(arr); // [1, 2, 3, 4]

// However, the following reassignment will throw an error
// obj = {}; // TypeError: Assignment to constant variable
// arr = []; // TypeError: Assignment to constant variable
```

### Summary
- **`var`**: Function-scoped, hoisted and initialized with `undefined`, can be re-declared.
- **`let`**: Block-scoped, hoisted but not initialized, cannot be re-declared in the same scope.
- **`const`**: Block-scoped, hoisted but not initialized, cannot be re-declared in the same scope, must be initialized at declaration, cannot be reassigned.

Understanding these differences is crucial for writing clean, bug-free JavaScript code. Using `let` and `const` over `var` is generally recommended to avoid common pitfalls related to scope and re-declaration.