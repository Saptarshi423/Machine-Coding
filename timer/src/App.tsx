import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

type timer = {
  timer? : NodeJS.Timer | null,
  name?:string
}

let intervalStore : timer= {}

function App(){
  const [value, setValue] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);

  useEffect(()=>{
    let timer : any = null;
    let delay : number = 1000;

    if(start){
    timer = setInterval(()=>{
      setValue((prev)=>{
        return prev + 1;
      });
    },delay);  

    intervalStore["timer"] = timer;
    console.log(intervalStore["timer"])
    }else{

    }

    return ()=>{
      clearInterval(timer);
    }
  },[start])

  return (
    <div className="App">
      <h1>Timer App -- TypeScript</h1>
      <h4>{value}</h4>

      <div>
        <button disabled={start ? true : false} onClick={()=>{setStart(true)}}>START</button>
        <button disabled={start ? false : true} onClick={()=>{setStart(false)}}>STOP</button>
        <button onClick={()=>{
          let timer : any = intervalStore["timer"];
          clearInterval(timer);
          setValue(0);
          setStart(false);
        }}>RESET</button>
      </div>
    </div>
  );
}

export default App;
