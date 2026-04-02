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
