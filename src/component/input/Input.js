import React, { useState } from 'react';
import './input.css';

 const Input =({handleClick,value, setValue, className})=>{    
    const onChangeValue=(value)=>{
        setValue(value)
    }
    const onHandleClick=()=>{
           handleClick() 
    }
     return <>
     <form onSubmit={()=>{}} className="w-full ">    
          <input type="text" value={value}  onChange={(e)=>{onChangeValue(e.target.value)}} onClick={onHandleClick} className={className}  />
      </form>
     </>
 }
export default Input;