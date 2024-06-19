/*
    conditional rendering = allows you to control what gets rendered
                            in you application based on certain conditions
                            (show, hide, or change components)
*/ 

function UserGreeting(the_props){
    if(the_props.isLoggedIn){
        return (
            <>
                <hr></hr>
                    <h2> Welcome {the_props.username} </h2>
                <hr></hr>
            </>
        );
    }
    else{
        return (
            <>  
                <hr></hr>
                    <h2>Please log in to continue</h2>
                <hr></hr>
            </>
        );
    }

}

export default UserGreeting;