
import React from "react";
import "./button.css";
const Button = (toto: { color: string; content: string; link:string}) => {
    return (
    <div className= {toto.color}><a href={toto.link}>{toto.content}</a> </div> 
)}

export default Button 