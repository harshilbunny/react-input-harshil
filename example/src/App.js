import React, { useState, useEffect } from "react";
import InputHarshil from 'react-input-harshil'
import 'react-input-harshil/dist/index.css'

const App = () => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <div className="App">
      <InputHarshil />
    </div>
  );
};

export default App;
