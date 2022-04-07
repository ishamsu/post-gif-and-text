import React, { useEffect, useState } from "react";
import Avatar from "../../component/avatar/avatar";
import Button from "../../component/button/button";
import Divider from "../../component/divider/divider";
import Input from "../../component/input/Input";
import useModal from '../../hooks/useModal';
import Modal from "../../component/modal/Modal";
import TextArea from "../../component/textArea/textArea";
import Card from "../../component/card/card";
import currentLocal from "../../localization/default";
import Popup from "../../component/popup/popup";
import Image from "../../component/image/image";
import { Gif } from "@giphy/react-components";

const SubmitPost = ({onSubmit}) => {
  const [value, setValue] = useState(currentLocal.inputLabel);
  const { isShowing, toggle } = useModal();
  const [show, setShow]=useState(false)
const [gif, setGif]= useState("");
  const onHandleCloseModal = () => {
    if (!value) {
      setValue(currentLocal.inputLabel)
    }
    toggle()
  }
  

  const onPostSubmit = () => {
    setGif("")
    setValue(currentLocal.inputLabel)
    toggle()
    onSubmit(value,gif)
  }
  const onBtnClick =()=>{
    setShow(!show)
  }
  const onBtnHide=()=>{
    setShow(false)
  }
  
  return <>
    <Card>
      <div className='d-flex flex-row align-center gap-1 mb-1'>
        <Avatar />
        <Input
          value={value}
          setValue={setValue}
          handleClick={toggle}
          className="text-area"

        />
      </div>
      <Divider />
      <Modal
      
      onBtnClick={onBtnHide}
        isShowing={isShowing}
        hide={onHandleCloseModal}
        title="Create post"
        body={<>
          <TextArea
            value={value}
            setValue={setValue}
          />

{gif && <Gif noLink={true}
      hideAttribution={true} gif={gif} width={"100%"} height={400} />}
          <Button label="Post" className="btn-primary" handleBtnClick={onPostSubmit} isDisable={gif=="" ? value == currentLocal.inputLabel || value == 0  ?  true : false : false}/>
          <Popup onBtnClick={onBtnClick} show={show} onHandleGifClick={(temp)=>{setGif(temp);}}/>
        </>}
      />
    </Card>
  </>
}
export default SubmitPost