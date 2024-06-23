/*
    useEffect() = React Hook that tells React Do Some Code When (pick one):
                    This component re-renders
                    This component mounts (create and append to the dom)
                    The state of a value changes
    

    useEffect(function,[dependencies])
    1. useEffect(()=>{})         // Runs after every re-render
    2. useEffect(()=>{},[])      // Runs only on mount
    3. useEffect(()=>{},[value]) // Runs on mount + when value changes

    # Use cases
    1. Event Listeners
    2. DOM manipulation
    3. Subscriptions (real-time updates)
    4. Fetching Data from an API
    5. Clean up when a component unmount

*/ 

import {useState,useEffect} from 'react';

function CountVariable(){

    const [count,setCount] = useState(0);
    function addCount(){setCount(c => c+1)}
    useEffect(()=>{
        document.title = `Count:${count}`;

        // this function runs when this component unmounts
        // or before next render if no dependencies
        return ()=>{};
    },[count]);

    return(
        <>
            <p>Count:{count}</p>
            <button onClick={addCount}>Add</button>
        </>
    )
}

export default CountVariable;