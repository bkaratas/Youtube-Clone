import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex items-center py-2 px-4 sm:px-3 shadow-md justify-between sm:sticky top-0 z-10 bg-white">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <div
          onClick={() => setSidebar((prev) => !prev)}
          className="hidden sm:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="me-4 ms-4"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 5h8m-8 7h13M3 19h18"
            />
          </svg>
        </div>
        <Link to="/" className="flex-grow">
          <img src={logo} alt="Logo" width={100} height={30} />
        </Link>
        <SearchOutlined
          className="block sm:hidden ms-auto"
          style={{ fontSize: "20px" }}
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="border border-gray-400 px-4 py-2 rounded-[2rem] hidden sm:flex">
          <input
            type="text"
            placeholder="Search"
            className="border-0 outline-0 w-[20rem]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
            />
          </svg>
        </div>
        <div className="ms-4 bg-gray-300 p-2 rounded-[50%] hidden sm:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 48 48"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="4"
            >
              <rect width="14" height="27" x="17" y="4" rx="7" />
              <path
                stroke-linecap="round"
                d="M9 23c0 8.284 6.716 15 15 15s15-6.716 15-15M24 38v6"
              />
            </g>
          </svg>
        </div>
      </div>

      <div className=" gap-x-4 hidden sm:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M24 4.234v15.49l-7-4V20H0V4h17v4.434zm-7 6.532v2.654l5 2.857v-8.51zM15 18V6H2v12zm-2.5-5h-8v-2h8z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M13 3a1 1 0 1 0-2 0v.75h-.557A4.214 4.214 0 0 0 6.237 7.7l-.221 3.534a7.4 7.4 0 0 1-1.308 3.754a1.617 1.617 0 0 0 1.135 2.529l3.407.408V19a2.75 2.75 0 1 0 5.5 0v-1.075l3.407-.409a1.617 1.617 0 0 0 1.135-2.528a7.4 7.4 0 0 1-1.308-3.754l-.221-3.533a4.214 4.214 0 0 0-4.206-3.951H13zm-2.557 2.25a2.714 2.714 0 0 0-2.709 2.544l-.22 3.534a8.9 8.9 0 0 1-1.574 4.516a.117.117 0 0 0 .082.183l3.737.449c1.489.178 2.993.178 4.482 0l3.737-.449a.117.117 0 0 0 .082-.183a8.9 8.9 0 0 1-1.573-4.516l-.221-3.534a2.714 2.714 0 0 0-2.709-2.544zm1.557 15c-.69 0-1.25-.56-1.25-1.25v-.75h2.5V19c0 .69-.56 1.25-1.25 1.25"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="me-4"
        >
          <path
            fill="currentColor"
            d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 16.282 6.01a4.84 4.84 0 0 0-1.17-2.034c-.782-.813-1.76-1.286-2.608-1.55c-.626-.195-1.216.03-1.604.293c-.36.242-.94.531-1.65.531s-1.29-.29-1.65-.531c-.388-.262-.978-.488-1.604-.293c-.849.264-1.826.737-2.608 1.55a4.84 4.84 0 0 0-1.17 2.033A9.2 9.2 0 0 1 2.75 12m3.513 7.256c.076-1.011.46-1.724.957-2.241c.553-.576 1.28-.941 1.972-1.157a.2.2 0 0 1 .103.003a.7.7 0 0 1 .216.101c.501.338 1.374.788 2.489.788s1.988-.45 2.489-.788a.7.7 0 0 1 .216-.1a.2.2 0 0 1 .103-.004c.692.216 1.419.581 1.972 1.157c.497.517.88 1.23.957 2.241A9.2 9.2 0 0 1 12 21.25a9.2 9.2 0 0 1-5.737-1.994M9.75 10c0-1.25.97-2.25 2.25-2.25s2.25 1 2.25 2.25s-.97 2.25-2.25 2.25s-2.25-1-2.25-2.25M12 6.25A3.72 3.72 0 0 0 8.25 10A3.72 3.72 0 0 0 12 13.75A3.72 3.72 0 0 0 15.75 10A3.72 3.72 0 0 0 12 6.25"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
