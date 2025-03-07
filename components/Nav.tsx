"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react"; // Fixed import
import {
  FaHome,
  FaBlog,
  FaVoteYea,
  FaChartBar,
  FaTerminal,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaDownload,
} from "react-icons/fa";
import Image from "next/image";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isPlayerCountHovered, setIsPlayerCountHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    setActiveLink(window.location.pathname);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "/", icon: <FaHome /> },
    { title: "Blog", href: "/blog", icon: <FaBlog /> },
    { title: "Vote", href: "/vote", icon: <FaVoteYea /> },
    { title: "Stats", href: "/stats", icon: <FaChartBar /> },
    { title: "Commands", href: "/commands", icon: <FaTerminal /> },
    { title: "Shop", href: "/shop", icon: <FaShoppingCart /> },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#211F22]/95 backdrop-blur-sm border-b border-slate-800 shadow-lg"
          : "bg-[#211F22]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer group">
                {/* Server logo with solid color */}
                <div className="h-9 w-9 bg-[#08CFF9] rounded-md mr-3 flex items-center justify-center text-[#211F22] font-bold shadow-md group-hover:bg-[#F7EB01] transition-all duration-300">
                  <Image src={'/assets/logo.png'} height={60} width={60} alt="logo"/>
                </div>
                <div>
                  <span
                    className={`font-semibold text-xl text-white transition-colors`}
                  >
                    6b
                    <span className="text-[#08CFF9] group-hover:text-[#F7EB01] transition-colors">
                      6t
                    </span>
                  </span>
                  <p className="text-slate-400 text-xs -mt-1 group-hover:text-slate-300 transition-colors">
                    The most popular anarchy server
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {/* Player count indicator */}
              <motion.div
                onMouseEnter={() => setIsPlayerCountHovered(true)}
                onMouseLeave={() => setIsPlayerCountHovered(false)}
                className="relative px-3 py-1.5 mr-2 rounded-md bg-slate-800/40 border border-slate-700 text-xs text-slate-300 cursor-pointer group"
              >
                <div className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-[#08CFF9] mr-2 animate-pulse"></span>
                  <span>128 Players Online</span>
                </div>
                <AnimatePresence>
                  {isPlayerCountHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute top-full mt-2 left-0 bg-[#211F22]/90 border border-slate-700 rounded-md p-3 shadow-lg w-52 z-10 backdrop-blur-sm"
                    >
                      <p className="text-white font-medium border-b border-slate-700 pb-1.5 mb-2">
                        Server Status
                      </p>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-400">Players:</span>
                        <span className="text-white">128/200</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-400">Version:</span>
                        <span className="text-white">1.19.2</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-400">Uptime:</span>
                        <span className="text-white">99.8%</span>
                      </div>
                      <div className="mt-2 pt-1.5 border-t border-slate-700">
                        <span className="text-[#08CFF9] text-xs">
                          Last restart: 2 days ago
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <div className="h-6 border-r border-slate-700 mx-1"></div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.title}
                  custom={i}
                  variants={menuItemVariants}
                  className="relative"
                >
                  <Link href={link.href}>
                    <div
                      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-all duration-200
                        ${
                          activeLink === link.href
                            ? "bg-slate-800/40 text-[#08CFF9] border-slate-700"
                            : "text-slate-300 hover:bg-slate-800/30 hover:text-[#08CFF9]"
                        }`}
                    >
                      {link.icon && (
                        <span className="text-base">{link.icon}</span>
                      )}
                      <span>{link.title}</span>
                    </div>
                  </Link>
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#08CFF9]"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              ))}

              <div className="h-6 border-r border-slate-700 mx-1"></div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 px-4 py-1.5 bg-[#08CFF9] text-[#211F22] text-sm font-medium rounded-md hover:bg-[#F7EB01] shadow-sm hover:shadow transition-all duration-300 flex items-center"
              >
                <FaDownload className="mr-2 text-xs" />
                <span>Play Now</span>
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-[#08CFF9] focus:outline-none p-2 rounded-md hover:bg-slate-800/40 border border-transparent hover:border-slate-700"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#211F22] border-b border-slate-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="px-3 py-2.5 flex items-center bg-slate-800/40 rounded-md mb-1 border border-slate-700">
                <span className="h-2 w-2 rounded-full bg-[#08CFF9] mr-2 animate-pulse"></span>
                <span className="text-slate-300 text-sm">
                  128 Players Online
                </span>
              </div>

              <div className="border-b border-slate-800 my-2"></div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.title}
                  custom={i}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link href={link.href}>
                    <div
                      className={`block px-3 py-2.5 rounded-md text-base font-medium flex items-center space-x-3 transition-colors
                      ${
                        activeLink === link.href
                          ? "bg-slate-800/40 text-[#08CFF9] border border-slate-700"
                          : "text-slate-300 hover:bg-slate-800/30 hover:text-[#08CFF9]"
                      }`}
                    >
                      {link.icon && <span>{link.icon}</span>}
                      <span>{link.title}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
              
              <div className="border-b border-slate-800 my-2"></div>

              <motion.button
                custom={navLinks.length}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                className="w-full mt-2 px-4 py-2.5 bg-[#08CFF9] text-[#211F22] text-base font-medium rounded-md hover:bg-[#F7EB01] border border-slate-700/50 flex items-center justify-center space-x-2"
              >
                <FaDownload />
                <span>Play Now</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;