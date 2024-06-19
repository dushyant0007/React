
function List(){
    
    const fruits = ["apple","orange","banana","coconut","pineapple"];
    const fruits_objs = [
        {name:"apple", calories: 95},
        {name:"orange", calories: 45},
        {name:"banana", calories: 105},
        {name:"coconut", calories: 159},
        {name:"pineapple", calories: 37}
    ];
    const listItems = fruits.map(fruit => <li>{fruit}</li>);
    const listObjItems = fruits_objs.map(fruit => <li key={fruit.name}>{fruit.name}: {fruit.calories} </li>);
    
    return (
    <>
        <ul>{listItems}</ul>
        <ul>{listObjItems}</ul>
    </>
);
        
}

export default List;