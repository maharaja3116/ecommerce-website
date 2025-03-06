import React from "react";
import logo from  "./assts/assets/mobiles.1.jpg"
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate=useNavigate()
    console.log(navigate)
return(
    <>
    <h1>MAHARAJA Mobiles</h1>
    <img src={logo} width={"1300px"} height={"600px"}/>
    
    </>
)
}
export default Home;