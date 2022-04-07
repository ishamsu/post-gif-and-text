

import React, { useState } from "react";
import FetchGif from "../../molecules/gif/fetchGif";
import Button from "../button/button";
import "./popup.css"
const Popup =({onBtnClick,show,onHandleGifClick})=>{
  
  const onTemp =(e)=>{
    e.stopPropagation()
    onBtnClick()
  }
return <>
<Button label="Add gif" className="btn-secondary" handleBtnClick={(e)=>{onTemp(e)}}></Button>
{show ?
<div className="popup">
<div className="popuptext" id="myPopup" onClick={(e)=>{e.stopPropagation()}}>       <FetchGif
onGifClick={(gif, e) => {
  console.log("gif", gif);
  onHandleGifClick(gif)
  e.preventDefault();
}}
/>
</div>
</div>
:""}

</>
}
export default Popup