import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const Accordion = () => {
  const [open, setOpen] = useState(false);
  const listRef = useRef(null);
  
  const toggle = () => {
    setOpen(!open);
  };
  
  const handleOpen = ()=>{
    if(!listRef.current) return;
    console.log(listRef.current.style.maxHeight)
    if((listRef.current.style.maxHeight === "0px") || (listRef.current.style.maxHeight === "")){
        listRef.current.style.maxHeight =  listRef.current.scrollHeight + 'px'
    }else{
        listRef.current.style.maxHeight =  '0px';
    }
  }

  useEffect(()=>{
    handleOpen();
  },[open]);

  return (
    <div className="accordion">
      <div className="accordion--name">
        <span className="accordion--name__text">Test Accordion</span>
        <span className="switch--key" onClick={toggle}>
          ⬇
        </span>
      </div>

      <div  ref={listRef} className="accordion--list">
        <span className="accordion--list__item">Item1</span>
        <span className="accordion--list__item">Item2</span>
        <span className="accordion--list__item">Item3</span>
        <span className="accordion--list__item">Item4</span>
        <span className="accordion--list__item">Item5</span>
        <span className="accordion--list__item">Item6</span>
        <span className="accordion--list__item">Item7</span>
        <span className="accordion--list__item">Item8</span>
      </div>
    </div>
  );
};

export default Accordion;
