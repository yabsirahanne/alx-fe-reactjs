import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p style={{ fontSize: '1.5rem' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>{' '}
      <button onClick={() => setCount(count - 1)}>Decrement</button>{' '}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;