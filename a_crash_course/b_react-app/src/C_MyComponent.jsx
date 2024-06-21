/*
    React hook = Special function that allows functional components
                 to use React features without writing class components
                 ex -> (useState,useEffect,useContext, useReducer, useCallback, and more ...)

    useState() - A React hook that allows the creation of a stateful variable
                 AND a setter function to update it's value in the virtual DOM.
                 [name,setName]
*/ 

import {useState} from 'react';

function C_MyComponent(){

    const [name,setName] = useState("init_state_of_name"); // return a variable and a setter function
    const [age, getAge] = useState(18);
    
    const updateName = () => setName("Tom Hilton");
    const incrementAge = () => getAge(age+1);

    return (
        <>
            <div className='counter-container'>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>
            </div>
        </>
    );
}

export default C_MyComponent;