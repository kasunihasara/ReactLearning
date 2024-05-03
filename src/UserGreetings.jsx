function UserGreetings(props){
    // if(props.isLoggedIn){
    //     return <h2>welcome {props.userName}</h2>
    // }
    // else{
    //     return <h2>Please LogIN to continue</h2>
    // }

    const welcomeMessage = <h2>Welcom {props.userName}</h2> 

    return(props.isLoggedIn ? welcomeMessage: <h2>Please log in to continue</h2>);

}
export default UserGreetings