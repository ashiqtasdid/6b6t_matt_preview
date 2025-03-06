"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  FaDiscord,
  FaDownload,
  FaChevronDown,
  FaArrowLeft,
  FaArrowRight,
  FaSkull,
  FaFire,
} from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  // State for slideshow
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Server preview images
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

  // Handle slide navigation
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

  // Autoplay slideshow
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

  // Animation variants
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
    <div className="relative bg-slate-900 overflow-hidden min-h-screen">
      {/* Background with overlay */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/bg.jpg" // Replace with an anarchy-themed background
          alt="6b6t Anarchy Server"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900"></div>
      </div> */}

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#08CFF9]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#F7EB01]/10 rounded-full blur-3xl"></div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Left column - Text content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-[#08CFF9] font-semibold text-lg flex items-center">
                <FaSkull className="mr-2 text-[#F7EB01]" /> 
                ANARCHY SERVER
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                6b6t <span className="text-[#08CFF9]">Minecraft</span>
              </h1>
              <p className="text-slate-300 mt-4 text-lg max-w-lg">
                A true anarchy experience with no rules, no punishments, and no queue. 
                Do whatever you want in a world supporting up to 1000 players simultaneously.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <button className="px-6 py-3 bg-[#08CFF9] hover:bg-[#F7EB01] text-slate-900 font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center">
                <FaDownload className="mr-2" />
                Play Now
              </button>
              <button className="px-6 py-3 border border-slate-700 hover:border-[#F7EB01] bg-slate-800/50 hover:bg-slate-800 text-white font-medium rounded-md transition-all duration-300 flex items-center">
                <FaFire className="mr-2 text-[#F7EB01]" />
                Server Rules: None
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-4 border-t border-slate-800"
            >
              <div className="flex flex-col space-y-3">
                <div className="flex items-center text-slate-300">
                  <FaDiscord className="text-[#08CFF9] mr-2" />
                  <span>Join our Discord community</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#08CFF9] rounded-full mr-1.5"></span>
                    /tpa
                  </span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#08CFF9] rounded-full mr-1.5"></span>
                    /home
                  </span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#F7EB01] rounded-full mr-1.5"></span>
                    No Rules
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Server stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 sm:gap-6"
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
                  className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-center"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Server preview slideshow */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            <div className="relative h-[500px] w-full border-4 border-slate-800 rounded-lg overflow-hidden shadow-xl">
              {/* Slideshow */}
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

                  {/* Caption for each slide */}
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white border border-slate-700">
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

              {/* Navigation controls */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <button
                  onClick={prevSlide}
                  className="bg-slate-900/70 hover:bg-slate-900 border border-slate-700 rounded-full p-2 text-white transition-all"
                  aria-label="Previous slide"
                >
                  <FaArrowLeft size={16} />
                </button>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 right-4">
                <button
                  onClick={nextSlide}
                  className="bg-slate-900/70 hover:bg-slate-900 border border-slate-700 rounded-full p-2 text-white transition-all"
                  aria-label="Next slide"
                >
                  <FaArrowRight size={16} />
                </button>
              </div>

              {/* Slide indicators */}
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

              {/* Floating server info card */}
              <div className="absolute bottom-4 right-4 left-4 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Server Address</h3>
                    <div className="flex items-center mt-1">
                      <code className="bg-slate-800 text-[#08CFF9] px-2 py-1 rounded text-sm">
                        play.6b6t.org
                      </code>
                      <button
                        className="ml-2 text-xs bg-slate-800 hover:bg-slate-700 text-white px-2 py-1 rounded transition-colors"
                        onClick={() => {
                          navigator.clipboard.writeText("play.6b6t.org");
                          alert("Server address copied to clipboard!");
                        }}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-[#08CFF9] mr-2 animate-pulse"></span>
                    <span className="text-slate-300 text-sm">Online • No Queue</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Version badge */}
            <div className="absolute -top-3 -right-3 bg-[#08CFF9] text-slate-900 font-bold px-3 py-1 rounded-full text-sm shadow-lg border-2 border-slate-800 z-10">
              v1.19.2
            </div>

            {/* Anarchy badge */}
            <div className="absolute top-12 -right-2 bg-[#F7EB01] text-slate-900 font-bold px-3 py-1 rounded-md text-sm shadow-lg border-2 border-slate-800 z-10 transform rotate-12">
              TRUE ANARCHY
            </div>

            {/* Slideshow counter */}
            <div className="absolute -top-3 -left-3 bg-slate-800 text-white px-3 py-1 rounded-full text-xs shadow-lg border-2 border-slate-700 z-10">
              {currentSlide + 1} / {previewImages.length}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-slate-400 text-sm mb-2">Scroll to explore</span>
          <FaChevronDown className="text-[#08CFF9]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;