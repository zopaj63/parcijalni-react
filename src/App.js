import InputFormUser from './components/InputFormUser';
import ViewUser from './components/ViewUser';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Parcijalni ispit: React</p>
        <p>OL-OFE_DEV_02/21 - REACT - PAJNIĆ ZORAN</p>
        <InputFormUser />
        <ViewUser user="facebook" />
      </header>
    </div>
  );
}

export default App;
