import React from 'react';
import './index.css'

export const Selector = ({ data, currIdx, setCurrIdx }) => {
  return (
    <div className='selector'>
        {data.map((item,index)=>{
            return (
                <div key ={index} className={`select ${currIdx === index ? 'highlight' : ''}`}></div>
            );
        })}
    </div>
  )
}