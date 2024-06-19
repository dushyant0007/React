import propTypes from 'prop-types'
/*
    Props - read-only properties that are shared between components.
            A parent component can send data to a chile component.
            <Component key=value /> (in App.jsx)
            these key=values pairs are stored in the props object
            which is a parameter of component function (first parameter is props object)

    propTypes - is just helps to ensure the Data-types of props-key-values
            and give warning in the browser's console 
    
    defaultProps - default values for props in case they are not
                   passed from the parent component
*/ 

let std_style = {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "2em",
    padding: "10px",
    margin: "10px",
    border: "5px solid rgb(60,301,101)",
}

function Students(props_obj){
    return (
        <div style={std_style}>
            <p>Name: {props_obj.name}</p>
            <p>Age: {props_obj.age}</p>
            <p>Student: {props_obj.isStudent ? "Yes": "NO"}</p>
        </div>
    );
}

Students.propTypes = {
    name: propTypes.string,
    age:propTypes.number,
    isStudent:propTypes.bool
}

Students.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Students