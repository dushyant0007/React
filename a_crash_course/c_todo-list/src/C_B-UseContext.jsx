/*
    useContext() = React Hook that allows you to share values
                   between multiple levels of components
                   without passing props through each level

*/

import ComponentC from "./C_C-UseContext";

function ComponentB(){
    return (

        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC/>
        </div>
    );
}

export default ComponentB;