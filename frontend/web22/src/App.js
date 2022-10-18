import './App.css';
import Routing from './Routing';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routing></Routing>
      </header>
    </div>
  );
}

export default App;
