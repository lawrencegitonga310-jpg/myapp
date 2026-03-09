const Thirdcomponent=() =>{
    // variables enables us to create dynamic websites.(it means the contents of the website will be changing overtime.)
    //bebow we declare some variables  Note: variables are ussually declared just before the rwturn statement in React.js
    let name = "lawrence";
    let age = 22;
    let message = "I love programming"


    return(
        <div className="Thirdcomponent">
            <h2>This is my Third component</h2>
            <h5>my name is: {name}</h5>
            <h5>my age is: {age}</h5>
            <h5>And:{message}</h5>

        </div>
    )
}
export default Thirdcomponent;