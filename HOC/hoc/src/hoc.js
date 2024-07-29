import { useEffect, useLayoutEffect, useRef } from "react";

function hoc(Component) {
  const WrappedComp = (props) => {
    const paraRef = useRef();
    const counter = useRef(20);

    let { isClick } = props;
    
    const clickFunc = () => {
      console.log("calling the function");
      paraRef.current.style.fontSize = (counter.current + 1) + "px";
      counter.current++;
    };

    return (
      <Component
        isClick={isClick}
        onClick={isClick ? clickFunc : () => {}}
        onMouseMove={!isClick ? clickFunc : () => {}}
        paraRef={paraRef}
        counter={counter}
      />
    );
  };

  return WrappedComp;
}

export default hoc;
