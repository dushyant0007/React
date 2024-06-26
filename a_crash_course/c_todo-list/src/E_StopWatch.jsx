
import {useState,useRef,useEffect} from 'react';

function StopWatch(){

    const [isRunning,setIsRunning] = useState(false);
    const [elapsedTime,setElapsedTime] = useState(0) // zero milliseconds
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{
        if(isRunning){
            intervalIdRef.current = setInterval(()=>{setElapsedTime(Date.now() - startTimeRef.current)},10);
        }

        return ()=> {
            clearInterval(intervalIdRef.current)
        }
    },[isRunning]);

    function start(){
        setIsRunning(()=>true);
        startTimeRef.current = Date.now() - elapsedTime
    }

    function stop(){
        setIsRunning(false)
    }

    function reset(){
        setElapsedTime(0)
        setIsRunning(false)
    }
    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
        let seconds = Math.floor(elapsedTime / (1000) % 60)
        let milliseconds = Math.floor(elapsedTime % 1000 / 10 )

        
        return (`${hours}:${minutes}:${seconds}:${milliseconds}`);
    }

    return (
        <div className='stop-watch'>
            <div className='timer'>{formatTime()}</div>
            <div className='buttons'>
                <button onClick={start} className='start-btn'>Start</button>
                <button onClick={stop} className='stop-btn'>Stop</button>
                <button onClick={reset} className='reset-btn'>Reset</button>
            </div>
        </div>
    );
}


export default StopWatch;