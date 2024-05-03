import React, { useState, useEffect } from 'react';

function UseEffect() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [width, height]);

    function increment() {
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    };

    function changeColor() {
        setColor(c => c === 'green' ? 'red' : 'green');
    }

    return (
        <>
            <div className='counter-container'>
                <p className='counter-display' style={{ color: color }}>{count}</p>
                <button className='counter-button' onClick={decrement}>Decrement</button>
                <button className='counter-button' onClick={increment}>Increment</button><br /><br />
                <button className='counter-button' onClick={changeColor}>ChangeColor</button>
            </div>
            <div>
                <p>Window Width : {width}</p>
                <p>Window Height : {height}</p>
            </div>
        </>
    );
}

export default UseEffect;
