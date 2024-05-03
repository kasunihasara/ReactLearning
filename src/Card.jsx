
function Card(props){
    return(
        <div className="card">
            <img className="cardImage" src={props.imageSrc} alt="Profile Photo"></img>
            <h2 className="card-title"> Kasun Hasara</h2>
            <p className="card-taxt">I like drawing and reading while listing to music</p>
        </div>

    );

}
export default Card