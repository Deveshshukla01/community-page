import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-5 backdrop-blur-xl bg-white/5 border-b border-white/10 sticky top-0 z-50">
        <h1 className="text-xl font-semibold tracking-wide">
          LinguistCom
        </h1>

        <div className="flex gap-6 items-center text-sm">
          <Link to="/login" className="text-white/70 hover:text-white">
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl"
          >
            Signup
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center text-center px-6 py-28">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-semibold max-w-3xl leading-tight"
        >
          Speak. Learn. Level Up.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-white/70 max-w-xl"
        >
          Join global communities, practice languages in real conversations,
          and earn XP as you grow your skills.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex gap-4"
        >
          <Link
            to="/signup"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-xl"
          >
            Login
          </Link>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="px-10 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-16">
          Why LinguistCom?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "🌍 Real Conversations",
              desc: "Talk with real people in Spanish, French, English and more."
            },
            {
              title: "🎮 Gamified Learning",
              desc: "Earn XP, level up, and stay consistent while learning."
            },
            {
              title: "🚀 Competitive Growth",
              desc: "Compete with others and track your language progress."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl shadow-lg hover:shadow-blue-500/20"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-white/70">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ABOUT US */}
      <section className="px-10 py-20 border-t border-white/10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">
          About LinguistCom
        </h2>

        <p className="text-white/70 leading-relaxed text-lg">
          LinguistCom is built to redefine how people learn languages. 
          We believe that the best way to master a language is through real conversations 
          with real people. Our platform combines community-driven learning with 
          gamification, allowing users to earn experience, level up, and stay motivated.
          <br /><br />
          Whether you're a beginner or an advanced learner, LinguistCom helps you grow 
          through interaction, competition, and consistency.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-semibold">
          Start Learning Today
        </h2>

        <Link
          to="/signup"
          className="inline-block mt-6 px-10 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg"
        >
          Join LinguistCom
        </Link>
      </section>

        <footer className="bg-black border-t border-white/10 text-white px-10 py-12">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-semibold mb-3">LinguistCom</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Learn languages through real conversations, earn XP, and level up your skills with a global community.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-white/80">
            Navigation
          </h3>

          <div className="flex flex-col gap-2 text-white/60 text-sm">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/login" className="hover:text-white">Login</Link>
            <Link to="/signup" className="hover:text-white">Signup</Link>
          </div>
        </div>

        {/* SOCIAL / INFO */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-white/80">
            About
          </h3>

          <p className="text-white/60 text-sm">
            Built to make language learning interactive, competitive, and fun.
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/50">
        © {new Date().getFullYear()} LinguistCom. All rights reserved.
      </div>

    </footer>

    </div>
  );
}