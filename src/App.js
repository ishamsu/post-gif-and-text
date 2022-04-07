import './App.css';
import "./utils/utility.css"
import SubmitPost from './molecules/post/submitPost';
import TimeLine from './molecules/post/timeLine';
import { useEffect, useState } from 'react';
import FetchGif from './molecules/gif/fetchGif';
import Modal from './component/modal/Modal';
import Popup from './component/popup/popup';





function App() {
  const [data, setData] = useState([]);
  const onSubmit=(temp,gif)=>{
    let tempArr=[...data]
    tempArr.push({title:"ishamsu",
    time: new Date(),
    content : temp,
    gif: gif
    })
    setData(tempArr.reverse())
  }
  return (
    <div className="App">
      <div className='main-container' >
        <SubmitPost onSubmit={onSubmit}/>
       <TimeLine data={data}/>

      </div>
    </div>
  );
}

export default App;
