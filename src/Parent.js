import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF")
  
  function handleChangeColour() {
    const newRandomColor = getRandomColor()
setColor(newRandomColor)
const newChildColor= getRandomColor()
setChildrenColor(newChildColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangeColour} color ={childrenColor}/>
      <Child onChangeColor={handleChangeColour}  color ={childrenColor}/>
    </div>
  );
}

export default Parent;
