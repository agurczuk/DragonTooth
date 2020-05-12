import React, { useEffect, useState } from "react";
import axios from "axios";

const RandomGif = () => {
  const [gif, setGif] = useState<string>("");
  
  useEffect(() => {
    console.log("fetch");
    const giphy = {
      baseURL: "https://api.giphy.com/v1/gifs/",
      apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
      tag: "fail",
      type: "random",
      rating: "pg-13",
    };

    let giphyURL = encodeURI(
      giphy.baseURL +
        giphy.type +
        "?api_key=" +
        giphy.apiKey +
        "&tag=" +
        giphy.tag +
        "&rating=" +
        giphy.rating
    );

    axios.get(giphyURL).then((res) => {
      console.log(res);
      setGif(res.data.data.image_original_url);
    });
  }, []);

  return <img src={gif} className="centerImg" alt='funny' />;
};

export default RandomGif;
