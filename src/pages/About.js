import React, { useState } from "react"
import { useNavigate } from "react-router-dom"


const About=()=>{
    
    let navigate = useNavigate()

    


    return(
        <div>
            About
            <button onClick={()=>navigate("/",{state:"form about"})}>button</button>
        </div>
    )
}
export default About