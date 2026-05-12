"use client";
import { motion } from "framer-motion";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ExperienceSec = () => {
  const [workData, setWorkData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching work data:", error);
      }
    };

    fetchData();
  }, []);

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
            <h2 className="text-white">Projects</h2>
            <p className="text-xl text-cyan-400">( 02 )</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-6 xl:gap-y-12">
            {workData?.map((value: any, index: any) => (
              <motion.div
                key={index}
                className="group flex flex-col gap-3 xl:gap-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-cyan-500/20 shadow-2xl hover:border-cyan-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={getImgPath(value?.image || "/images/work/work-img-1.jpg")}
                    alt={value?.title || "Project image"}
                    width={1200}
                    height={640}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <motion.div
                    className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-center">
                      <svg className="w-12 h-12 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <p className="text-white font-semibold">View Details</p>
                    </div>
                  </motion.div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <Link href={`#`} className="text-white hover:text-cyan-400 transition-colors">
                      <h5 className="text-xl font-semibold">{value?.title}</h5>
                    </Link>
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-cyan-400 font-medium">Client: {value?.client}</p>
                  <p className="text-gray-300 leading-relaxed">{value?.description}</p>

                  {/* Project highlights */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Security Assessment", "Vulnerability Testing", "Penetration Testing", "Web Security"].map((tech) => (
                      <span
                        key={tech}
                        className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;