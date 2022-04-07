import React, { useState } from 'react';
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import Input from '../../component/input/Input';

const giphyFetch = new GiphyFetch("klLnBGPa2a7fbHbPNMFAXNNWsQr2naQv");

function FetchGif({ onGifClick }) {
    const [keyword, setKeyword] = useState("");
    const [width, setWidth] = useState(300);

    const fetchGifs = (offset) => {
        console.log("fun called");
        return giphyFetch.search(keyword, { offset, limit: 10 });

      };
    return (
      <>
        <Input
         value={keyword}
         setValue={setKeyword}
         className="sm-text-area"
        />
      <h4>search result</h4>
      <Grid
      noLink={true}
      hideAttribution={true}

              onGifClick={onGifClick}
        key={keyword}
        fetchGifs={() => fetchGifs(5)}
        width={width}
        columns={3}
        gutter={6}
      />
      </>
    );
  }


export default FetchGif;