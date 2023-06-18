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
    // console.log("Clickj", result + Number(inputRef.current.value)); 
    
    e.preventDefault(); 
    //setResult((result) => result + Number(inputRef.current.value)); 
   // let output = result + Number(inputRef.current.value);
   setResult((result) => result + Number(inputRef.current.value));
  }; 
 
  function minus(e) { 
  	
    e   .preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) {                                                                                                                                                               
    // mutiplying test 
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
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) { 
  	// Adding the code for the resetResult function 
    e.preventDefault();
    setResult((result) => result* 0)
    
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
       <p ref={resultRef}>{result} </p> 
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
       
      </form> 
    </div> 
  ); 
} 
 
export default App; 
