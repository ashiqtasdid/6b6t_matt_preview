"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  FaVoteYea,
  FaTrophy,
  FaGift,
  FaCoins,
  FaCalendarAlt,
  FaAngleRight,
  FaFireAlt,
  FaCrown,
  FaHome,
  FaRunning,
  FaUser,
  FaFont,
  FaChair,
  FaInfoCircle,
} from "react-icons/fa";

const VoteSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("voting");

  const voteLinks = [
    {
      number: 1,
      name: "Planet Minecraft",
      url: "https://planetminecraft.com/vote/example",
      frequency: "Daily",
      featured: false,
    },
    {
      number: 2,
      name: "Minecraft Buzz",
      url: "https://minecraftbuzz.com/vote/example",
      frequency: "Daily",
      featured: false,
    },
    {
      number: 3,
      name: "Minecraft MP",
      url: "https://minecraft-mp.com/vote/example",
      frequency: "Daily",
      featured: false,
    },
    {
      number: 4,
      name: "MCLike",
      url: "https://mclike.com/vote/example",
      frequency: "Daily",
      featured: false,
    },
    {
      number: 5,
      name: "Best Minecraft Servers",
      url: "https://bestminecraftservers.com/vote/example",
      frequency: "Daily",
      featured: false,
    },
    {
      number: 6,
      name: "Top Minecraft Servers",
      url: "https://topminecraftservers.com/vote/example",
      frequency: "Daily",
      featured: false,
    },
    {
      number: 7,
      name: "Minecraft Servers",
      url: "https://minecraftservers.org/vote/example",
      frequency: "Daily",
      featured: false,
    },
  ];

  // Vote milestones and rewards
  const voteMilestones = [
    {
      votes: 7,
      description: "First day of voting",
      rewards: [{ icon: <FaHome />, text: "3 homes (/sethome)" }],
    },
    {
      votes: 21,
      description: "Three days of voting",
      rewards: [
        { icon: <FaUser />, text: "Access to /skin command" },
        { icon: <FaRunning />, text: "300s /home cooldown" },
        { icon: <FaRunning />, text: "420s /tpa cooldown" },
      ],
    },
    {
      votes: 49,
      description: "One week of voting",
      rewards: [
        { icon: <FaHome />, text: "4 homes (/sethome)" },
        { icon: <FaRunning />, text: "90s /home cooldown" },
        { icon: <FaRunning />, text: "120s /tpa cooldown" },
      ],
    },
    {
      votes: 210,
      description: "One month of voting",
      rewards: [
        { icon: <FaChair />, text: "Access to /sit command" },
        { icon: <FaHome />, text: "5 homes (/sethome)" },
        { icon: <FaRunning />, text: "15s /home cooldown" },
        { icon: <FaRunning />, text: "30s /tpa cooldown" },
      ],
    },
    {
      votes: 630,
      description: "90 days of voting",
      rewards: [{ icon: <FaFont />, text: "White username" }],
    },
  ];

  //   const dailyVoteRewards = [
  //     "1× Vote Token per vote",
  //     "5× Vote Tokens for all 7 votes",
  //     "1× Random Loot Box for 3+ votes"
  //   ];

  return (
    <div className="bg-[#211F22] py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-[#F7EB01]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-60 h-60 bg-[#08CFF9]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#F7EB01]/5 rounded-full blur-2xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#F7EB01] font-semibold text-lg flex items-center justify-center">
            <FaVoteYea className="mr-2" /> SUPPORT THE SERVER
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Vote for <span className="text-[#08CFF9]">6b6t</span> and Get
            Rewards
          </h3>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Help us grow by voting daily on these Minecraft server lists. Each
            vote helps our server rank higher and rewards you with special
            in-game perks.
          </p>
        </motion.div>

        {/* Tabs navigation */}
        <div className="flex justify-center mb-8">
  <div className="inline-flex bg-slate-800/40 rounded-lg p-1">
    <button
      onClick={() => setActiveTab("voting")}
      className={`px-4 py-2 rounded-md text-sm font-medium ${
        activeTab === "voting"
          ? "bg-[#08CFF9] text-[#211F22]"
          : "text-white hover:bg-slate-700/40"
      } transition-colors`}
    >
      <FaVoteYea className="inline mr-2" /> Voting Sites
    </button>
    <button
      onClick={() => setActiveTab("rewards")}
      className={`px-5 py-2 rounded-md text-sm font-medium relative ${
        activeTab === "rewards"
          ? "bg-[#F7EB01] text-[#211F22] shadow-lg shadow-[#F7EB01]/20"
          : "bg-gradient-to-r from-[#F7EB01]/20 to-[#F7EB01]/40 text-white hover:from-[#F7EB01]/30 hover:to-[#F7EB01]/50 border border-[#F7EB01]/30"
      } transition-all ml-1`}
    >
      <FaGift className="inline mr-2" /> Reward Tiers
      {activeTab !== "rewards" && (
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F7EB01] opacity-40"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F7EB01]"></span>
        </span>
      )}
    </button>
  </div>
