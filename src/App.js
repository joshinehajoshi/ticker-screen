import './App.css';

function App() {
  
  const ws = new WebSocket('wss://localhost:3000/stg.clubdefy.io/to/ws');

  ws.onmessage = (event) => {
    console.log(event.data)
  }
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
