import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Hello, Ehtesham! 👋</h1>
      <p>This is a React app running in the preview.</p>
      <button onClick={() => setCount((c) => c + 1)}>
        You clicked {count} time{count === 1 ? '' : 's'}
      </button>
    </div>
  );
}

export default App;