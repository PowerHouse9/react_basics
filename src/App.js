import React, {useState} from 'react';
// import Hello from './sayHello';
import Tweet from './Tweet';

function App(){

  //State Example
  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  //eventually we will get data from API, we will save that in a state example is like this
  // const [user, setUser] = useState({
  //   name: 'Bill',
  //   age: '19',
  //   posts: ['My First Post', 'Just trying to do React']
  // });

  // This is an arrow function
  // const increment = () => {
  //   //this is a function
  //   setCount(count + 1);
  //   setRed(!isRed);
  // }

  //sample of an API call data and we have save it in a state
  const [users, setUsers] = useState([
    { name: "Ed", message: "This is my First Post !"},
    { name: "Bill", message: "This is my Second Post !"},
    { name: "Jim", message: "This is my Third Post !"},
  ]);

  return(
    <div className='app'>
      {/* all we have to do to render sayHello.js function/component is this */}
      {/* <Hello /> */}
      {/* to define custom name and other stuf we can user props */}

      {/* <Tweet name= "Bill" message="Just Trying React"/>
      <Tweet name= "Yeet" message="Just Trying Javascript"/>
      <Tweet name= "NONONO" message="Just Trying Node.js"/>
      <Tweet name= "Test" message="Just Trying Testing"/>
      <Tweet name= "IDK" message="Just Trying Not to Screw Up"/> */}

      {/* Checking if the red value is true to check is by doing ? is for IF statement, : this would mean ELSE */}

      {/* <h1 className = {isRed ? 'red' : ""}>Change my Color</h1>
      <button onClick = {increment}>Increment</button>
      <h1>{count}</h1> */}

      {/* this arrow function is not using curly braces because we dont want to return a JS, but a HTML */}
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
      
    </div>
  );
}

export default App;