import React from "react";

const BottomNavbar = ({ category, setCategory }) => {
  const items = [
    {
      label: "Home",
      category: 0,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "Shorts",
      category: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M21 8V3H3v5H1v9h2v3h4v-3h8v3h4v-3h2V8h-2zm-6 4H9v-2h6v2z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: "Subscriptions",
      category: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 6h-1V4h-2v2h-6V4H8v2H7c-1.1 0-1.99.9-1.99 2L5 20c0 1.1.89 2 1.99 2H17c1.1 0 1.99-.9 1.99-2l.01-12c0-1.1-.89-2-1.99-2z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: "Games",
      category: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V7h2v5z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav
      id="bottom-navbar"
      className="fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around items-center py-2 sm:hidden"
      style={{
        zIndex: 9999,
        width: "100%",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {items.map((item) => (
        <button
          key={item.category}
          className={`flex flex-col items-center ${
            category === item.category
              ? "text-red-500 bg-gray-200"
              : "text-gray-500"
          }`}
          style={{
            flex: 1,
            maxWidth: "70px",
            textAlign: "center",
            borderRadius: "8px", 
          }}
          onClick={() => setCategory(item.category)}
        >
          {item.icon}
          <span className="text-xs">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNavbar;
