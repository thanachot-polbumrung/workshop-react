import React from "react";
import Boatbutton from "../component/Boatbutton";

const Dashboard =({ logout })=>{
    return(
        <div>
           
            <h3>Wellcome</h3>
            <p>Wellcome user</p>
            <button onClick={logout}>logout</button>
        </div>
    )
}

export default Dashboard