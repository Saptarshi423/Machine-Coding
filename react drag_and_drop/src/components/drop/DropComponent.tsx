import React from 'react';

const DropComponent = (props:any) => {
  let {source} = props;

  async function handleDropEvent(event:any) {
    console.log("Dropping")
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    console.log("Dropped data:", data);
    // if (data === source) {
    //   console.log("Valid drop");
    // } else {
    //   console.log("Invalid drop");
    // }
  }
  return (
    <div style={{width:"500px", height:"200px", border:"1px solid black", marginTop:"20px"}} onDrop={handleDropEvent}>

    </div>
  )
}

export default DropComponent