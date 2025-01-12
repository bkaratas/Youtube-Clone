import React, { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isDescriptionPanelOpen, setIsDescriptionPanelOpen] = useState(false);
  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchChannelData = async () => {
    if (!apiData) return;
    const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelDetails_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));
  };

  const fetchCommentData = async () => {
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
    fetchCommentData();
  }, [videoId]);

  useEffect(() => {
    fetchChannelData();
  }, [apiData]);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
  };
  const openDescriptionPanel = () => setIsDescriptionPanelOpen(true);
  const closeDescriptionPanel = () => setIsDescriptionPanelOpen(false);
  return (
    <div className="w-full sm:w-[68%]">
      <iframe
        className="w-full h-[60vw] sm:h-[37vw]"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3 className="mt-3 font-semibold sm:text-[22px] text-[15px]">
        {apiData ? apiData.snippet.title : "Title Here"}
      </h3>
      <div className="flex items-center justify-between flex-wrap mt-3 text-[14px] text-[#5a5a5a]">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "?K"} Views{" "}
          <span className="ms-2">
            &#8226;{" "}
            {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
          </span>
        </p>
      </div>
      <hr className="border-0 h-[1px] bg-[#ccc] mt-3 mb-3" />

      <div className="mt-4 mb-4">
        <div className="w-full sm:w-[68%]">
          <div
            className="block sm:hidden bg-gray-100 p-2 rounded-md"
            onClick={openDescriptionPanel}
          >
            <p className="text-[14px] mb-1 text-[#5a5a5a]">
              {apiData
                ? `${apiData.snippet.description.slice(0, 100)}... `
                : ""}
            </p>
            <div
              className={`fixed bottom-0 left-0 w-full bg-white shadow-lg transform transition-transform ${
                isDescriptionPanelOpen ? "translate-y-0" : "translate-y-full"
              }`}
              style={{ maxHeight: "60vh", overflowY: "auto" }}
            >
              <div className="sticky top-0 bg-white z-10 shadow-sm p-4 flex justify-between items-center">
                <h4 className="text-lg font-semibold">Description</h4>
                <button
                  onClick={closeDescriptionPanel}
                  className="text-xl text-gray-500"
                >
                  &#x2715; {/* Çarpı ikonu */}
                </button>
              </div>
              <div className="p-4">
                <p className="text-[14px] text-[#5a5a5a]">
                  {apiData ? apiData.snippet.description : ""}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <p className="text-[14px] mb-1 text-[#5a5a5a]">
              {apiData ? apiData.snippet.description : ""}
            </p>
          </div>
        </div>

        <hr />
        <h4 className="text-[14px] mb-1 text-[#5a5a5a]">
          {apiData ? value_converter(apiData.statistics.commentCount) : "?K"}{" "}
          Comments
        </h4>
        <div className="hidden sm:block">
          {commentData.map((item, index) => {
            return (
              <div key={index} className="flex items-start mb-5 mt-5">
                <img
                  src={
                    item.snippet.topLevelComment.snippet.authorProfileImageUrl
                  }
                  alt=""
                  className="w-[35px] rounded-[50%] ms-4"
                />
                <div className="ms-4">
                  <h3 className="text-[14px] mb-[2px]">
                    {item.snippet.topLevelComment.snippet.authorDisplayName}
                  </h3>
                  <p className="text-[12px] text-[#5a5a5a] font-medium">
                    {item.snippet.topLevelComment.snippet.textDisplay}
                  </p>
                  <div className="flex items-center mb-2 mt-2 text-[14px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill="currentColor"
                        d="M5 9v12H1V9zm4 12a2 2 0 0 1-2-2V9c0-.55.22-1.05.59-1.41L14.17 1l1.06 1.06c.27.27.44.64.44 1.05l-.03.32L14.69 8H21a2 2 0 0 1 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21zm0-2h9.03L21 12v-2h-8.79l1.13-5.32L9 9.03z"
                      />
                    </svg>
                    <span className="ms-1 me-3 text-[#5a5a5a]">
                      {value_converter(
                        item.snippet.topLevelComment.snippet.likeCount
                      )}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill="currentColor"
                        d="M19 15V3h4v12zM15 3a2 2 0 0 1 2 2v10c0 .55-.22 1.05-.59 1.41L9.83 23l-1.06-1.06c-.27-.27-.44-.64-.44-1.06l.03-.31l.95-4.57H3a2 2 0 0 1-2-2v-2c0-.26.05-.5.14-.73l3.02-7.05C4.46 3.5 5.17 3 6 3zm0 2H5.97L3 12v2h8.78l-1.13 5.32L15 14.97z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="sm:hidden">
          {commentData.length > 0 && (
            <div
              className="flex items-start mb-5 mt-5 bg-gray-300 p-2 rounded-md"
              onClick={togglePanel}
            >
              <img
                src={
                  commentData[0].snippet.topLevelComment.snippet
                    .authorProfileImageUrl
                }
                alt=""
                className="w-[35px] rounded-[50%] ms-4"
              />
              <div className="ms-4">
                <h3 className="text-[14px] mb-[2px]">
                  {
                    commentData[0].snippet.topLevelComment.snippet
                      .authorDisplayName
                  }
                </h3>
                <p className="text-[12px] text-[#5a5a5a] font-medium">
                  {commentData[0].snippet.topLevelComment.snippet.textDisplay}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className={`fixed bottom-0 left-0 w-full bg-white shadow-lg transform transition-transform sm:hidden ${
          isPanelOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ maxHeight: "60vh", overflowY: "auto" }}
      >
        <div className="sticky top-0 bg-white z-10 shadow-sm p-4 flex justify-between items-center">
          <h4 className="text-lg font-semibold">Comments</h4>
          <button onClick={closePanel} className="text-xl text-gray-500">
            &#x2715;
          </button>
        </div>

        <div className="p-4">
          {commentData.map((item, index) => (
            <div key={index} className="flex items-start mb-4">
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
                className="w-[35px] rounded-[50%] ms-4"
              />
              <div className="ms-4">
                <h3 className="text-[14px] mb-[2px]">
                  {item.snippet.topLevelComment.snippet.authorDisplayName}
                </h3>
                <p className="text-[12px] text-[#5a5a5a] font-medium">
                  {item.snippet.topLevelComment.snippet.textDisplay}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
