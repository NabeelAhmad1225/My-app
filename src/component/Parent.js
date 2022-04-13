import React, { useState } from "react";
import Child from "./ChildComponent";

function Parent () {
    const [Color, setColor] = useState('black');
    return (
        <center>
         <div>
             <style>{'.box {background-color: '+Color+'}'}</style>
             <div className="box"></div>
             
             <Child setColor={setColor}/>
         </div>
         </center>
    );
}
export default Parent;