import React, { useState } from 'react';
import "./style.css"

function PersonalSelectableGrid({row=5, col=5}) {
  const [isMouseDown, setIsMouseDown] = useState(null);
  let gridBoxes = [...Array(row*col).keys()].fill(false);
  const [selectedBox, setSelectedBox] = useState(gridBoxes);

  function handleMouseMovement(e){
    let endIndex = Math.max(isMouseDown, e.target.id);
    if(isMouseDown != null){
      let startIndex = Math.min(isMouseDown, e.target.id);

      for(let i = startIndex;i<=endIndex;i++){
        document.getElementById(i).style.background = "pink"
      }
    }
  }

  function handleInitMouseDown(){
    let allBoxes  = document.getElementsByClassName('box');
    
    if(allBoxes.length > 0){
      for(let ele of allBoxes){
        ele.style.background = "white";
      }
    }
  }

  return (
    <div className="grid-wrapper">
      <div className="grid-container" style={{ "--rows": row, "--cols": col }}>
        {[...Array(row * col).keys()].map((val, idx) => (
          <div
            onMouseDown={(e) => (setIsMouseDown(val), handleInitMouseDown())}
            onMouseUp={(e) => setIsMouseDown(null)}
            onMouseEnter={(e) => handleMouseMovement(e)}
            className="box"
            id={val}
            key={val}
            // style={selectedBox[val] ? {background : "pink" } : {background : "white" } }
          >
            {val}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalSelectableGrid