import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
const Feed = ({category}) => {
  const [data,setData] = useState([]);

  const fetchData = async () => {
    const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(video_url).then(response => response.json()).then(data => setData(data.items))
  }
  useEffect(() =>{
    fetchData()
  },[category])
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      {data.map((item,index) => {
        return(
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="p-2">
        <img
          className="rounded-[12px] w-full"
          src={item.snippet.thumbnails.medium.url}
          alt=""
        />
        <h2 className="text-[14px] font-semibold mt-1 mb-1">
        {item.snippet.title}
        </h2>
        <h3 className="text-[12px] text-[#606060] font-medium mt-1 mb-1">
        {item.snippet.channelTitle}
        </h3>
        <p className="text-[12px] text-[#606060] font-medium mt-1 mb-1">
        {value_converter(item.statistics.viewCount)} views <span className="ms-2">&#8226; {moment(item.snippet.publishedAt).fromNow()}</span>{" "}
        </p>
      </Link>
        ) 
      })}
      

    </div>
  );
};

export default Feed;
