import React from "react";

class Inputs extends React.Component {
render()
{
    return(
        <div>
            <input type="text" placeholder="Enter Name" /><br />
            <input type="email" placeholder="Enter Email" /><br />
            <input type="password" placeholder="Enter Password" /><br />
            <input type="radio" name="gender" id="r1" />Male 
            <input type="radio" name="gender" id="r1" />Femal <br />
            <input type="submit" value="Submit" />
        </div>
    )
}
}


export default Inputs;