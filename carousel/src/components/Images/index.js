import React, { useEffect, useState } from "react";
import "./index.css";

let items_timer = {};

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

  // Slide function.
  // Que up the changeCurrIdx callback for each data items.
  // Each item will be rendered after 2secs.
  const slide = () => {
    let promises = data.map((item, index) => {

      return new Promise((resolve, reject) => {
        let timer = setTimeout(() => {
          setCurrIdx((prev) => {
            console.log("Current index", prev);
            if (prev === data.length - 1) return 0;
            return prev + 1;
          });
          resolve(true);
        }, (index + 1) * 2000);

        items_timer[index+1] = timer
      });
    });
    console.log("Promise array", promises);
    return promises;
  };

  const ClearItemTimer = ()=>{
    // Clear out the timer attached to previously qued data items
    // if user disables "auto" mode in the middle of sliding.
    Object.keys(items_timer)?.forEach((key,index)=>{
      clearTimeout(items_timer[key]);
    })
  }

  // After all the promises are resolved autoSlide again.
  const autoSlide = () => {
    Promise.all([...slide()]).then((values) => {
      setHasEnded(true);
    });
  };

  useEffect(() => {
    let timer = null;
    if (auto) {
      console.log("Sliding...");
      timer = setTimeout(() => {autoSlide()}, 1000);
    }else if(!auto){
      ClearItemTimer();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [auto]);

  useEffect(() => {
    if (hasEnded && auto) {
      setHasEnded(false);
      autoSlide();
    }
  }, [hasEnded]);

  return (
    <div className="images-wrapper">
      <button
        className="btn"
        onClick={() => {
          changeCurrIdx(true);
        }}
      >
        Prev
      </button>
      <div className="images-container">
        {data.map((item, index) => {
          return (
            <div className="image-wrapper" style={getComputedStyle(index)}>
              <img src={item} className="image-wrapper__img" alt="image" />
            </div>
          );
        })}
      </div>
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
