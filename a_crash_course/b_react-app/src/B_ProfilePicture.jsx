

function ProfilePicture(){

    const imageUrl = './src/assets/profile_pic.jpg';

    const handleClick = (event) => {
        event.target.style.display = "none"; 
        document.getElementById("showAgain").style.display = 'inline-block'
    };

    const showAgain = (event)=> {
        event.target.style.display = 'none';
        document.getElementById("profileImage").style.display = 'inline-block';
    };

    return(
        <div className="counter-container">
            <img id="profileImage" onClick={(event)=>handleClick(event)} src={imageUrl} ></img>
            <button style={{display:'none'}} id="showAgain" onClick={showAgain}>Show again</button>
        </div>
    );


}

export default ProfilePicture;

