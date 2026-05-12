"use client";

import { useState } from "react";
import Logo from "../logo";
import { motion } from "framer-motion";

const Header = () => {
    const handleDownloadPDF = () => {
        window.print();
    };
    return (
        <header className="navbar top-0 left-0 z-50 w-full absolute bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
            <div className="container">
                <nav className="py-7">
                    <div className="flex items-center justify-between">
                        <div>
                            <Logo />
                        </div>

                        <motion.button
                            onClick={handleDownloadPDF}
                            className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-4 px-4 sm:px-5 md:px-6 border border-cyan-400 rounded-full group bg-transparent hover:bg-cyan-400 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 text-sm md:text-base font-medium text-cyan-400 group-hover:text-black transition-colors duration-300">
                                Download Resume
                            </span>
                        </motion.button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
