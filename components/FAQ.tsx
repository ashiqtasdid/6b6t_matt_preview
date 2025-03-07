"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react"; // Fixed import
import {
  FaChevronDown,
  FaQuestion,
  FaServer,
  FaCalendarAlt,
  FaTerminal,
  FaUsers,
  FaGamepad,
  FaHdd,
  FaUserFriends,
  FaBell,
} from "react-icons/fa";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
  icon: React.ReactNode;
}

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FaqItem[] = [
    {
      question: "What is 6b6t?",
      answer: (
        <p>
          6b6t is a Minecraft anarchy server where players can enjoy full
          freedom with no rules. It offers a unique experience with commands
          like{" "}
          <code className="text-[#08CFF9] bg-slate-800/50 px-1.5 py-0.5 rounded">
            /tpa
          </code>{" "}
          and{" "}
          <code className="text-[#08CFF9] bg-slate-800/50 px-1.5 py-0.5 rounded">
            /home
          </code>{" "}
          to make exploration and gameplay smoother. Unlike many other servers,
          6b6t has no queue, so you can join anytime without waiting. Thanks to
          advanced custom technology, developed by 6b6t, the server supports up
          to 1,000 players at once.
        </p>
      ),
      icon: <FaServer />,
    },
    {
      question: "How old is 6b6t?",
      answer: (
        <p>
          6b6t was started on January 16th, 2022. From day one, it had the
          commands{" "}
          <code className="text-[#08CFF9] bg-slate-800/50 px-1.5 py-0.5 rounded">
            /tpa
          </code>{" "}
          and{" "}
          <code className="text-[#08CFF9] bg-slate-800/50 px-1.5 py-0.5 rounded">
            /home
          </code>
          . On the first day 6b6t reached 50 players online.
        </p>
      ),
      icon: <FaCalendarAlt />,
    },
    {
      question: "What commands does 6b6t have?",
      answer: (
        <p>
          6b6t has many commands, but the most frequently used ones are{" "}
          <code className="text-[#08CFF9] bg-slate-800/50 px-1.5 py-0.5 rounded">
            /tpa
          </code>{" "}
          and{" "}
          <code className="text-[#08CFF9] bg-slate-800/50 px-1.5 py-0.5 rounded">
            /home
          </code>
          . You can see the full list of commands on the{" "}
          <Link
            href="/commands"
            className="text-[#08CFF9] hover:text-[#F7EB01] underline"
          >
            commands page
          </Link>
          .
        </p>
      ),
      icon: <FaTerminal />,
    },
    {
      question: "Is 6b6t a 2b2t alternative?",
      answer: (
        <p>
          6b6t isn&apos;t a direct 2b2t alternative because it has its own
          unique features and direction. The administrators make independent
          decisions, such as updating to Minecraft 1.19 a year ahead of 2b2t,
          and the server includes additional gameplay elements, like the
          teleportation commands.
        </p>
      ),
      icon: <FaQuestion />,
    },
    {
      question: "How many players on 6b6t?",
      answer: (
        <p>
          Between 150 and 250 players play at the same time on 6b6t during peak
          times and at minimum 50 players.
        </p>
      ),
      icon: <FaUsers />,
    },
    {
      question: "Is 6b6t cross platform for Java and Bedrock edition?",
      answer: (
        <div>
          <p>
            Yes, 6b6t supports both Minecraft Java edition and Minecraft Bedrock
            edition.
          </p>
          <div className="flex mt-3 space-x-4">
            <div className="bg-slate-800/50 px-3 py-1.5 rounded-md flex items-center">
              <span className="h-2 w-2 rounded-full bg-[#08CFF9] mr-2"></span>
              <span>Java Edition</span>
            </div>
            <div className="bg-slate-800/50 px-3 py-1.5 rounded-md flex items-center">
              <span className="h-2 w-2 rounded-full bg-[#F7EB01] mr-2"></span>
              <span>Bedrock Edition</span>
            </div>
          </div>
        </div>
      ),
      icon: <FaGamepad />,
    },
    {
      question: "How big is 6b6t?",
      answer: (
        <div>
          <p className="mb-2">6b6t is over 20TB.</p>
          <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700 mt-2">
            <div className="h-3 rounded-full bg-slate-700/70 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#08CFF9] to-[#F7EB01] w-[80%]"></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-400">
              <span>0 TB</span>
              <span>20+ TB</span>
              <span>25 TB</span>
            </div>
          </div>
        </div>
      ),
      icon: <FaHdd />,
    },
    {
      question: "How many unique players joined 6b6t?",
      answer: (
        <div>
          <p>Over 500,000 unique players joined 6b6t since the start.</p>
          <div className="flex items-center justify-center bg-slate-800/50 rounded-lg p-4 border border-slate-700 mt-3">
            <span className="text-3xl font-bold text-[#08CFF9]">500,000+</span>
            <FaUserFriends className="ml-3 text-2xl text-[#F7EB01]" />
          </div>
        </div>
      ),
      icon: <FaUserFriends />,
    },
    {
      question: "Where can I learn about 6b6t updates?",
      answer: (
        <p>
          The best place to learn about the changes and new features on 6b6t is
          in the official{" "}
          <Link
            href="https://discord.gg/6b6t"
            className="text-[#08CFF9] hover:text-[#F7EB01] underline"
          >
            6b6t Discord
          </Link>
          .
        </p>
      ),
      icon: <FaBell />,
    },
  ];

  const itemVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" },
  };

  return (
    <div className="bg-[#211F22] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Frequently Asked <span className="text-[#08CFF9]">Questions</span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about the 6b6t Minecraft anarchy server
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className={`border ${
                activeIndex === index
                  ? "border-[#08CFF9] bg-slate-800/30"
                  : "border-slate-700 bg-slate-800/20"
              } rounded-lg overflow-hidden transition-colors duration-200`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center">
                  <span
                    className={`text-lg mr-3 ${
                      activeIndex === index
                        ? "text-[#F7EB01]"
                        : "text-[#08CFF9]"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="font-medium text-white">
                    {item.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`${
                    activeIndex === index ? "text-[#F7EB01]" : "text-slate-400"
                  }`}
                >
                  <FaChevronDown />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={itemVariants}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-slate-300"
                  >
                    <div className="pt-2 border-t border-slate-700">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-slate-400">
            Still have questions?{" "}
            <Link
              href="https://discord.gg/6b6t"
              className="text-[#08CFF9] hover:text-[#F7EB01] transition-colors"
            >
              Join our Discord
            </Link>{" "}
            for more help
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;