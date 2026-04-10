import DashboardLayout from "../components/DashboardLayout";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) return <p className="p-6">Loading...</p>;

  // Avatar letter (from email)
  const avatarLetter = user.email?.charAt(0).toUpperCase();

  // XP progress (for level bar)
  const currentXP = user.xp % 100;
  const progress = (currentXP / 100) * 100;

  return (
    <DashboardLayout>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800">
        
        {/* PROFILE CARD */}
        <div className="w-[500px] bg-white/5 backdrop-blur-xl border  border-white/10 rounded-2xl shadow-xl p-8 text-white">

          {/* AVATAR */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-4xl font-bold shadow-lg">
              {avatarLetter}
            </div>

            <h2 className="mt-4 text-xl font-semibold">
              {user.name}
            </h2>

            <p className="text-white/60 text-sm">
              {user.email}
            </p>
          </div>

          {/* LEVEL BADGE */}
          <div className="mt-8 flex justify-center">
            <div className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-semibold shadow-lg">
              Level {user.level}
            </div>
          </div>

          {/* XP BAR */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-white/60 mb-1">
              <span>XP Progress</span>
              <span>{currentXP}/100</span>
            </div>

            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-center">
            <div className="bg-white/5 p-4 rounded-xl">
              <p className="text-lg font-semibold">{user.xp}</p>
              <p className="text-sm text-white/60">Total XP</p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl">
              <p className="text-lg font-semibold">{user.level}</p>
              <p className="text-sm text-white/60">Level</p>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}