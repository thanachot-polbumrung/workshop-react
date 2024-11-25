import { useState } from "react";

function Eiw(){
    const boat=10
    const [tum,setTum]=useState(1);
    function plus(){
        setTum(tum+1)
    }
    return(
        <div>
            <h1>{tum}</h1>
            <button onClick={plus}>+</button>
            <button onClick={()=>setTum(tum-1)}>-</button>
            <button onClick={()=>{setTum(0)}}>cler</button>


            
        </div>
    );

    
}
export default Eiw;