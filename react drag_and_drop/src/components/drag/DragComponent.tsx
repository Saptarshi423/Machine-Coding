import React from 'react';
import ReactLogo from "../../assets/react.svg"

const DragComponent = (props:any) => {
    let {setSource} = props;

    function handleDragEvent(event:any) {
        console.log(event)
        event.dataTransfer.setData("text/plain", event.target.id);
        console.log(event.dataTransfer.getData("text/plain"));
    }
  return (
    <img src={ReactLogo} id="img" height={100} width={350} onDrag={handleDragEvent} draggable={true}/>
  )
}

export default DragComponent