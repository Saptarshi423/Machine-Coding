import React, { useEffect, useState } from "react";
import "./index.css";

export const Images = ({ auto, data, currIdx, setCurrIdx }) => {
  const [hasEnded, setHasEnded] = useState(false);
  const getComputedStyle = (index) => {
    let styleObj = {};

    if (index === currIdx) {
      styleObj.display = "block";
      return styleObj;
    }
    styleObj.display = "none";
    return styleObj;
  };

  const changeCurrIdx = (prev) => {
    if (!prev) {
      if (currIdx === data.length - 1) {
        setCurrIdx(0);
        return;
      }
      setCurrIdx(currIdx + 1);
    } else {
      if (currIdx === 0) {
        setCurrIdx(data.length - 1);
        return;
      }
      setCurrIdx(currIdx - 1);
    }
  };

  // Slide function. Returns true once all the images in data has been rendered.
  const slide = () => {
    return new Promise((resolve, reject) => {
      data.forEach((item, index) => {
        setTimeout(() => {
          setCurrIdx((prev) => {
            console.log(prev)
            if (prev === data.length - 1) return 0;
            return prev + 1;
          });

          if (index === data.length - 1) {
            console.log(index, data.length-1)
            resolve(true);
          }
        }, (hasEnded ? index+1 : index) * 2000);
      });
    });
  };

  const autoSlide = async () => {
    try {
      let result = await slide();
      setHasEnded(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auto) {
      console.log("Sliding...");
      autoSlide();
    }
  }, []);

  useEffect(() => {
    if (hasEnded && auto) {
      setHasEnded(false);
      autoSlide()
    }
  }, [hasEnded]);

  // useEffect(()=>{
  //   if(auto){
  //     console.log('Sliding...')
  //     autoSlide();
  //   }
  // },[]);

  // useEffect(()=>{
  //   if((currIdx+data.length === data.length) && (auto)){
  //     console.log('Sliding again...')
  //     autoSlide();
  //     // setEnded(true);
  //   }
  // },[currIdx])
  return (
    <div className="images-container">
      <button
        className="btn"
        onClick={() => {
          changeCurrIdx(true);
        }}
      >
        Prev
      </button>
      {data.map((item, index) => {
        return (
          <div className="image-wrapper" style={getComputedStyle(index)}>
            <img src={item} className="image-wrapper__img" alt="image" />
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          changeCurrIdx(false);
        }}
      >
        next
      </button>
    </div>
  );
};
