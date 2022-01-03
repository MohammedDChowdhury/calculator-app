import "./App.css";
// import Buttons from "./components/Buttons";
import Keypad from "./components/Keypad";
/*
Operations: 
Addition, Subtraction, Multiplication, Division. 

Addtiional operations we could add:
Squaring and square root 

How to implement:
Numbers from user to be stored into an array possibly
and we just add each element. 
So we would deal with the keyboard being a number input html. 
Maybe using the target values and manipulating them in some way.
*/

const App = () => {
  return (
    <div>
      <title>Calculator App</title>

      <h1>Calculator App</h1>
      <div>
        <Keypad />
      </div>
    </div>
  );
};

export default App;
