import React, { useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import Feed from "../../Components/Feed/Feed";
import BottomNavbar from "../../Components/BottomNavbar/BottomNavbar";

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);

  return (
    <div className="relative min-h-screen"> {/* Added relative and min-h-screen */}
      {/* Yan Menü (SideBar) */}
      <div className="sm:block hidden">
        <SideBar sidebar={sidebar} category={category} setCategory={setCategory}/>
      </div>

      {/* İçerik */}
      <main className={`pr-[2%] sm:pt-5 pt-1 ${sidebar ? "pl-0 sm:pl-[12%]" : "pl-0 sm:pl-[5%]"}`}>
        <Feed category={category} />
      </main>

      {/* Bottom Navbar - Absolute positioning */}
      <BottomNavbar category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;