import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	// Adding the code for the minus function 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    // Adding the code for the plus function 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    // Adding the code for the divide function 
     e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };
 
  function resetInput(e) { 
    // Adding the code for the resetInput function 
    e.preventDefault();
    inputRef.current.value = "";
  }; 
 
  function resetResult(e) { 
  	// Adding the code for the resetResult function 
    e.preventDefault();
    setResult(0);
    
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {/* adding the value of the current total */} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button> 
        {/* Adding the subtract button */} 
        {/* Adding the multiply button */} 
        {/* Adding the divide button */} 
        {/* Adding the resetInput button */} 
        {/* Addingthe resetResult button */} 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
