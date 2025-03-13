"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  FaUsers,
  FaDiscord,
  FaGamepad,
  FaServer,
  FaHome,
  FaRocket,
  FaHatWizard,
  FaBalanceScale,
} from "react-icons/fa";

const ServerFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <FaUsers className="text-[#08CFF9]" />,
      title: "Massive Community",
      description:
        "Join our thriving server with support for up to 1000 player slots, all running on premium hardware.",
      image: "/assets/images/1.png",
      stats: [
        { value: "1000", label: "Player Slots" },
        { value: "24/7", label: "Uptime" },
        { value: "Global", label: "Players" },
      ],
    },
    {
      icon: <FaDiscord className="text-[#F7EB01]" />,
      title: "Active Support",
      description:
        "Our dedicated admin team provides constant support through our active Discord community.",
      image: "/assets/images/6.png",
      stats: [
        { value: "10K+", label: "Discord Members" },
        { value: "24/7", label: "Support" },
        { value: "Active", label: "Staff Team" },
      ],
    },
    {
      icon: <FaGamepad className="text-[#08CFF9]" />,
      title: "Universal Access",
      description:
        "Play on Java Edition, Bedrock Edition, or with cracked accounts - everyone is welcome on 6b6t.",
      image: "/assets/images/3.png",
      stats: [
        { value: "Java", label: "Edition" },
        { value: "Bedrock", label: "Edition" },
        { value: "Cracked", label: "Support" },
      ],
    },
  ];

  const gameplayFeatures = [
    {
      icon: <FaHome className="text-[#F7EB01]" />,
      title: "Essential Commands",
      description:
        "Enjoy convenient access to essential commands like /tpa and /home while maintaining anarchy gameplay.",
      image: "/assets/images/4.png",
      details: [
        "/home - Set multiple home locations",
        "/tpa - Teleport to other players",
        "/back - Return to previous location",
      ],
    },
    {
      icon: <FaRocket className="text-[#08CFF9]" />,
      title: "Latest Minecraft Version",
      description:
        "We stay up-to-date with the newest Minecraft releases and frequently add exciting new features.",
      image: "/assets/images/7.png",
      details: [
        "Regular version updates",
        "Custom game mechanics",
        "Community-requested features",
      ],
    },
    {
      icon: <FaHatWizard className="text-[#F7EB01]" />,
      title: "Non P2W Cosmetics",
      description:
        "Thank our supporters with fun cosmetic options like /balloons, /hat, colored names and custom prefixes.",
      image: "/assets/images/9.png",
      details: [
        "Colored chat names",
        "Custom prefixes",
        "Visual effects & cosmetics",
      ],
    },
  ];

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

  return (
    <div className="relative bg-[#211F22] py-20 overflow-hidden">
      <div className="absolute top-10 right-20 w-60 h-60 bg-[#08CFF9]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#F7EB01]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Server Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-[#08CFF9] font-semibold text-lg flex items-center justify-center"
          >
            <FaServer className="mr-2 text-[#F7EB01]" />
            SERVER FEATURES
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-white mt-2"
          >
            Why play on <span className="text-[#08CFF9]">6b6t</span>?
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-slate-300 max-w-2xl mx-auto"
          >
            Our server offers a unique Minecraft experience with cutting-edge
            performance and true anarchy gameplay.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Game<span className="text-[#08CFF9]">play</span> Features
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-6">
              {gameplayFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className={`p-5 rounded-lg transition-all cursor-pointer border ${
                    activeFeature === index
                      ? "bg-slate-800/70 border-[#08CFF9]"
                      : "bg-slate-800/20 border-slate-700 hover:bg-slate-800/30"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start">
                    <div
                      className={`p-3 rounded-lg ${
                        activeFeature === index
                          ? "bg-[#211F22]"
                          : "bg-slate-800/30"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-slate-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <div className="relative h-[400px] sm:h-[500px] border-4 border-slate-800 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={gameplayFeatures[activeFeature].image}
                  alt={gameplayFeatures[activeFeature].title}
                  fill
                  className="object-cover transition-all duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#211F22] via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4 bg-[#211F22]/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white border border-slate-700 flex items-center">
                  {gameplayFeatures[activeFeature].icon}
                  <span className="ml-2">
                    {gameplayFeatures[activeFeature].title}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-[#211F22]/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                    <h4 className="text-[#08CFF9] font-semibold mb-3 flex items-center">
                      <FaBalanceScale className="mr-2 text-[#F7EB01]" />
                      Feature Highlights
                    </h4>
                    <ul className="space-y-2">
                      {gameplayFeatures[activeFeature].details.map(
                        (detail, i) => (
                          <li
                            key={i}
                            className="flex items-center text-slate-300"
                          >
                            <span className="h-1.5 w-1.5 bg-[#08CFF9] rounded-full mr-2"></span>
                            {detail}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>

             
            </motion.div>
          </div>
        </motion.div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-slate-800/30 border border-slate-700 rounded-lg overflow-hidden shadow-lg hover:border-[#08CFF9] transition-all"
            >
              <div className="h-48 relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211F22] via-transparent to-transparent"></div>
              </div>

              <div className="p-6 relative">
                <div className="absolute -top-10 left-6 bg-[#211F22] border-2 border-slate-700 p-3 rounded-lg">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-white mt-3">
                  {feature.title}
                </h3>
                <p className="mt-2 text-slate-300 text-sm mb-4">
                  {feature.description}
                </p>

                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-700">
                  {feature.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-bold text-[#08CFF9]">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gameplay Features Section */}
      </div>
    </div>
  );
};

export default ServerFeatures;
