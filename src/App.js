import logo from './logo.svg';
import './App.css';
import useOnline from "./hooks/useOnline";

function App() {
  const isOnline = useOnline()
  return (
    <div className="App">
      <div>
          <div>{isOnline ? "Connected" : "Not Connected"}</div>
      </div>
    </div>
  );
}

export default App;
