import logo from './logo.svg';
import './App.css';
// import your arrays here
import { greetings } from './Greetings/greetings';
import GreetingList from './Greetings/GreetingList.js';
import { friends } from './Friends/friends.js';
import FriendList from './Friends/FriendList.js';
import { dogs } from './Dogs/dogs.js';
import DogList from './Dogs/DogList.js';


function App() {
  console.log(dogs);
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <GreetingList greetings={greetings} />
      <FriendList friends={friends} />
      <DogList dogs={dogs} />
    </div>
  );
}

export default App;
