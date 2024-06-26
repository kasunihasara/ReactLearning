import React, {useState} from 'react';

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c =>c + 1);
        setCount(c =>c + 1);
        setCount(c =>c + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return( <div className='conter-container'> 
            <p className='counter-display'>{count}</p>
            <button className = 'conter-button' onClick={decrement}>Decrement</button>
            <button className = 'conter-button' onClick={reset}>Reset</button>
            <button className = 'conter-button' onClick={increment}>Increment</button>
            </div>

)

}
export default Counter;