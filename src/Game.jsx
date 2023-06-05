import React from "react";
import { useState } from "react";

function Game(){

    const [val,setVal] = useState(null)
    let count=0;

    let displayVal = (elementId)=>{
        let btn = document.getElementById(elementId)

        if (count%2==0) {
            btn.innerText= "X";
            arr[elementId] = "O"
        } else {
            
        }

    }

    return (
        <div>
            <h1> TIC-TAK-TOE</h1>
            <div id="gamepad">
                <button onClick={()=>{displayVal(1)}} id="1"></button>
                <button onClick={()=>{displayVal(2)}} id="2"></button>
                <button onClick={()=>{displayVal(3)}} id="3"></button>
                <button onClick={()=>{displayVal(4)}} id="4"></button>
                <button onClick={()=>{displayVal(5)}} id="5"></button>
                <button onClick={()=>{displayVal(6)}} id="6"></button>
                <button onClick={()=>{displayVal(7)}} id="7"></button>
                <button onClick={()=>{displayVal(8)}} id="8"></button>
                <button onClick={()=>{displayVal(9)}} id="9"></button>


            </div>
        </div>
    )

}
export default Game;