import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterClassComponent from './components/CounterClassComponent';

function App() {
  return (
    <div className="App">
     {/* <Counter/> */}
     <CounterClassComponent/>
    </div>
  );
}

export default App;
