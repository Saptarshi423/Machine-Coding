import React, { useLayoutEffect, useRef } from "react";

const Outlet = (props) => {
  return (
    <div>
      <p ref={props.paraRef}>{props.isClick ? "Testing onClick" : "Testing onMouseMove"}</p>
      <button
        onMouseMove={() => {
          props.onMouseMove();
        }}
        onClick={() => {
          props.onClick();
        }}
      >
        Test
      </button>
    </div>
  );
};

export default Outlet;
