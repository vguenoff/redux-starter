#### Notes on Dan Abramov's 'Getting Started with Redux' Videos
## The Single Immutable State Tree - The First Principle of Redux
* Everything that changes in our applications including the data and the ui state is contained in a single object called the **state** or the **state tree**.
* All mutations and changes in Redux are explicit - so it is possible to keep track of them.

## Describing State Changes With Actions - The Second Principle of Redux
* The **state tree** is read only. We cannot modify it. Instead anytime we want to change the state we need to dispatch an **action - a plain JavaScript object** describing in minimal way what changed in the application.
* Just like the state is the minimal representation of the data in our app, **the action** is the minimal representation to the change to that data.
* The structure of the action object is up to us - the only requirement is that it should have a 'type' property.
* When an event occurs the components don't really *know* how exactly. All they know is that they need to do is to dispatch an action.

## Pure and Impure Functions
* Pure functions are the functions whose return value depends solely of the values of their arguments.
* Pure functions do not have any observable side effects such as network or database calls.
* The pure functions just calculate the new value and we could be confident that if we call the pure function with the same set of arguments we're going to have the same return value. **They are predictable**.
* Pure functions do not modify the values passed to them.

```javascript
// Pure Functions
function square(x) {
  return x * x;
}
function squareAll(items) {
  return items.map(square);
}
```
* On the opposite impure functions may call the database or the network, they may have side effects, they may opperate on the DOM, and the may override the values that you pass to them.

```javascript
// Impure Functions
function square(x) {
  updateXInDatabase(x);
  return x * x;
}
function squareAll(items) {
  for (let i = 0; i < items.length; i++) {
    items[i] = square(items[i]);
  }
}
```
