import { useState } from 'react'
import './App.css';
// import DragComponent from './components/drag/DragComponent';
// import DropComponent from './components/drop/DropComponent';
import ReactLogo from "./assets/react.svg";

function App() {
  const [source, setSource] = useState(null);

  function handleDragEvent(event: any) {
    console.log(event)
    event.dataTransfer.setData("text", event.target.id);
    console.log(event.target.id);
  }

  function handleDropEvent(event: any) {
    console.log("Dropping")
    event.preventDefault();
    //const data = event.dataTransfer.getData("text");
    console.log("Dropped data:", event.dataTransfer.getData("text"));
    event.target.appendChild(document.getElementById("img"));
  }

  function handleDragOverEvent(event: any) {
    event.preventDefault();
    console.log("Drag over event triggered");
  }

  return (
    <>
      {/* <DragComponent setSource={setSource}/>
      <DropComponent source={source}/> */}
      <img src={ReactLogo} id="img" height={100} width={350} onDrag={handleDragEvent} draggable={true} />
      <div style={{ width: "500px", height: "200px", border: "1px solid black", marginTop: "20px" }} onDrop={handleDropEvent} onDragOver={handleDragOverEvent} id={"div1"}>

      </div>
    </>
  )
}

export default App
