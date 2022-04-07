import { Gif } from "@giphy/react-components";
import React from "react";
import Avatar from "../../component/avatar/avatar";
import Card from "../../component/card/card";
import Image from "../../component/image/image";
import EarthIcon from "../../icon/earth/earthIcon";
import VerffyIcon from "../../icon/verify/verifyIcon";
const ViewPost =({userName, time, content,gif})=>{
    return <>
     <Card  className="mt-1">
          <div className='d-flex align-center gap-1'>
              <Avatar />
              <div className='d-flex flex-col'>
                <div className='d-flex flex-row align-center gap-05'>
                <h3 className='m-0'>{userName}</h3>
                <VerffyIcon/>
                </div>
                   <div className='d-flex flex-row  align-center gap-05'>
                   <h4 className='m-0'>{time}</h4>
                   <EarthIcon/>
                   </div>
                    
              </div>
          </div>
      <p>{content}</p>
      {/* <Image/>    */}
      {gif && <Gif noLink={true}
      hideAttribution={true} gif={gif} width={"100%"} height={400} />}
           </Card>
      </>
}
export default ViewPost