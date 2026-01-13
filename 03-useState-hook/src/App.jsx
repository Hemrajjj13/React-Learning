import React from 'react'
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <div style={{margin: "10px", padding: "20px"}}>
      <Counter />
      <Toggle />
      <ThemeToggle />
    </div>
  );
}

export default App