import React from "react";
import { useNavigate } from "react-router-dom";

function Nav(){

const navigate = useNavigate()
    return(
        <div>
            <a href="/">Home</a>
            <a href="about">About</a>
            <a href="blog">Blog</a>
            <a href="contact">Contact</a>
        </div>
    )
}

export default Nav