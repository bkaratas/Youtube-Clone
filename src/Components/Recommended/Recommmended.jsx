import React, { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../../data";
import { Link } from "react-router-dom";

const Recommmended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full sm:w-[30%]">
      {apiData?.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={index}
            className="flex justify-between mb-2"
          >
            <img
              className="basis-[49%] w-[50%]"
              src={item.snippet.thumbnails.medium.url}
              alt=""
            />
            <div className="basis-[49%]">
              <h4 className="text-[13px] mb-1 font-semibold">
                {item.snippet.title}
              </h4>
              <p>{item.snippet.chanelTitle}</p>
              <p>{value_converter(item.snippet.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommmended;
