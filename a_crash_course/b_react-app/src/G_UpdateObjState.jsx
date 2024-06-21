import {useState} from 'react';

function FavCar(){

    const [car,setCar] = useState({year:2024,manufacturer:"Ford",model:"Mustang"});

    function handelYearChange(event){
        setCar(c => ({...c,year:event.target.value}));
    }
    function handelManufacturerChange(event){
        setCar(c => ({...c,manufacturer:event.target.value}));

    }
    function handelModelChange(event){
        setCar(c => ({...c,model:event.target.value}));
    }

    const[food,setFoods] = useState(["Apple","Orange","Banana"]);
    
    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        if (newFood == "")
                return
        document.getElementById("foodInput").value = "";
        setFoods(foods => [...foods,newFood])
    }
    function handelRemoveFood(idx){
        setFoods((food.filter((_,i)=> i!= idx)))
    }

    return(
        <div className='counter-container'>
            <p>Your Fav Car is : {car.year} {car.manufacturer} {car.model}</p>
            <input type="number" value={car.year} onChange={handelYearChange}/>
            <input type="text" value={car.manufacturer} onChange={handelManufacturerChange}/>
            <input type="text" value={car.model} onChange={handelModelChange}/>

            <h3>List Of Food:</h3>
            <ul>
                {food.map((food,idx) => <li onClick={()=>handelRemoveFood(idx)} key={idx}>{food}</li>)}
            </ul>


            <input type="text" id="foodInput" placeholder="add fruits" />
            <button onClick={handleAddFood}>Add Food</button>


        </div>
    );
}



export default FavCar;