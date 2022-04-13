import React, { useState } from "react";
import Parent from "./Parent";

function Child ({setColor}) {
    const colorChange = (e) => {
        setColor(e);
    }
    return (
        <div>
            <button className="btn btn-primary" onClick={() => colorChange ('blue')}>Blue</button>
            <button className="btn btn-primary" onClick={() => colorChange ('green')}>Green</button>
            <button className="btn btn-primary" onClick={() => colorChange ('red')}>Red</button>
            <button className="btn btn-primary" onClick={() => colorChange ('brown')}>Brown</button>
            <button className="btn btn-primary" onClick={() => colorChange ('olive')}>Olive</button>

        </div>
    );
}

export default Child;