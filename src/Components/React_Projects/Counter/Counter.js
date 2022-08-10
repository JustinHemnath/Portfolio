import React, { useState } from 'react';
import "./Counter.css";


const Counter = () => {
    
    const [ count, setCount ] = useState(0);

    return (
        
        <div className="counterdiv">

            <div className="counter">

                <p>{count}</p>

                <button className="decrease" onClick={() => setCount(count - 1) }>DECREASE</button>

                <button className="reset" onClick={() => setCount(0)}>RESET</button>

                <button className="increase" onClick={() => setCount(count + 1)}>INCREASE</button>

            </div>

        </div>

    );

};

export default Counter;
