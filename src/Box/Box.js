import React from "react";
import "./Box.css";

const Box = ({ x, y, blur, spread, color }) => {
  return (
    <div className="box">
      <div
        className="box_preview"
        style={{ boxShadow: `${x}px ${y}px ${blur}px ${spread}px ${color}` }}
      >
        <textarea
          value={`box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${color};\n--webkit-box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${color};\n--moz-box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${color};\n`}
        ></textarea>
      </div>
    </div>
  );
};

export default Box;