</div>

        {/* Voting Sites Tab */}
        {activeTab === "voting" && (
          <>
            {/* Daily rewards preview card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-8 bg-gradient-to-r from-[#08CFF9]/20 to-[#F7EB01]/10 rounded-lg p-4 border border-slate-700"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="bg-[#211F22]/50 p-3 rounded-lg mb-4 md:mb-0 md:mr-6">
                  <FaGift className="text-[#F7EB01] text-3xl" />
                </div>
                <div>
                  <h4 className="text-white font-medium">
                    How to check your votes
                  </h4>
                  <p className="text-slate-300 mt-2">
                    Simply run the command{" "}
                    <code className="bg-slate-800/80 px-2 py-0.5 rounded text-[#08CFF9]">
                      /vote
                    </code>{" "}
                    on 6b6t to see your current vote count.
                  </p>
                  <p className="text-slate-300 mt-1">
                    Vote on all 7 sites daily (7 votes per day = 49 per week =
                    210 per month).
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Voting sites grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {voteLinks.map((site, index) => (
                <motion.div
                  key={site.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`bg-slate-800/40 border ${
                      hoveredIndex === index
                        ? "border-[#08CFF9]"
                        : site.featured
                        ? "border-[#F7EB01]/50"
                        : "border-slate-700"
                    } rounded-lg overflow-hidden transition-all duration-300 h-full ${
                      site.featured ? "shadow-md shadow-[#F7EB01]/10" : ""
                    }`}
                  >
                    {site.featured && (
                      <div className="absolute -right-1 -top-1">
                        <span className="bg-[#F7EB01] text-[#211F22] text-xs font-bold px-2 py-1 rounded-bl-md rounded-tr-md shadow-lg">
                          <FaFireAlt className="inline-block mr-1" /> FEATURED
                        </span>
                      </div>
                    )}

                    <div className="flex items-center p-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 ${
                          site.featured ? "bg-[#F7EB01]/20" : "bg-[#08CFF9]/10"
                        } rounded-full flex items-center justify-center mr-4`}
                      >
                        <span
                          className={`${
                            site.featured ? "text-[#F7EB01]" : "text-[#08CFF9]"
                          } font-bold text-xl`}
                        >
                          {site.number}
                        </span>
                      </div>

                      <div className="flex-grow">
                        <h4 className="text-white font-medium mb-1">
                          {site.name}
                        </h4>
                        <div className="flex items-center text-xs text-slate-400">
                          <FaCalendarAlt className="mr-2" /> {site.frequency}{" "}
                          Voting
                        </div>
                      </div>

                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-shrink-0 px-4 py-2 rounded-md transition-colors ${
                          hoveredIndex === index
                            ? site.featured
                              ? "bg-[#F7EB01] text-[#211F22]"
                              : "bg-[#08CFF9] text-[#211F22]"
                            : "bg-slate-800/60 text-white"
                        }`}
                      >
                        <span className="flex items-center whitespace-nowrap">
                          Click to vote{" "}
                          {hoveredIndex === index && (
                            <FaAngleRight className="ml-1" />
                          )}
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Rewards Tab */}
        {activeTab === "rewards" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 bg-slate-800/20 border border-slate-700 rounded-lg p-6">
              <h4 className="text-lg font-medium text-white mb-4 flex items-center">
                <FaInfoCircle className="text-[#08CFF9] mr-2" /> Types of
                Rewards on 6b6t
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center mb-2">
                    <div className="bg-[#08CFF9]/20 p-2 rounded-md mr-3">
                      <FaHome className="text-[#08CFF9]" />
                    </div>
                    <h5 className="font-medium text-white">More Homes</h5>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Get up to 5 homes by voting. By default, you have 2 homes
                    (one when joining, second with netherite armor).
                  </p>
                </div>

                <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center mb-2">
                    <div className="bg-[#08CFF9]/20 p-2 rounded-md mr-3">
                      <FaRunning className="text-[#08CFF9]" />
                    </div>
                    <h5 className="font-medium text-white">Lower Cooldowns</h5>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Enjoy reduced cooldowns on /tpa and /home commands, matching
                    those of Apex rank players.
                  </p>
                </div>

                <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center mb-2">
                    <div className="bg-[#08CFF9]/20 p-2 rounded-md mr-3">
                      <FaUser className="text-[#08CFF9]" />
                    </div>
                    <h5 className="font-medium text-white">/skin Command</h5>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Change your skin using{" "}
                    <code className="bg-slate-800/80 px-1 rounded text-[#08CFF9]">
                      /skin &lt;username&gt;
                    </code>
                    . Look like anyone you want!
                  </p>
                </div>

                <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center mb-2">
                    <div className="bg-[#08CFF9]/20 p-2 rounded-md mr-3">
                      <FaFont className="text-[#08CFF9]" />
                    </div>
                    <h5 className="font-medium text-white">White Username</h5>
                  </div>
                  <p className="text-slate-300 text-sm">
                    After 90 days of voting, get a white username, similar to
                    colored names available to paid ranks.
                  </p>
                </div>
              </div>
            </div>

            {/* Voting milestone rewards */}
            <div className="relative mt-10 pb-4">
              <div className="absolute left-6 top-0 bottom-6 w-1 bg-slate-700"></div>

              {voteMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.votes}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 mb-8"
                >
                  <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#08CFF9] border-4 border-[#211F22] z-10 shadow-lg"></div>

                  <div
                    className={`bg-slate-800/40 border ${
                      index === voteMilestones.length - 1
                        ? "border-[#F7EB01]/50"
                        : "border-slate-700"
                    } rounded-lg p-5`}
                  >
                    <div className="flex items-center mb-3">
                      <div className="bg-[#08CFF9]/20 p-2 rounded-md mr-3">
                        <span className="text-[#08CFF9] font-bold">
                          {milestone.votes}
                        </span>
                      </div>
                      <div>
                        <h5 className="font-medium text-white text-lg">
                          {milestone.votes} Votes
                        </h5>
                        <p className="text-slate-400 text-xs">
                          {milestone.description}
                        </p>
                      </div>
                      {index === voteMilestones.length - 1 && (
                        <span className="ml-auto bg-[#F7EB01]/20 text-[#F7EB01] text-xs px-2 py-1 rounded-full">
                          Ultimate Reward
                        </span>
                      )}
                    </div>

                    <div className="pl-3 border-l-2 border-slate-700">
                      {milestone.rewards.map((reward, rewardIndex) => (
                        <div
                          key={rewardIndex}
                          className="flex items-center py-2"
                        >
                          <div className="text-[#08CFF9] mr-3">
                            {reward.icon}
                          </div>
                          <span className="text-slate-300">{reward.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Top voters rewards section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-slate-800/30 border border-slate-700 p-6 rounded-lg"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div className="flex items-center mb-6 lg:mb-0">
              <div className="text-[#F7EB01] mr-4">
                <FaCrown size={32} />
              </div>
              <div>
                <h4 className="text-white font-medium">Monthly Top Voters</h4>
                <p className="text-slate-300 text-sm">
                  Vote every day on all sites to earn amazing rewards
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
              <div className="bg-slate-800/60 px-4 py-3 rounded-md border border-[#F7EB01]/30 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-xs uppercase text-slate-400 flex items-center">
                  <FaTrophy className="text-[#F7EB01] mr-1" /> 1st Place
                </div>
                <div className="text-[#F7EB01] flex items-center font-medium">
                  <FaCoins className="mr-1" /> Donator Rank (30 days)
                </div>
              </div>
              <div className="bg-slate-800/60 px-4 py-3 rounded-md border border-slate-700 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-xs uppercase text-slate-400 flex items-center">
                  <FaTrophy className="text-[#08CFF9] mr-1" /> 2nd Place
                </div>
                <div className="text-white flex items-center">
                  <FaGift className="mr-1" /> 5× Diamond Kits
                </div>
              </div>
              <div className="bg-slate-800/60 px-4 py-3 rounded-md border border-slate-700 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-xs uppercase text-slate-400 flex items-center">
                  <FaTrophy className="text-cyan-600 mr-1" /> 3rd Place
                </div>
                <div className="text-white flex items-center">
                  <FaGift className="mr-1" /> 3× Diamond Kits
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-slate-400 text-sm px-4 py-2 bg-slate-800/20 rounded-md inline-block border border-slate-700/50">
            Vote on all sites daily for maximum rewards. You need to be online
            to receive rewards.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default VoteSection;
