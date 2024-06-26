/*
    userState() = Re-renders the component when the state value changes.

    useRef() = "use Reference" Does not cause re-render when its value changes
    but you don't want that information to remember some information,
    but you don't want that information to trigger new renders.

    1. Accessing/Interacting with DOM element
    2. Handling Focus, Animations, and Transitions
    3. Managing Timers and Intervals
*/ 

 import { /* useState, */ useEffect,useRef } from "react";

function UseRef(){
    // let [number,setNumber] = useState(0); (before)

    // return a obj of one property(ref.current)
    //let ref = useRef(0);//(After)
    let inputRef = useRef(null);

    // run every time the component renders
    useEffect(()=>{console.log("Component Rendered")})

    // function handleClick(event){
    //     // setNumber((number)=>number += 1) (before)
    //     ref.current += 1 // (After)
    // }

    function inputClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow"
    }

    return (
        <>
            <button onClick={inputClick} >click Here </button>

            {/* ref attribute is a special attribute use to create 
            references to elements  */}
            {/* The current property of inputRef is input(element) */}
            <input ref={inputRef}/>
        </>
    );
}

export default UseRef;