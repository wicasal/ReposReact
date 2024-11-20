// App.js
import React, { useState } from "react";
import Counter from "./Count";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Ejemplo de Contador</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
      <Counter count={count} />
    </div>
  );
}

export default App;
