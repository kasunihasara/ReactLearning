import React, { useState } from 'react';

function ArrayObject() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');

    function handleAddCar() {
        const newCar = { year: carYear, make: carMake };
        setCars(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake('');
    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    return (
        <div>
            <h2>List of Cars</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make}
                    </li>
                ))}
            </ul>
            <input type='number' value={carYear} onChange={handleYearChange} /> <br></br>
            <input type='text' value={carMake} onChange={handleMakeChange} placeholder='Enter Car Make' /><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default ArrayObject;
