"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaDiscord,
  FaDownload,
  FaChevronDown,
  FaArrowLeft,
  FaArrowRight,
  FaSkull,
  FaFire,
  FaTimes,
  FaJava,
  FaCopy,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const version = "v1.19.2";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showNotification = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const previewImages = [
    "/assets/images/1.png",
    "/assets/images/2.png",
    "/assets/images/3.png",
    "/assets/images/4.png",
    "/assets/images/5.png",
    "/assets/images/6.png",
    "/assets/images/7.png",
    "/assets/images/8.png",
    "/assets/images/9.png",
    "/assets/images/10.png",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === previewImages.length - 1 ? 0 : prev + 1
    );
    setIsAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? previewImages.length - 1 : prev - 1
    );
    setIsAutoplay(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) =>
          prev === previewImages.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoplay, previewImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.4 + i * 0.1, duration: 0.5 },
    }),
  };

  const slideVariants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="relative bg-[#211F22] overflow-hidden min-h-screen">
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#08CFF9]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#F7EB01]/10 rounded-full blur-3xl"></div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 right-4 z-50 flex items-center bg-[#211F22] border border-slate-700 px-4 py-3 rounded-lg shadow-lg"
          >
            <div className="flex-shrink-0 text-[#08CFF9]">
              <FaCheckCircle size={18} />
            </div>
            <div className="ml-3 text-white">{toastMessage}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-5 space-y-8">
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-[#08CFF9] font-semibold text-lg flex items-center">
                ANARCHY SERVER
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                6b6t <span className="text-[#08CFF9]">Minecraft</span>
              </h1>
              <p className="text-slate-300 mt-4 text-lg max-w-lg">
                A true anarchy experience with no rules, no punishments, and no
                queue. Do whatever you want in a world supporting up to 1000
                players simultaneously.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <button 
                className="px-6 py-3 bg-[#08CFF9] hover:bg-[#F7EB01] text-[#211F22] font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
                onClick={() => setIsModalOpen(true)}
              >
                <FaDownload className="mr-2" />
                Play Now
              </button>
              <button className="px-6 py-3 border border-slate-700 hover:border-[#F7EB01] bg-slate-800/40 hover:bg-slate-800/60 text-white font-medium rounded-md transition-all duration-300 flex items-center">
                <FaFire className="mr-2 text-[#F7EB01]" />
                Server Rules: None
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-4 border-t border-slate-800"
            >
              <div className="flex flex-col space-y-3">
                <Link href="https://discord.6b6t.org/">
                  <div className="flex items-center text-slate-300">
                    <FaDiscord className="text-[#08CFF9] mr-2" />
                    <span>Join our Discord community</span>
                  </div>
                </Link>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-slate-800/40 rounded-full text-sm text-slate-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#08CFF9] rounded-full mr-1.5"></span>
                    /tpa
                  </span>
                  <span className="px-3 py-1 bg-slate-800/40 rounded-full text-sm text-slate-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#08CFF9] rounded-full mr-1.5"></span>
                    /home
                  </span>
                  <span className="px-3 py-1 bg-slate-800/40 rounded-full text-sm text-slate-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#F7EB01] rounded-full mr-1.5"></span>
                    No Rules
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 sm:gap-4"
            >
              {[
                { label: "Online Players", value: "627", icon: "👥" },
                { label: "Max Players", value: "1000", icon: "🌍" },
                { label: "Uptime", value: "99.8%", icon: "⚡" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={statVariants}
                  className="bg-slate-800/40 border border-slate-700 rounded-lg p-2 text-center"
                >
                  <div className="text-xl mb-1">{stat.icon}</div>
                  <div className="text-lg font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block lg:col-span-7"
          >
            <div className="relative h-[520px] w-full border-4 border-slate-800 rounded-lg overflow-hidden shadow-xl">
              <div className="relative h-full w-full">
                <motion.div
                  key={currentSlide}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={slideVariants}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={previewImages[currentSlide]}
                    alt={`6b6t Preview ${currentSlide + 1}`}
                    fill
                    className="object-cover"
                    priority={currentSlide === 0}
                  />

                  <div className="absolute top-4 left-4 bg-[#211F22]/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white border border-slate-700">
                    {currentSlide === 0 && "Spawn Area"}
                    {currentSlide === 1 && "Player Battles"}
                    {currentSlide === 2 && "Base Building"}
                    {currentSlide === 3 && "Vast Landscapes"}
                    {currentSlide === 4 && "Nether Highways"}
                    {currentSlide === 5 && "Player Monuments"}
                    {currentSlide === 6 && "Griefed Bases"}
                    {currentSlide === 7 && "The End"}
                    {currentSlide === 8 && "Community Events"}
                    {currentSlide === 9 && "Untouched Wilderness"}
                  </div>
                </motion.div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <button
                  onClick={prevSlide}
                  className="bg-[#211F22]/70 hover:bg-[#211F22] border border-slate-700 rounded-full p-2 text-white transition-all"
                  aria-label="Previous slide"
                >
                  <FaArrowLeft size={16} />
                </button>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 right-4">
                <button
                  onClick={nextSlide}
                  className="bg-[#211F22]/70 hover:bg-[#211F22] border border-slate-700 rounded-full p-2 text-white transition-all"
                  aria-label="Next slide"
                >
                  <FaArrowRight size={16} />
                </button>
              </div>

              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {previewImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      setIsAutoplay(false);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-[#08CFF9] w-4"
                        : "bg-slate-600 hover:bg-slate-500"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="absolute bottom-4 right-4 left-4 bg-[#211F22]/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Server Address</h3>
                    <div className="flex items-center mt-1">
                      <code className="bg-slate-800/40 text-[#08CFF9] px-2 py-1 rounded text-sm">
                        play.6b6t.org
                      </code>
                      <button
                        className="ml-2 text-xs bg-slate-800/40 hover:bg-slate-700/40 text-white px-2 py-1 rounded transition-colors"
                        onClick={() => {
                          navigator.clipboard.writeText("play.6b6t.org");
                          showNotification("Server address copied to clipboard!");
                        }}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-[#08CFF9] mr-2 animate-pulse"></span>
                    <span className="text-slate-300 text-sm">
                      Online • No Queue
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-3 -right-3 bg-[#08CFF9] text-[#211F22] font-bold px-3 py-1 rounded-full text-sm shadow-lg border-2 border-slate-800 z-10">
              {version}
            </div>

            <div className="absolute top-12 -right-2 bg-[#F7EB01] text-[#211F22] font-bold px-3 py-1 rounded-md text-sm shadow-lg border-2 border-slate-800 z-10 transform rotate-12">
              TRUE ANARCHY
            </div>

            <div className="absolute -top-3 -left-3 bg-slate-800/40 text-white px-3 py-1 rounded-full text-xs shadow-lg border-2 border-slate-700 z-10">
              {currentSlide + 1} / {previewImages.length}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-slate-400 text-sm mb-2">Scroll to explore</span>
          <FaChevronDown className="text-[#08CFF9]" />
        </motion.div>
      </div>

      {/* Play Now Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="bg-[#211F22] border-2 border-slate-700 rounded-xl w-full max-w-2xl shadow-2xl overflow-hidden"
              /* eslint-disable  @typescript-eslint/no-explicit-any */
              onClick={(e: { stopPropagation: () => any; }) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-700">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <FaDownload className="mr-3 text-[#08CFF9]" />
                  Join 6b6t Minecraft Server
                </h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                  <h4 className="text-lg font-medium text-white mb-3">Step 1: Have Java Minecraft</h4>
                  <p className="text-slate-300 mb-4">Make sure you have the Java Edition of Minecraft {version} installed.</p>
                  <a 
                    href="https://www.minecraft.net/en-us/download" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-[#08CFF9] hover:text-[#F7EB01] transition-colors"
                  >
                    <FaJava className="mr-2" />
                    Get Minecraft Java Edition
                    <FaExternalLinkAlt className="ml-2 text-sm" />
                  </a>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                  <h4 className="text-lg font-medium text-white mb-3">Step 2: Connect to our server</h4>
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center">
                      <div className="text-slate-300 mr-2 w-28">IP Address:</div>
                      <div className="flex items-center">
                        <code className="bg-slate-800/80 text-[#08CFF9] px-3 py-1 rounded font-mono">
                          play.6b6t.org
                        </code>
                        <button
                          className="ml-2 bg-slate-700/50 hover:bg-slate-700 text-white p-2 rounded transition-colors"
                          onClick={() => {
                            navigator.clipboard.writeText("play.6b6t.org");
                            showNotification("Server address copied to clipboard!");
                          }}
                          aria-label="Copy server address"
                        >
                          <FaCopy size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-slate-300 mr-2 w-28">Version:</div>
                      <code className="bg-slate-800/80 text-[#F7EB01] px-3 py-1 rounded font-mono">
                        {version}
                      </code>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#08CFF9]/10 border border-[#08CFF9]/30 rounded-lg p-4">
                  <div className="flex">
                    <div className="flex-shrink-0 pt-0.5">
                      <div className="h-4 w-4 rounded-full bg-[#08CFF9] animate-pulse"></div>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-[#08CFF9]">Server is online</h4>
                      <p className="text-slate-300 text-sm mt-1">
                        Current players: 627/1000 • No queue • 99.8% uptime
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-6 border-t border-slate-700 flex justify-between items-center">
                <div className="text-slate-400 text-sm flex items-center">
                  <FaSkull className="text-[#F7EB01] mr-2" />
                  Remember: This is a true anarchy server
                </div>
                <button 
                  className="px-5 py-2 bg-[#08CFF9] hover:bg-[#F7EB01] text-[#211F22] font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsModalOpen(false)}
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;