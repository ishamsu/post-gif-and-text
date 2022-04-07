import React, { useState } from "react";
import "./textarea.css"

function addEvent(el, types, fn) {
    if (typeof types === 'string') types = [types];
    types.forEach(type => el.addEventListener(type, fn));
  }
  function resize(ara) {
    ara.style.height = 'auto'; /* Always set to auto before resizing... */
    ara.style.height = ara.scrollHeight + 'px';
  }
const TextArea =({value, setValue})=>{
    var autosize = document.getElementsByClassName('autosize')[0];
  if (autosize) {
    addEvent(autosize, ['change', 'cut', 'paste', 'keydown'], e => resize(autosize));
  }

    return <>
 <textarea className="autosize" value={value} onChange={(e) => { setValue(e.target.value) }} onClick={()=>{setValue("")}} />
    </>
}

export default TextArea;
