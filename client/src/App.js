import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi there</p>

        <a href="/auth/google" className="App-link">
          Sign in With Google
        </a>
      </header>
    </div>
  );
}

export default App;
