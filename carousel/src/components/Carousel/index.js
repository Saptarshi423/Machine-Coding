import React, { useEffect, useState } from 'react';
import { Images } from '../Images';
import {Selector} from '../Selector';
import './index.css'

let dummy_data = ["https://source.unsplash.com/random?landscape,mountain",
"https://source.unsplash.com/random?landscape,cars",
"https://source.unsplash.com/random?landscape,night",
"https://source.unsplash.com/random?landscape,city",
"https://source.unsplash.com/random?landscape,stars",
"https://source.unsplash.com/random?landscape,dessert"];

const Carousel = () => {
    const [data, setData] = useState(dummy_data);
    const [currIdx, setCurrIdx] = useState(0);

  return (
    <div className='carousel'>
        <Images auto={true} data={data} currIdx={currIdx} setCurrIdx={setCurrIdx}/>
        <Selector data={data} currIdx={currIdx} setCurrIdx={setCurrIdx}/>
    </div>
  )
}

export default Carousel