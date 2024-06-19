
import cardImgSrc from "./assets/logo.svg"

// Here we are using External and Inline  CSS styling


let colorGreen = {
    color:"white",
    backgroundColor:'hsl(70,80%,50%)'    
}


function Card(){
    return (
        <div className="card" style={{width:'10rem'}}>
            <img className="card-image" src={cardImgSrc}></img>
            <h2 className="card-title" style={colorGreen}>SpinLaunch</h2>
            <p className="card-text">
                SpaceLaunch will never be bhe same.
                SpinLaunch represent a major breakthrough
                One of the 100 most influential company
            </p>

        </div> 
    )
}

export default Card


/*
we use className keyword to specify add a class to
a component because class
*/ 