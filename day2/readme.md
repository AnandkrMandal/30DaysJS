### Arithmetic Operators
Arithmetic operators perform mathematical operations on numbers.

- **Addition (`+`)**: Adds two numbers.
  ```javascript
  let sum = 5 + 3; // 8
  ```

- **Subtraction (`-`)**: Subtracts the second number from the first.
  ```javascript
  let difference = 5 - 3; // 2
  ```

- **Multiplication (`*`)**: Multiplies two numbers.
  ```javascript
  let product = 5 * 3; // 15
  ```

- **Division (`/`)**: Divides the first number by the second.
  ```javascript
  let quotient = 5 / 3; // 1.6666666666666667
  ```

- **Modulus (`%`)**: Returns the remainder of division.
  ```javascript
  let remainder = 5 % 3; // 2
  ```

- **Exponentiation (`**`)**: Raises the first number to the power of the second.
  ```javascript
  let power = 5 ** 3; // 125
  ```

- **Increment (`++`)**: Increases a number by one.
  ```javascript
  let a = 5;
  a++; // a is now 6
  ```

- **Decrement (`--`)**: Decreases a number by one.
  ```javascript
  let b = 5;
  b--; // b is now 4
  ```

### Assignment Operators
Assignment operators assign values to variables.

- **Assignment (`=`)**: Assigns the right operand's value to the left operand.
  ```javascript
  let a = 5; // a is 5
  ```

- **Addition Assignment (`+=`)**: Adds the right operand to the left operand and assigns the result to the left operand.
  ```javascript
  let b = 5;
  b += 3; // b is now 8
  ```

- **Subtraction Assignment (`-=`)**: Subtracts the right operand from the left operand and assigns the result to the left operand.
  ```javascript
  let c = 5;
  c -= 3; // c is now 2
  ```

- **Multiplication Assignment (`*=`)**: Multiplies the left operand by the right operand and assigns the result to the left operand.
  ```javascript
  let d = 5;
  d *= 3; // d is now 15
  ```

- **Division Assignment (`/=`)**: Divides the left operand by the right operand and assigns the result to the left operand.
  ```javascript
  let e = 5;
  e /= 3; // e is now 1.6666666666666667
  ```

- **Modulus Assignment (`%=`)**: Takes the modulus using the left operand by the right operand and assigns the result to the left operand.
  ```javascript
  let f = 5;
  f %= 3; // f is now 2
  ```

- **Exponentiation Assignment (`**=`)**: Raises the left operand to the power of the right operand and assigns the result to the left operand.
  ```javascript
  let g = 5;
  g **= 3; // g is now 125
  ```

### Comparison Operators
Comparison operators compare two values and return a boolean value (`true` or `false`).

- **Equal (`==`)**: Checks if two values are equal (type conversion may occur).
  ```javascript
  5 == '5'; // true
  ```

- **Strict Equal (`===`)**: Checks if two values are equal and of the same type.
  ```javascript
  5 === '5'; // false
  ```

- **Not Equal (`!=`)**: Checks if two values are not equal (type conversion may occur).
  ```javascript
  5 != '5'; // false
  ```

- **Strict Not Equal (`!==`)**: Checks if two values are not equal and/or not of the same type.
  ```javascript
  5 !== '5'; // true
  ```

- **Greater Than (`>`)**: Checks if the left operand is greater than the right operand.
  ```javascript
  5 > 3; // true
  ```

- **Greater Than or Equal (`>=`)**: Checks if the left operand is greater than or equal to the right operand.
  ```javascript
  5 >= 5; // true
  ```

- **Less Than (`<`)**: Checks if the left operand is less than the right operand.
  ```javascript
  5 < 3; // false
  ```

- **Less Than or Equal (`<=`)**: Checks if the left operand is less than or equal to the right operand.
  ```javascript
  5 <= 5; // true
  ```

### Logical Operators
Logical operators are used to combine multiple boolean expressions.

- **AND (`&&`)**: Returns `true` if both operands are `true`.
  ```javascript
  true && false; // false
  true && true;  // true
  ```

- **OR (`||`)**: Returns `true` if at least one of the operands is `true`.
  ```javascript
  true || false; // true
  false || false; // false
  ```

- **NOT (`!`)**: Returns `true` if the operand is `false` and vice versa.
  ```javascript
  !true; // false
  !false; // true
  ```

### Ternary Operator
The ternary operator is a shorthand for an `if-else` statement.

- **Syntax**: `condition ? expressionIfTrue : expressionIfFalse`
  ```javascript
  let age = 18;
  let canVote = (age >= 18) ? 'Yes' : 'No';
  console.log(canVote); // 'Yes'
  ```

