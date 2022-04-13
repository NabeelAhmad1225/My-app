import React, { useState } from 'react'

export default function BgColor() {
    const [Color , setColor] = useState('black')
    const colorChange = (n) => {
        setColor(n);
    }
  return (
      <div className="container">
          <style>{'.box {background-color: '+Color+';}'}</style>
          <div className="box" id='b'></div>
          <button className="btn btn-primary" onClick={() => colorChange('green')}>Green</button>
          <button className="btn btn-primary" onClick={() => colorChange('red')}>Red</button>
          <button className="btn btn-primary" onClick={() => colorChange('olive')}>Olive</button>
          <button className="btn btn-primary" onClick={() => colorChange('blue')}>Blue</button>
          <button className="btn btn-primary" onClick={() => colorChange('pink')}>Pink</button>
      </div>
  )
}
