import { useState } from 'react';
import InputFormUser from './components/InputFormUser';
import ViewUser from './components/ViewUser';
import './App.css';

function App() {
  const [inputState, setInputState] = useState(null);
  const handleOnSubmit = (username) => {
    setInputState(username);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>GitHub Repository Search</p>
        <InputFormUser userName={handleOnSubmit} />
        <ViewUser user={inputState} />
      </header>
    </div>
  );
}

export default App;
