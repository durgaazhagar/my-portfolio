"use client";
import { motion } from "framer-motion";

const LatestWork = () => {
  const achievements = [
    {
      title: "CodeCrafters 25 Hackathon",
      organization: "SKP Engineering College",
      date: "Sep 2025",
      description: "Participated in inter-college hackathon, focusing on cybersecurity challenges and innovative solutions.",
      icon: "🏆"
    },
    {
      title: "INCETAIBCT'26 – 4th International Conference",
      organization: "International Conference",
      date: "Apr 2026",
      description: "Presented research on emerging cybersecurity threats and defense mechanisms.",
      icon: "🎤"
    },
    {
      title: "Best Manager Award",
      organization: "HR Khan's Training Academy",
      date: "Sep 2023",
      description: "Recognized for exceptional leadership and management skills in training programs.",
      icon: "⭐"
    },
    {
      title: "1st Place – TechXplore 2026",
      organization: "Tech Competition",
      date: "2026",
      description: "Won first place in technical exploration competition showcasing cybersecurity projects.",
      icon: "🥇"
    },
    {
      title: "AWS Cloud Club Event Participant",
      organization: "AWS Cloud Club",
      date: "Ongoing",
      description: "Active participant in AWS cloud computing workshops and certification preparation.",
      icon: "☁️"
    },
    {
      title: "WsCube Tech Marketplace Ads Mastery Training",
      organization: "WsCube Tech",
      date: "Completed",
      description: "Completed advanced training in digital marketing and marketplace advertising strategies.",
      icon: "📈"
    }
  ];

  return (
    <section>
      <div className="bg-gradient-to-br from-black via-gray-900 to-black py-16 md:py-32">
        <div className="container">
          <motion.div
            className="flex items-center justify-between gap-2 border-b border-cyan-500 pb-7 mb-9 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white">Achievements & Certifications</h2>
            <p className="text-xl text-cyan-400">( 04 )</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-cyan-500/20 shadow-2xl hover:border-cyan-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(34, 211, 238, 0.2)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{achievement.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-lg font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-cyan-400 text-sm font-medium mb-1">{achievement.organization}</p>
                    <p className="text-gray-400 text-sm mb-3">{achievement.date}</p>
                    <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>

                {/* Glowing accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
