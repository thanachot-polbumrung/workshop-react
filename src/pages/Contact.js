import React from 'react'
import { Link } from 'react-router-dom'
import Boatbutton from '../component/Boatbutton'


function Contact(props) {
  return (
    <div>
         <Boatbutton name="yyy" text="kkk" age={30}></Boatbutton>
        <p>contact</p>
        <Link to="/" state={"from state"}>back</Link>
      
    </div>
  )
}



export default Contact

