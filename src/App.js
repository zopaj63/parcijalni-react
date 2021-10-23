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
        <p>Parcijalni ispit: React</p>
        <p>OL-OFE_DEV_02/21 - REACT - PAJNIĆ ZORAN</p>
        <InputFormUser userName={handleOnSubmit} />
        <ViewUser user={inputState} />
      </header>
    </div>
  );
}

export default App;
