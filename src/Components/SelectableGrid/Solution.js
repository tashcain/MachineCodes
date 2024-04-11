import React, { useState } from 'react';
import "./style.css"

function Solution({row=5, col=5}) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedBox, setSelectedBox] = useState([]);

  function handleMouseMovement(endBox){
    if(isMouseDown){
        let startBox = selectedBox[0];
        let startRow = Math.floor((startBox) / col); 
        let startCol = (startBox) % col;
        let endRow = Math.floor((endBox) / col); 
        let endCol = (endBox) % col;

        let minRow = Math.min(startRow, endRow);
        let minCol = Math.min(startCol, endCol);
        let maxRow = Math.max(startRow, endRow);
        let maxCol = Math.max(startCol, endCol);

        for(let i=minRow;i<=maxRow;i++){
            for(let j=minCol;j<=maxCol;j++){
                let boxNumber = i * col + j // i==row, j==col;
                setSelectedBox(ps => [...ps, boxNumber])
            }
        }
    }
  }

  function handleMouseDown(v){
    setIsMouseDown(true);
    setSelectedBox([v]);
  }

  return (
    <div className="grid-wrapper">
      <div className="grid-container" style={{ "--rows": row, "--cols": col }} onMouseUp={(e) => setIsMouseDown(false)}>
        {[...Array(row * col).keys()].map((val, idx) => (
          <div
            onMouseDown={(e) => handleMouseDown(val)}
            onMouseEnter={(e) => handleMouseMovement(val)}
            className="box"
            id={val}
            key={val}
            style={selectedBox.includes(val) ? {background : "pink" } : {background : "white" } }
          >
            {val}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solution;