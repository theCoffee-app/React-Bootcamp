import logo from './logo.svg';
import './App.css';
import Machine from './Machine';
import Friends from './Friends';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Play the slots!</h1>
        <Machine 
          s1="🍒"
          s2="🍊"
          s3="🍒"
        />
        <Machine 
          s1="🍒"
          s2="🍒"
          s3="🍒"
        />
        <Friends 
          name="Bill" 
          hobbies={['running', 'coding', 'hiking']}
          />
      </header>
    </div>
  );
}

export default App;
