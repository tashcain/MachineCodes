import React, {useState} from "react";
import { Radio } from "antd";
import PersonalSelectableGrid from "./personalApproach";
import Solution from "./Solution";



export default function Main(){
  const [data, setData] = useState('a');
  return (
    <div style={{marginTop : "20px"}}> 
       <Radio.Group onChange={(e) => setData(e.target.value)} defaultValue="a" size="small">
        <Radio.Button value="a">Solution</Radio.Button>
        <Radio.Button value="b">My Answer</Radio.Button>
      </Radio.Group>

      <div>
        {
          data == 'a' ? (
            <Solution row={10} col={10}/>
          ) : (
            <PersonalSelectableGrid row={10} col={10}/>
          )
        }
      </div>
    </div>
  )
}

