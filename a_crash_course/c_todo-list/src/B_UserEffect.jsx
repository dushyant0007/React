/*
    useEffect() = React Hook that tells React Do Some Code When (pick one):
                    This component re-renders
                    This component mounts
                    The state of a value
    

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