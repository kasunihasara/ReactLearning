function Button(){
    const styles = {
        backgroundColor: "hsl(200,100%,50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
      }
    //   const handleClick = () => console.log('OUCH!');
    //   const handleClick2 = (name) => console.log(`${name} OUCH!`);
    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++
    //         console.log (`${name} OUCH! ${count}`);
    //     }
    //     else{
    //         console.log (`${name} stop clicking me ${count}`);
    //     }
    // };

    const handleClick =(e) => e.target.textContent = 'OUCH';

    return(
        // <button style={styles} onClick={(e) => handleClick(e)}>Click Me</button>
        <button style={styles} onDoubleClick={(e) => handleClick(e)}>Click Me</button>

    );
}
export default Button;