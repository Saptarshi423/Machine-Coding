import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

const OTP_LENGTH = 6;

function App() {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const inpRef = useRef([]);

  const handleChange = (e, index) => {
    let value = e.target.value;
    console.log(typeof(value))
    if(isNaN(value)) return;

    let data = [...otp];
    data[index] = value.slice(value.length - 1); // Ensure only the last character is taken
    setOtp(data);
    inpRef.current[index+1].focus();
  }

  useEffect(()=>{
    inpRef.current[0].focus(); // Focus on the first input field on mount
  },[])

  return (
    <div>
      <h2>OTP Component</h2>

      <div>
        {otp.map((value, index) => {
          return (
            <input
              className="input"
              value={value}
              key={index}
              type="text"
              onChange={(e)=>{handleChange(e, index)}}
              ref={(element)=>{
                inpRef.current[index] = element;
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
