"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EducationSkills = () => {
  const [educationData, setEductionData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEductionData(data?.educationData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-cyan-500/20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container relative z-10">
          {/* Background Effects */}
          <div className="absolute top-10 right-10 w-24 h-24 bg-cyan-500 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-10"></div>

          <div className="relative z-10 py-16 md:py-32">
            <motion.div
              className="flex items-center justify-between gap-2 border-b border-cyan-500 pb-7 mb-9 xl:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white">Education & Skills</h2>
              <p className="text-xl text-cyan-400">( 03 )</p>
            </motion.div>

            <div className="mb-10 rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl">
              <Image
                src="/pfolio.jpg"
                alt="Portfolio education image"
                width={1200}
                height={600}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-20">
              {/* Education Timeline */}
              <motion.div
                className="w-full lg:max-w-md flex flex-col gap-0 xl:gap-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-cyan-400 text-2xl font-semibold mb-8">Education</h3>
                {educationData?.education?.map((value: any, index: any) => {
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start gap-6 relative"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-2 bg-black flex items-center justify-center border-cyan-400 shadow-lg shadow-cyan-400/50">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                      </div>
                      {index < educationData.education.length - 1 && (
                        <div className="absolute left-1.5 top-8 w-0.5 h-20 bg-gradient-to-b from-cyan-400 to-transparent"></div>
                      )}
                      <div className="flex-1 flex flex-col gap-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-4 rounded-lg border border-cyan-500/20">
                        <h5 className="text-white text-lg font-semibold">{value?.title}</h5>
                        <p className="font-normal text-gray-300">{value?.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Skills Grid */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-cyan-400 text-2xl font-semibold mb-8">Technical Skills</h3>
                <div className="grid grid-cols-2 xs:grid-cols-3 gap-5 xl:gap-7">
                  {educationData?.skills?.map((value: any, index: any) => {
                    return (
                      <motion.div
                        key={index}
                        className="p-4 xl:p-6 border border-cyan-500/20 rounded-lg flex flex-col gap-5 items-center justify-between bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg hover:border-cyan-400/50 transition-all duration-300"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                            <span className="text-cyan-400 text-2xl">
                              {value?.name === "HTML" && "🟧"}
                              {value?.name === "CSS" && "🟦"}
                              {value?.name === "JavaScript" && "🟨"}
                              {value?.name === "Python" && "🐍"}
                              {value?.name === "Django" && "🎯"}
                              {value?.name === "MySQL" && "🗄️"}
                              {value?.name === "Linux" && "🐧"}
                              {value?.name === "Networking" && "🌐"}
                              {value?.name === "Cybersecurity" && "🔒"}
                              {value?.name === "AWS" && "☁️"}
                            </span>
                          </div>
                          <p className="text-white font-normal text-center">{value?.name}</p>
                        </div>
                        <div className="flex gap-1 w-full">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`h-2 flex-1 rounded-full ${
                                i < value?.rating ? "bg-cyan-400" : "bg-gray-600"
                              }`}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                              viewport={{ once: true }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Soft Skills */}
                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-cyan-400 text-2xl font-semibold mb-6">Soft Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Communication", "Analytical Thinking", "Teamwork", "Adaptability", "Quick Learning"].map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 px-4 py-2 rounded-full border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
