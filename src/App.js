// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";




function App() {

  function ExampleLifeCycle(){
    const[count, setCount] = useState(0);
    useEffect(()=>{
      console.log('this is conter start from here')
    },[count]);
    const incre = () => {
      setCount(count + 1);
    }
    const decre = () => {
      if(count>0)
      setCount(count - 1);
      else
      alert('counter should not be less than 0');
    }
    return(
       <div className='container my-5'>
        <div class="card text-center my-5">
          <div className='card-body'>
             <h1>Counter App</h1>
             <div className='my-5'>
                <p>this is {count} times.</p>
                <button className='btn btn-success mx-3' onClick={incre}>Increment</button>
                <button className='btn btn-danger mx-3' onClick={decre} >Decremrent</button>
                <button className='btn btn-primary mx-3' onClick={() => setCount(0)}disabled={count===0}>Reset</button>
             </div>
          </div>
        </div>
      </div> 
    )
  }
 
  
  return (
    <div className="App">
      
      <ExampleLifeCycle name=""/>
    
      
     
    </div>
  );
}

export default App;
