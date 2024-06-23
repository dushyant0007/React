/*

    useContext() = React Hook that allows you to share values
                   between multiple levels of components
                   without passing props through each level

*/

import ComponentD from "./C_D-UseContext";

function ComponentC(){
    return (

        <div className="box">
            <h1>ComponentC</h1>
            <ComponentD/>
        </div>
    );
}

export default ComponentC;