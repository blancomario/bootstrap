import './App.css';
import logo from './logo.svg';
import React from 'react';

function App(): React.ReactElement {
  const [serverMessage, setServerMessage] = React.useState();

  React.useEffect(() => {
    async function getMessage(): Promise<void> {
      const response = await fetch('http://localhost:3000/api/hello');
      const message = await response.json();
      setServerMessage(message.message);
    }

    getMessage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Bootstrap
      </header>
      <section>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Server message {serverMessage}</p>
      </section>
    </div>
  );
}

export default App;
