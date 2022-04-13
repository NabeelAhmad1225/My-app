import React, {useState} from 'react'


export default function BoxColor(props) {
    const greenColor = () => {
        var x = document.getElementById('boxColor');
        x.style.backgroundColor = "#19c64d";
    }
    const yellowColor = () => {
        var x = document.getElementById('boxColor');
        x.style.backgroundColor = "#f9ee9a";
    }
    const blueColor = () => {
        var x = document.getElementById('boxColor');
        x.style.backgroundColor = "#41a5e2";
    }
    const redColor = () => {
        var x = document.getElementById('boxColor');
        x.style.backgroundColor = "#dd3b3b";
    }

  return (
    <div className='container'>
        <div className="box" id='boxColor'></div>
        
        <button className="btn btn-primary" onClick={greenColor}>Green</button>
        <button className="btn btn-primary" onClick={yellowColor}>Yellow</button>
        <button className="btn btn-primary" onClick={blueColor}>Blue</button>
        <button className="btn btn-primary" onClick={redColor}>Red</button>
    </div>
  )
}
