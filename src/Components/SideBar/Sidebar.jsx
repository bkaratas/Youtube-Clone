import React from "react";
import "./Sidebar.css";
const SideBar = ({ sidebar, category, setCategory }) => {
  console.log("sidebar.js sayfası sidebar değeri: ", sidebar);
  return (
    <div
      className={`bg-white w-[11%] h-[100vh] fixed top-0 pt-[4rem] ps-[1%] ${
        sidebar ? "" : "w-[5%] "
      } `}
    >
      <div>
        <div
          className={`items-center p-2 rounded-md ${
            sidebar ? "flex" : "block"
          } ${category === 0 ? "bg-gray-200 font-[600]" : ""}`}
          onClick={() => setCategory(0)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81zM12 3L2 12h3v8h6v-6h2v6h6v-8h3"
            />
          </svg>
          <span className={`ms-4  ${sidebar ? "" : "hidden"}`}>Home</span>
        </div>
        <div
          className={`items-center p-2 rounded-md ${
            sidebar ? "flex" : "block"
          } ${category === 24 ? "bg-gray-200 font-[600]" : ""}`}
          onClick={() => setCategory(24)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <g fill="none">
              <path
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12.834 3.186a3.627 3.627 0 0 1 3.627 6.282l-.74.426a3.626 3.626 0 0 1 1.935 6.766l-7.02 4.053a3.626 3.626 0 1 1-3.627-6.28l.739-.428A3.627 3.627 0 0 1 5.814 7.24z"
              />
              <path
                fill="currentColor"
                d="M13.992 11.016L11.2 9.271c-.74-.463-1.7.07-1.7.942v3.49c0 .873.96 1.405 1.7.943l2.792-1.746a1.11 1.11 0 0 0 0-1.884"
              />
            </g>
          </svg>
          <span className={`ms-4 ${sidebar ? "" : "hidden"}`}>Shorts</span>
        </div>
        <div
          className={`items-center p-2 rounded-md ${
            sidebar ? "flex" : "block"
          } ${category === 20 ? "bg-gray-200 font-[600]" : ""}`}
          onClick={() => setCategory(20)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M17 4c.763 0 1.394.434 1.856.89c.481.473.922 1.109 1.314 1.81c.787 1.406 1.472 3.243 1.925 5.058c.45 1.801.699 3.682.54 5.161C22.475 18.404 21.71 20 20 20c-1.476 0-2.652-.76-3.614-1.531l-.351-.289l-.492-.415l-.444-.368C14.08 16.572 13.175 16 12 16s-2.08.572-3.099 1.397l-.444.368l-.492.415l-.35.289C6.651 19.24 5.475 20 4 20c-1.711 0-2.476-1.596-2.635-3.081c-.158-1.48.09-3.36.54-5.161c.453-1.815 1.138-3.652 1.925-5.059c.392-.7.833-1.336 1.314-1.81C5.606 4.434 6.237 4 7 4c.515 0 1.018.123 1.513.27l.592.181q.148.046.295.087c.865.248 1.75.462 2.6.462s1.735-.214 2.6-.462l.885-.267C15.983 4.124 16.49 4 17 4m0 2c-.383 0-.783.116-1.171.243l-.458.151l-.221.068c-.885.252-2 .538-3.15.538s-2.265-.286-3.15-.538l-.22-.068l-.459-.151C7.783 6.115 7.383 6 7 6c-.418.078-.793.585-1.076 1.055l-.158.275l-.19.346c-.682 1.218-1.31 2.88-1.73 4.567c-.395 1.576-.587 3.086-.514 4.21l.026.293l.02.176l.03.208c.069.401.218.87.592.87c.812 0 1.49-.404 2.333-1.074l.403-.328l.76-.636l.344-.28C8.904 14.839 10.235 14 12 14s3.096.84 4.16 1.682l.345.28l.76.636l.402.328C18.51 17.596 19.187 18 20 18c.34 0 .494-.387.571-.759l.038-.218l.037-.317c.123-1.146-.067-2.765-.491-4.463c-.386-1.546-.946-3.072-1.562-4.254l-.359-.66l-.158-.273C17.793 6.585 17.418 6.078 17 6M8.5 8a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m7 0a1 1 0 0 1 .993.883L16.5 9v.5h.5a1 1 0 0 1 .117 1.993L17 11.5h-.5v.5a1 1 0 0 1-1.993.117L14.5 12v-.5H14a1 1 0 0 1-.117-1.993L14 9.5h.5V9a1 1 0 0 1 1-1m-7 2a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"
              />
            </g>
          </svg>
          <span className={`ms-4 ${sidebar ? "" : "hidden"}`}>Game</span>
        </div>
      </div>
      <hr className={`${sidebar ? "" : "hidden"}`} />
      <div>
        <h3 className={`p-2 ${sidebar ? "" : "hidden"}`}>Subscribed</h3>
        <div className={` items-center p-2   ${sidebar ? "flex" : "block"} `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"
            />
            <path
              fill="currentColor"
              d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v1.377a11.9 11.9 0 0 1-12 0m13.993-1.451A5 5 0 0 0 19 20h-6a5 5 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0"
            />
          </svg>
          <p className={`ms-4 ${sidebar ? "" : "hidden"}`}>Kafalar</p>
        </div>
        <div className={` items-center p-2  ${sidebar ? "flex" : "block"} `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89l.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.95 8.95 0 0 0 13 21a9 9 0 0 0 0-18m-1 5v5l4.28 2.54l.72-1.21l-3.5-2.08V8z"
            />
          </svg>
          <span className={`ms-4 ${sidebar ? "" : "hidden"}`}>History</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
