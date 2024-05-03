import React, { createContext, useContext } from 'react';
import { UserContext } from './ComponentA';

function ComponentB() {
    const user = useContext(UserContext);

    return (
        <div className='box'>
            <h1>ComponentB</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    );
}

export default ComponentB;
