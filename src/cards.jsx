import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);




  return (
    <section className="Count">
      <p>Hatdog: {count}</p>
      <button onClick={() => setCount(count + 1 )}>Click me</button>
      <button onClick={() => setCount( count - 1)}> - </button>
      <button onClick={() => setCount(0)}>Reset</button>

    </section>
     
  );
}

export default Count;
