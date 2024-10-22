import React, { useEffect, useState } from 'react';

function App() {
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    fetch('/get_pairs')
      .then(res => res.json())
      .then(data => setPairs(data.pairs));
  }, []);

  return (
    <div>
      <h1>SMS Management Dashboard</h1>
      <ul>
        {pairs.map((pair, index) => (
          <li key={index}>{pair.country} - {pair.operator}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
