#### Notes on Dan Abramov's 'Getting Started with Redux' Videos
## The Single Immutable State Tree - The First Principle of Redux
* Everything that changes in our applications including the data and the UI state is contained in a single object called the **state** or the **state tree**.
* All mutations and changes in Redux are explicit - so it is possible to keep track of them.

## Describing State Changes With Actions - The Second Principle of Redux
* The **state tree** is read only. We cannot modify it. Instead anytime we want to change the state we need to **dispatch an action - a plain JavaScript object** describing in a minimal way what changed in the application.
* Just like the state is the minimal representation of the data in our app, **the action** is the minimal representation to the change to that data.
* The structure of the action object is up to us - the only requirement is that it should have a **'type' property**.
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
## The Reducer Function - The Third Principle of Redux
* To describe state mutations we have to write a **function, that takes the previous state of the app, the action being dispatch and returns the next state of the app**. And the function has to be **pure**. This function is called **the reducer**.

## Store
* The store binds together the three principles of Redux: 
  1. It holds the current application state object.
  2. It lets us dispatch actions.
  3. When you we create it we need to specify the reducer that tells how sate is updated with actions.
```javascript
const store = createStore(counter);
```
* The store has three important methods:
  1. The first is **getState()** and it retrieves the current state of the redux store;
```javascript
console.log(store.getStore()); // this will print the initial state of your application
```
  2. The second and wth most commonly used is called **dispatch** and it lets you dispatch **actions** to change the state of our application.
```javascript
store.dispatch({ type: 'INCREMENT' });
```
  3. The third Redux store method is called **subscribe**. It lets us register a callback that the Redux store will call any time an action has been dispatched, so that you can update the UI of your application. It will reflect the current application state.  
```javascript
const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  document.getElementById('root')
);

render();
store.subscribe(render);
```
