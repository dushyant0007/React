import propTypes from 'prop-types'

function List(props_obj){

    const fruits = ["apple","orange","banana","coconut","pineapple"];
    const fruitsObjs = [
        {id:1,name:"apple", calories: 95},
        {id:2,name:"orange", calories: 45},
        {id:3,name:"banana", calories: 105},
        {id:4,name:"coconut", calories: 159},
        {id:5,name:"pineapple", calories: 37}
    ];

    props_obj.more_fruits.forEach(item => fruitsObjs.push(item));

    // fruitsObjs.sort((obj1,obj2)=> obj1.name.localeCompare(obj2.name)) // Alphabetical
    // fruitsObjs.sort((obj1,obj2)=> obj2.name.localeCompare(obj1.name)) // Reverse Alphabetical
    // fruitsObjs.sort((obj1,obj2)=> obj1.calories -calories ) // Numeric
    // fruitsObjs.sort((obj1,obj2)=> obj2.calories - obj1.calories ) // Reverse Numeric

    const lowCalFruits = fruitsObjs.filter(fruit => fruit.calories < 100)


    const listItems = fruits.map(fruit => <li>{fruit}</li>);
    const listObjItems = fruitsObjs.map(fruit => <li key={fruit.id}>{fruit.name}: {fruit.calories} </li>);
    const listLowCalFruits = lowCalFruits.map(fruit => <li key={fruit.id}>{fruit.name}: {fruit.calories} </li>);
    
    return (
    <>
        <h2>Fruit Name</h2>
        <ul style={cssStyle}>{listItems}</ul>

        <h2 className="pink-shadow card">Fruit Name : Calories</h2>
        <ul style={cssStyle}>{listObjItems}</ul>

        <div>Fruit With Calories {"<"} 100</div>
        <ul style={cssStyle}>{listLowCalFruits}</ul>
    </>
);
        
}

let cssStyle = {
    border:"2px solid black"
}

List.propTypes = {
    more_fruits: propTypes.arrayOf(propTypes.shape({id:propTypes.number,name:propTypes.string,calories:propTypes.number}))
}

export default List;