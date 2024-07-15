In JavaScript, control flow statements are used to determine the order in which code is executed. These statements help manage the flow of execution in a program. Here are the main types of control flow statements in JavaScript:

1. **Conditional Statements**:
   - **`if` Statement**: Executes a block of code if a specified condition is true.
     ```javascript
     if (condition) {
         // code to be executed if the condition is true
     }
     ```
   - **`if...else` Statement**: Executes one block of code if the condition is true, and another block if it is false.
     ```javascript
     if (condition) {
         // code to be executed if the condition is true
     } else {
         // code to be executed if the condition is false
     }
     ```
   - **`else if` Statement**: Specifies a new condition to test if the first condition is false.
     ```javascript
     if (condition1) {
         // code to be executed if condition1 is true
     } else if (condition2) {
         // code to be executed if condition2 is true
     } else {
         // code to be executed if both condition1 and condition2 are false
     }
     ```

2. **Switch Statement**: Evaluates an expression and executes code based on matching cases.
   ```javascript
   switch (expression) {
       case value1:
           // code to be executed if expression === value1
           break;
       case value2:
           // code to be executed if expression === value2
           break;
       default:
           // code to be executed if expression doesn't match any case
   }

3. **Jump Statements**:
   - **`break` Statement**: Exits a loop or a switch statement.
     ```javascript
     break;
     ```
   - **`continue` Statement**: Skips the current iteration of a loop and moves to the next iteration.
     ```javascript
     continue;
     ```



### Ternary Operator

The ternary operator is a shorthand for the `if...else` statement. It takes three operands:

1. A condition to evaluate.
2. An expression to execute if the condition is true.
3. An expression to execute if the condition is false.

The syntax is:

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

### Example

Here's an example to illustrate how the ternary operator works:

```javascript
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote);  // Output: Yes
```

In this example, the condition `age >= 18` is evaluated. If it's true, `canVote` is assigned the value `"Yes"`; otherwise, it is assigned `"No"`.



