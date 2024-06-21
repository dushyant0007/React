
/*
    updater function = A function passed as an argument to setState() usually
    ex setYear(arrow fun)
    Allows for safe update based on the previous state
    Used with multiple state updates and asynchronous functions
    Good practice to use update functions
*/

import {useState} from 'react'

function Updater(){
    
    const [count,setCount] =  useState(0)

    function increment(){
        
        /*
            Uses the CURRENT state to calculate the NEXT state.
            set functions do not trigger an update.
            React batches together state updates for performance reasons.
            NEXT state becomes the CURRENT state after an update.
        */

        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);

        /*
            Takes the PENDING  state to calculate Next state.
            React puts your update function in a queue(waiting in the line)
            During the next render, it will call them in the same order.
        */
        setCount((prevCount)=>prevCount+1);
        setCount((prevCount)=>prevCount+1);
        setCount((prevCount)=>prevCount+1);
    }

    function decrement(){
        setCount(count-1);
    }

    function reset(){
        setCount(0);
    }

    return(
        <div className='counter-container'>
           <p>Count: {count}</p>
           <button onClick={increment}>Inc Count</button>
           <button onClick={decrement}>Dec Count</button>
           <button onClick={reset}>Rest Count</button>
        </div>
    );

}

export default Updater