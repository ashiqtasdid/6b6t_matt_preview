'use client'
import React, { useState } from "react";
import { FaSearch, FaStar, FaLock } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

type RankType = "Free" | "Prime" | "Ultra" | "Elite" | "Apex";

interface CommandType {
  name: string;
  description: string;
  example: string;
  ranks: RankType[];
}

const Commands = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const commands: CommandType[] = [
    {
      name: "/msg, /whisper, /w",
      description: "Send a private message to any online player",
      example: "/msg Pistonmaster How are you?",
      ranks: ["Free"]
    },
    {
      name: "/reply, /r",
      description: "Send a private message to the last person who sent you a private message",
      example: "/reply Amazing",
      ranks: ["Free"]
    },
    {
      name: "/last, /l",
      description: "Send a private message to the last person you sent a message to. Otherwise has /reply behaviour.",
      example: "/last That's cool",
      ranks: ["Free"]
    },
    {
      name: "/kill, /suicide",
      description: "Kills you in-game if you are alive.",
      example: "/kill",
      ranks: ["Free"]
    },
    {
      name: "/ignore",
      description: "Ignores/blocks another player permanently. (Hides their messages in chat)",
      example: "/ignore qbasty",
      ranks: ["Free"]
    },
    {
      name: "/ignorelist",
      description: "Get a list of everyone who you ignored.",
      example: "/ignorelist",
      ranks: ["Free"]
    },
    {
      name: "/pvpmode",
      description: "Show/hide messages that you get into PvP mode.",
      example: "/pvpmode",
      ranks: ["Free"]
    },
    {
      name: "/togglewhispering",
      description: "Show/hide all private messages from chat.",
      example: "/togglewhispering",
      ranks: ["Free"]
    },
    {
      name: "/togglechat",
      description: "Show/hide all global messages from chat.",
      example: "/togglechat",
      ranks: ["Free"]
    },
    {
      name: "/groupchat, /gc",
      description: "Talk privately in a groupchat with multiple people.",
      example: "/groupchat help",
      ranks: ["Free"]
    },
    {
      name: "/connectionmsgs",
      description: "Show/hide chat messages of people joining the server.",
      example: "/connectionmsgs",
      ranks: ["Free"]
    },
    {
      name: "/connectionmsgs color",
      description: "Change the color of connection messages in your chat.",
      example: "/connectionmsgs color",
      ranks: ["Prime", "Elite", "Apex"]
    },
    {
      name: "/deathmsgs",
      description: "Show/hide chat messages of people dying.",
      example: "/deathmsgs",
      ranks: ["Free"]
    },
    {
      name: "/deathmsgs color",
      description: "Change the color of death messages in your chat.",
      example: "/deathmsgs color",
      ranks: ["Prime", "Elite", "Apex"]
    },
    {
      name: "/sethome",
      description: "Creates a new home at your current location.",
      example: "/sethome base",
      ranks: ["Free"]
    },
    {
      name: "/home",
      description: "Teleport to a home.",
      example: "/home base",
      ranks: ["Free"]
    },
    {
      name: "/homes, /homelist",
      description: "Lists all your homes.",
      example: "/homes",
      ranks: ["Free"]
    },
    {
      name: "/delhome",
      description: "Deletes a home.",
      example: "/delhome base",
      ranks: ["Free"]
    },
    {
      name: "/tpa",
      description: "Request to teleport to another player.",
      example: "/tpa rajrajrajrajraj",
      ranks: ["Free"]
    },
    {
      name: "/tptoggle, /tpt",
      description: "Hides teleport requests from all players.",
      example: "/tptoggle",
      ranks: ["Free"]
    },
    {
      name: "/tpy",
      description: "Accept a tpa request.",
      example: "/tpy rajrajrajrajraj",
      ranks: ["Free"]
    },
    {
      name: "/tpn",
      description: "Decline a tpa request.",
      example: "/tpn rajrajrajrajraj",
      ranks: ["Free"]
    },
    {
      name: "/tps",
      description: "Show info about server performance.",
      example: "/tps",
      ranks: ["Free"]
    },
    {
      name: "/hat",
      description: "Wear a hat on your head.",
      example: "/hat",
      ranks: ["Prime", "Elite", "Apex"]
    },
    {
      name: "/hotspot",
      description: "Teleport to the global hostspot.",
      example: "/hotspot",
      ranks: ["Free"]
    },
    {
      name: "/hotspot create",
      description: "Create a new hotspot at your current location.",
      example: "/hotspot create",
      ranks: ["Elite", "Apex"]
    },
    {
      name: "/buildermode",
      description: "Increase your view distance temporarily for building.",
      example: "/buildermode",
      ranks: ["Prime", "Ultra", "Elite", "Apex"]
    },
    {
      name: "/stats",
      description: "Get a link to the 6b6t stats webpage.",
      example: "/stats",
      ranks: ["Free"]
    },
    {
      name: "/balloons",
      description: "Put a cosmetic balloon in your hand.",
      example: "/balloons",
      ranks: ["Prime", "Ultra", "Elite", "Apex"]
    },
    {
      name: "/sit",
      description: "Sit on any block to rest.",
      example: "/sit",
      ranks: ["Prime", "Ultra", "Elite", "Apex"]
    },
    {
      name: "/skin",
      description: "Change your in-game skin to any Minecraft players skin or use an URL.",
      example: "/skin Pistonmaster",
      ranks: ["Prime", "Elite", "Apex"]
    },
    {
      name: "/freecam",
      description: "Vanilla hacking",
      example: "/freecam",
      ranks: ["Free"]
    },
    {
      name: "/shop, /buy",
      description: "Get a link to the official 6b6t Shop.",
      example: "/shop",
      ranks: ["Free"]
    },
    {
      name: "/vote",
      description: "Shows the vote count and instructions to vote.",
      example: "/vote",
      ranks: ["Free"]
    },
    {
      name: "/discord",
      description: "Get a invite to the 6b6t Discord Server.",
      example: "/discord",
      ranks: ["Free"]
    },
    {
      name: "/website",
      description: "Get a link to the 6b6t Website.",
      example: "/website",
      ranks: ["Free"]
    },
    {
      name: "/help",
      description: "Get a link to the this webpage.",
      example: "/help",
      ranks: ["Free"]
    }
  ];

  const filteredCommands = commands.filter(command =>
    command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    command.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const tableRowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.05 * i,
        duration: 0.3,
      }
    }),
  };

  const renderRankBadges = (ranks: RankType[]) => {
    if (ranks.includes("Free")) {
      return <span className="bg-slate-700/60 text-xs px-2 py-0.5 rounded-full text-slate-300">Free</span>;
    }

    return (
      <div className="flex flex-wrap gap-1">
        {ranks.map(rank => {
          let bgColor = "";
          let textColor = "";

          switch (rank) {
            case "Prime":
              bgColor = "bg-blue-700/30";
              textColor = "text-blue-300";
              break;
            case "Ultra":
              bgColor = "bg-purple-700/30";
              textColor = "text-purple-300";
              break;
            case "Elite":
              bgColor = "bg-yellow-700/30";
              textColor = "text-yellow-300";
              break;
            case "Apex":
              bgColor = "bg-red-700/30";
              textColor = "text-red-300";
              break;
            default:
              bgColor = "bg-slate-700/60";
              textColor = "text-slate-300";
          }

          return (
            <span 
              key={rank} 
              className={`${bgColor} ${textColor} text-xs px-2 py-0.5 rounded-full flex items-center`}
            >
              <FaStar className="mr-1 text-[0.6rem]" /> {rank}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-[#211F22] py-20 relative overflow-hidden">
      <div className="absolute top-40 left-20 w-60 h-60 bg-[#F7EB01]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-[#08CFF9]/10 rounded-full blur-3xl"></div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-[#08CFF9] text-lg font-semibold mb-3">COMMANDS LIST</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Available Server Commands</h3>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Use these commands to enhance your anarchy experience. Some commands require a premium rank to use.
            Check out our shop to upgrade your experience.
          </p>
        </motion.div>

        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaSearch className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search commands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/40 border border-slate-700 pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#08CFF9] text-white"
            />
          </div>
        </motion.div>

        <motion.div 
          className="bg-slate-800/20 border border-slate-700 rounded-xl overflow-hidden shadow-lg"
          variants={itemVariants}
        >
          <div className="grid grid-cols-12 text-slate-300 px-6 py-4 font-medium border-b border-slate-700 bg-slate-800/40">
            <div className="col-span-3 md:col-span-2">Command</div>
            <div className="col-span-5 md:col-span-5">Description</div>
            <div className="hidden md:block md:col-span-3">Example</div>
            <div className="col-span-4 md:col-span-2 text-right">Rank</div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={searchTerm}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="divide-y divide-slate-700/70"
            >
              {filteredCommands.length > 0 ? (
                filteredCommands.map((command, index) => (
                  <motion.div 
                    key={index} 
                    custom={index}
                    variants={tableRowVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-12 px-6 py-4 hover:bg-slate-800/20 transition-colors"
                  >
                    <div className="col-span-3 md:col-span-2 font-mono text-[#08CFF9] truncate pr-2">
                      {command.name}
                    </div>
                    <div className="col-span-5 md:col-span-5 text-slate-300 truncate pr-2">
                      {command.description}
                    </div>
                    <div className="hidden md:block md:col-span-3 text-slate-400 font-mono text-sm truncate pr-2">
                      {command.example}
                    </div>
                    <div className="col-span-4 md:col-span-2 flex justify-end items-center">
                      {renderRankBadges(command.ranks)}
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8 text-slate-400"
                >
                  No commands found matching your search.
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="mt-12 flex justify-center"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-gradient-to-r from-[#08CFF9]/20 to-[#F7EB01]/20 border border-slate-700 rounded-lg p-6 max-w-2xl"
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FaLock className="text-[#F7EB01]" />
              </div>
              <div className="ml-4">
                <h4 className="text-white font-medium mb-2">Premium Commands</h4>
                <p className="text-slate-300 text-sm mb-4">
                  Gain access to exclusive commands by upgrading to a premium rank. 
                  Premium ranks also include other benefits like increased homes, colored name tags, 
                  and custom join messages.
                </p>
                <motion.a 
                  href="/shop" 
                  className="inline-flex items-center bg-[#08CFF9] hover:bg-[#F7EB01] text-[#211F22] font-medium px-4 py-2 rounded transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Premium Ranks
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Commands;