"use client";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black py-10 md:py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500 rounded-full blur-2xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-20"></div>

        <div className="relative z-10">
          <div className="container">
            <motion.div
              className="flex items-center justify-between gap-2 border-b border-cyan-500 pb-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white">About Me</h2>
              <p className="text-xl text-cyan-400">( 01 )</p>
            </motion.div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <motion.div
                className="w-[303px] h-[440px] hidden lg:flex bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-cyan-500/20"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-black text-2xl font-bold">DA</span>
                    </div>
                    <h3 className="text-white text-xl font-semibold">Durga A</h3>
                    <p className="text-cyan-400">Cybersecurity Enthusiast</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="w-full lg:max-w-2xl flex-1"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 leading-relaxed mb-8">
                  Aspiring Cybersecurity Professional with a strong foundation in computer science, security fundamentals, networking, and problem-solving. Passionate about securing web applications, learning ethical hacking concepts, and exploring cloud security technologies. Eager to apply technical knowledge in real-world security environments while continuously learning emerging threats and modern defense techniques.
                </p>

                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-gray-700">
                  {[
                    { count: "3+", label: "Years Learning" },
                    { count: "5+", label: "Projects Completed" },
                    { count: "10+", label: "Certifications" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="text-center p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-cyan-500/20 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-cyan-400 text-2xl font-bold">{item.count}</h3>
                      <p className="text-gray-300 text-base md:text-lg">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-black text-sm font-bold">⚡</span>
                    </div>
                    <p className="text-base xl:text-xl text-white">Key Interests</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["Ethical Hacking", "Web Security", "Cloud Security", "Python Development"].map((interest) => (
                      <motion.span
                        key={interest}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl font-semibold shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        {interest}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
