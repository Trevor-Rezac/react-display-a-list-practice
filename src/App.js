import logo from './logo.svg';
import './App.css';
// import your arrays here
import { greetings } from './Greetings/greetings';
import GreetingList from './Greetings/GreetingList.js';

function App() {
  console.log(greetings);
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <GreetingList greetings={greetings} />
    </div>
  );
}

export default App;
