import React, { useState } from "react";

const Comments = ({ comments }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleComments = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      {comments.slice(0, showAll ? comments.length : 1).map((item, index) => (
        <div key={index} className="flex items-start mb-5 mt-5">
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
      ))}
      {!showAll && (
        <button
          onClick={toggleComments}
          className="text-blue-500 text-[14px] font-medium"
        >
          Daha Fazla Yanıt Göster
        </button>
      )}
      {showAll && (
        <button
          onClick={toggleComments}
          className="text-blue-500 text-[14px] font-medium"
        >
          Daha Az Göster
        </button>
      )}
    </div>
  );
};

export default Comments;
