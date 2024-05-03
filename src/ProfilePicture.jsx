function ProfilePicture(){

    const imageUrl = './src/assets/723-7239270_hotel-transylvania-2-dennis-png.png';
    const handleClick = (e) => e.target.style.display ='none';
    return(
        <img onClick ={(e) => {handleClick(e)}} src={imageUrl}></img>
    )

}
export default ProfilePicture;