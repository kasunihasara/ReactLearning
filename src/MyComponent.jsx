import React,{useState} from 'react';

function MyComponent(){
    const[name, setName] = useState('Gest');
    const[age, setAge] = useState(0);
    const[isEmployed, setIsEmployed] = useState(false);


    const updateName = () => {
        setName('kasuni');
    };

    const incremetAge = () => {
        setAge(age + 1);
    };

    const toggleEmployedState = () => {
        setIsEmployed(!isEmployed);
    };

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incremetAge}>Incremet Age</button>

            <p>Is Employeed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedState}>Employed</button>
        </div>
    )

}
export default MyComponent;