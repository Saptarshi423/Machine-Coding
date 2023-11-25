import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';

type INPUT = {
  input: string,
};

const App = ():JSX.Element=>{
  const [txtVal, setTxtVal] = useState<string>("");
  const [childTxt, setChildTxt] = useState<string>("");

  const handleChange  = (e:React.ChangeEvent<HTMLInputElement>): void=>{
    let input : string = e.target.value;
    setTxtVal(input);
  }

  const handleApply = (e:React.MouseEvent<HTMLElement>): void=>{
    e.preventDefault();
    if(childTxt.length > 0){
      setChildTxt("");
      setTxtVal("")
      return;
    }
    setChildTxt(txtVal);
  }
  return (
    <div className="App">
      <input className="input" type="text" value={txtVal} onChange={handleChange}/>
      <button className='apply' onClick={handleApply}>{childTxt.length === 0 ? "Apply" : "Reset"}</button>
      <Child input={childTxt}/>
    </div>
  );
}

const Child = ({input}:INPUT)=>{
  const [output, setOutput] = useState<string>("");

  useEffect(()=>{
    if(input == ""){
      setOutput("");
      return;
    }
    let outputs: Array<string> = input.split(" ");

    outputs.forEach((value:string, index:number):void=>{
      setTimeout(()=>{
        setOutput((prev:string):string=>{
          let new_output:string = prev+" "+ value;
          return new_output;
        })
      },1000*(index))
    })
  },[input])
  return (
    <div className='child--wrapper'>
      <p className='output'>{output}</p>
    </div>
  )
}

export default App;
