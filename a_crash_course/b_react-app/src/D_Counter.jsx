import {useState} from 'react'

function Counter(){
    const [count,setCount] = useState(0);
    const increment = () => setCount(count+1)
    const decrement = () => setCount(count-1)
    const reset = () => setCount(0)

    return(
        <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
} 

export default Counter;