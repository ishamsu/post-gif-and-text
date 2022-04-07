import React, { useEffect } from "react";
import ViewPost from './viewPost';
const today = new Date();

const TimeLine =({data})=>{
        useEffect(() => {
                console.log('data show', data);
              },[data]);  

return <>
        {data.length>0 && data.map((data)=>{
   const endDate = new Date(data.time);
   
                console.log('data show inside map', data.time);
            return <>        <ViewPost userName={data.title} time={new Date(data.time).toLocaleTimeString([],{ hour12: true })} content={data.content} gif={data.gif}/>
</>
        })}
</>
}
export default TimeLine