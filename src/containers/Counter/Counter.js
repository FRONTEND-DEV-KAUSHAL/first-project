import React, { useEffect, useState } from 'react';

function Counter(props) {
    const [Count, setCount] = useState(0);

    const increase = () => {
        if (Count >= 10) {
            setCount(Count)
        } else {
            setCount(Count + 1);
        }
    }

    const decrease = () => {
        if (Count <= 0) {
            setCount(Count)
        } else {
            setCount(Count - 1);
        }
    }
     
    return (
        <div className='display'>
            <button onClick={increase} className='pluse'>+</button>
            <button onClick={decrease} className='minuse'>-</button>
            <h2 className='ans'>{Count}</h2>
        </div>
    );
}

export default Counter;