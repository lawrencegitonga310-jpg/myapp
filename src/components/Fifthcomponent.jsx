import { useState } from "react";

const Fifthcomponent=() => {

    // the useState() hook enables to create dynamic websites whereby it usually has the start/initial state followed by a state that get show when some effects happen on our website.

    const [number, setNumber] = useState(10)
    return(
        <div className="Fifthcomponent">
            {/*Below we bind our values for number */}
            <h2>Welcome to my fifth copmponent</h2>

            <h2>current number is: {number}</h2>

            {/*call the setNumber function to update the number after a clck effect */}
            <button onClick={ ()=> setNumber(20)}>Click to update the number</button>
        </div>
    )
}
export default Fifthcomponent;