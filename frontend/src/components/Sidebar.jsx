import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Sidebar() {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const navItems = [
    { name: "Communities", path: "/dashboard" },
    { name: "Profile", path: "/profile" }
  ];

  return (
    <div className="w-64 bg-black text-white p-6 h-screen flex flex-col border-r border-gray-800">
      
      {/* HEADER */}
      <h2 className="text-xl font-semibold mb-6 tracking-wide">
        Dashboard
      </h2>

      {/* USER */}
      <p className="mb-6 text-gray-400 text-sm">
        {user?.name}
      </p>

      {/* NAV ITEMS */}
      <div className="flex flex-col gap-3">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`relative overflow-hidden rounded-xl px-4 py-3 group transition ${
                isActive ? "bg-gray-800" : "bg-white/5"
              }`}
            >
              {/* HOVER SLIDE EFFECT */}
              <div className="absolute inset-0 bg-gray-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 z-0"></div>

              {/* TEXT */}
              <span className="relative z-10 text-sm font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>

      {/* LOGOUT */}
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
        className="mt-auto relative overflow-hidden rounded-xl px-4 py-3 bg-red-600 group"
      >
        {/* HOVER EFFECT */}
        <div className="absolute inset-0 bg-red-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 z-0"></div>

        <span className="relative z-10 text-sm font-medium">
          Logout
        </span>
      </button>

    </div>
  );
}