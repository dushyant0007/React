

/*
  click event - An interacting when a user clicks on a specific element.
  We can respond to clicks by passing a
  callback to the onClick event handler.
*/


function Button(){

    let count = 0    

    const handelClick = () => console.log("OUCH!");
    const handelClick2 = (name) => console.log(`${name} stop`)
    const handelClick3 = (name)=>count < 3 ? console.log(`${name} clicked ${++count} times`):console.log(`${name} stop clicking `)
        
    
    const handelClick4 = (event)=> event.target.innerText = `clicked ${++count}`

    return (
        <>
            <button onClick={() => handelClick3("Bijou")}>Click Here</button>

            <button onClick={(event)=>handelClick4(event)}>Click Here 2</button>
        </>
        
    );
}

export default Button;