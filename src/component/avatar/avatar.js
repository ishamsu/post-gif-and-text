import React from "react";
import "./avatar.css"
const Avatar =(src)=>{
return <>
           <img src={ src==true ? src :"./avatar.png"} className='avatar'></img>
</>
}
export default Avatar