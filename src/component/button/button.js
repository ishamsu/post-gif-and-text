import React, { useState } from 'react';
import "./button.css"

const Button=({handleBtnClick, isDisable, className,label})=>{

    return(
    <>
    <button type="button" className={isDisable ? "btn btn-disabled mt-1": className? className + ' btn mt-1': null } onClick={( !isDisable ? handleBtnClick : null)}>{label}</button>

    </>
    )


}
export default Button