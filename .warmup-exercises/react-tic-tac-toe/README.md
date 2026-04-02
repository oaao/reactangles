# 01 - react tic-tac-toe

Follows the [React tic-tac-toe tutorial](https://react.dev/learn/tutorial-tic-tac-toe) from their docs.


### Learning Themes:

- UI layout & interactivity
- using state to drive game logic, not just dynamic rendering


You're already familiar with React, state, and responsive UI design, but mostly focused towards web design.

This example warms us up for tackling the NYT Games by pointing what we already understand towards games, where interactivity & stateful logic become much more prominent.


---

### Installation & Usage:

If you want to run the completed version of this project, open a terminal inside `tic-tac-toe/src` and run:

```bash
npm install && npm run dev
```

>or [`pnpm`](https://pnpm.io/), which I recommend using!

---

### Tutorial

1. Scaffold a new app using Vite.

```bash
npm create vite@latest



: 'configs for new project:
    - framework: React
    - variant:   JavaScript + React Compiler    
 '
 ```

2. Clean up the starter project to start with a clean slate.

```jsx
// src/index.css -> empty
// src/App.css   -> empty

// App.jsx
function App() {

  return (
    <>
    </>
  )
}

export default App
````

---

Now let's take a quick pause and plan out our initial setup of the tic-tac-toe game - just the components we need, and some of the initial logic/state for them.

A tic tac toe game has:

- a grid,
- of 9 squares,
- which can be empty, X, or O


```jsx
[][][]
[][][]
[][][]
``` 

So we'll want:

- a unit `Square` component, which
  - has borders
  - shows X, O, or blank in the Square
- a `GameGrid` component, which
  - creates a 3x3 grid of `Square` components
  - sets the value of a square when it's clicked

That's all for now! Just like a cooking recipe, once we have those ingredients laid out, we can *then* get to work on how they all work together interactively in the overall game logic.

---

3. Make the `Square` component. 

Let's just set it up with a static value of `X` initially.

```jsx
// src/components/Square.jsx
export default function Square() {
    return (
        <button className="square">X</button>
    )
}
```

We'll style this out and implement state handling once we have our layout set up.

You can import this into `App.jsx` and render out just a `<Square />` for a quick test.
