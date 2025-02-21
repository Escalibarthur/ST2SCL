import React, { useState } from 'react';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = async () => {
    const response = await fetch(
      `http://<MINIKUBE_IP>:<NODE_PORT>/api/add?num1=${num1}&num2=${num2}`
    );
    const data = await response.json();
    setResult(data);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Calculatrice</h1>
      <input
        type="number"
        placeholder="Numéro 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Numéro 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleAddition}>Ajouter</button>
      {result !== null && <h2>Résultat : {result}</h2>}
    </div>
  );
};

export default App;

