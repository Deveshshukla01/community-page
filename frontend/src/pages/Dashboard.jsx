import { Link } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

export default function Dashboard() {
  const communities = [
    { name: "spanish", users: 128 },
    { name: "french", users: 84 },
    { name: "english", users: 203 }
  ];

  return (
    <DashboardLayout>
      {/* BACKGROUND WRAPPER */}
      <div className="min-h-screen bg-gray-900 p-6 ">

        <h1 className="text-2xl font-semibold text-white mb-6">
          Communities
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {communities.map((lang) => (
            <Link
              key={lang.name}
              to={`/chat/${lang.name}`}
              className="relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 p-6 text-white group"
            >
              {/* HOVER ANIMATION */}
              <div className="absolute inset-0 bg-gray-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 z-0"></div>

              {/* CONTENT */}
              <div className="relative z-10">
                <h2 className="text-xl font-semibold capitalize">
                  {lang.name}
                </h2>

                <p className="text-sm text-gray-300 mt-2">
                  {lang.users} active users
                </p>

                <p className="text-xs text-gray-400 mt-4">
                  Join conversation →
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </DashboardLayout>
  );
}