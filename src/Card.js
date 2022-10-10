import React from 'react'
import { useNavigate } from "react-router-dom";
// import { withRouter } from 'react-router';

const Card = () => {
    let navigate = useNavigate();
    const goToCarddetails = () =>{
        console.log("Hello");
        // localStorage.setItem("Selected Card", 1);
       
        navigate('/carddetails');
    }
  return (
    <>
        <div>
        <div onClick = {goToCarddetails}> card 1 </div>
        <div onClick = {goToCarddetails}> card 2 </div>
        <div onClick = {goToCarddetails}> card 3 </div>
       </div>
    </>
  )
}

export default Card;