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

  // Slide function.
  // Que up the changeCurrIdx callback for each data items.
  // Each item will be rendered after 2secs.
  const slide = () => {
    let promises = data.map((item, index) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          setCurrIdx((prev) => {
            console.log("Current index", prev);
            if (prev === data.length - 1) return 0;
            return prev + 1;
          });
          resolve(true);
        }, (index + 1) * 2000);
      });
    });
    console.log("Promise array", promises);
    return promises;
  };

  // After all the promises are resolved autoSlide again.
  const autoSlide = () => {
    try {
      Promise.all([...slide()]).then((values) => {
        setHasEnded(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timer = null;
    if (auto) {
      console.log("Sliding...");
      timer = setTimeout(() => {
        autoSlide();
      }, 1000);
    }

    return ()=>{
      clearTimeout(timer)
    }
  }, []);

  useEffect(() => {
    if (hasEnded && auto) {
      setHasEnded(false);
      autoSlide();
    }
  }, [hasEnded]);


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
