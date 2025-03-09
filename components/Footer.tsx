"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  FaDiscord,
  FaYoutube,
  FaTwitter,
  FaReddit,
  FaTiktok,
  FaChevronRight,
  FaServer,
  FaShoppingCart,
  FaVoteYea,
  FaTerminal,
  FaChartBar,
  FaSkull,
} from "react-icons/fa";

interface BaseLink {
  name: string;
  href: string;
}

interface LinkWithIcon extends BaseLink {
  icon: React.ReactNode;
}

type LinkItem = BaseLink | LinkWithIcon;

interface LinkGroup {
  title: string;
  links: LinkItem[];
}

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const linkGroups: LinkGroup[] = [
    {
      title: "Socials",
      links: [
        { name: "Discord", href: "https://discord.gg/6b6t", icon: <FaDiscord /> },
        { name: "YouTube", href: "https://youtube.com/6b6t", icon: <FaYoutube /> },
        { name: "Twitter", href: "https://twitter.com/6b6t", icon: <FaTwitter /> },
        { name: "Reddit", href: "https://reddit.com/r/6b6t", icon: <FaReddit /> },
        { name: "TikTok", href: "https://tiktok.com/@6b6t", icon: <FaTiktok /> },
      ],
    },
    {
      title: "About",
      links: [
        { name: "About 6b6t", href: "/about" },
        { name: "Voting rewards", href: "/voting-rewards" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Refund Policy", href: "/refunds" },
      ],
    },
    {
      title: "Server",
      links: [
        { name: "Shop", href: "/shop", icon: <FaShoppingCart /> },
        { name: "Vote", href: "/vote", icon: <FaVoteYea /> },
        { name: "Commands", href: "/commands", icon: <FaTerminal /> },
        { name: "Stats", href: "/stats", icon: <FaChartBar /> },
      ],
    },
  ];

  const hasIcon = (link: LinkItem): link is LinkWithIcon => {
    return 'icon' in link;
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-[#211F22] border-t border-slate-800 text-white"
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-3">
            <motion.div variants={itemVariants} className="flex items-center mb-4">
              <div className="h-10 w-10 bg-[#08CFF9] rounded-md flex items-center justify-center text-[#211F22] font-bold mr-3">
                <FaSkull size={24} />
              </div>
              <span className="text-2xl font-bold">
                6b6t <span className="text-[#08CFF9]">Minecraft</span>
              </span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-slate-300 mb-6 max-w-xl">
              6b6t is a survival Minecraft anarchy server with no rules, no punishments and 
              no queue. Players can do whatever they want in a world supporting up to 1000 
              players simultaneously and use commands such as /tpa and /home.
            </motion.p>

            <motion.div variants={itemVariants} className="bg-slate-800/50 rounded-lg p-5 border border-slate-700 shadow-md">
              <div className="flex items-center mb-3">
                <FaServer className="text-[#F7EB01] mr-2" />
                <span className="font-medium">Server Address:</span>
              </div>
              <div className="flex items-center">
                <code className="bg-[#211F22] text-[#08CFF9] px-3 py-2 rounded-md flex-1 font-medium">
                  play.6b6t.org
                </code>
                <button
                  className="ml-3 px-4 py-2 bg-[#08CFF9] hover:bg-[#F7EB01] text-[#211F22] font-medium rounded-md transition-colors"
                  onClick={() => {
                    navigator.clipboard.writeText("play.6b6t.org");
                    alert("Server address copied!");
                  }}
                >
                  Copy
                </button>
              </div>
            </motion.div>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <motion.div 
              key={group.title} 
              variants={itemVariants} 
              className="space-y-4"
            >
              <h3 className="font-semibold text-lg border-b border-slate-800 pb-2">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <div className="flex items-center text-slate-300 hover:text-[#08CFF9] transition-colors group">
                        {hasIcon(link) && (
                          <span className="mr-2 text-[#08CFF9] group-hover:text-[#F7EB01]">
                            {link.icon}
                          </span>
                        )}
                        {!hasIcon(link) && (
                          <FaChevronRight className="mr-1 text-xs text-slate-500 group-hover:text-[#F7EB01]" />
                        )}
                        <span>{link.name}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-slate-800">
          <h3 className="font-semibold text-lg mb-6">Most useful commands</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {[
              { cmd: "/tpa <player>", desc: "Teleport to a player" },
              { cmd: "/home", desc: "Go to your home" },
              { cmd: "/sethome", desc: "Set your home location" },
              { cmd: "/spawn", desc: "Return to spawn" },
              { cmd: "/msg <player>", desc: "Message a player" },
              { cmd: "/vote", desc: "Vote for rewards" },
              { cmd: "/kit", desc: "Get starter items" },
              { cmd: "/ignore", desc: "Block a player" },
            ].map((command) => (
              <div 
                key={command.cmd} 
                className="bg-slate-800/40 rounded-md p-3 border border-slate-700 hover:border-[#08CFF9] transition-colors"
              >
                <code className="text-[#08CFF9] block text-sm font-mono">
                  {command.cmd}
                </code>
                <span className="text-slate-400 text-xs mt-1 block">
                  {command.desc}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-slate-400 text-sm">
            © 2025 6b6t. All Rights Reserved.
          </div>
          <div className="flex space-x-4">
            {[
              <FaDiscord key="discord" />,
              <FaYoutube key="youtube" />,
              <FaTwitter key="twitter" />,
              <FaReddit key="reddit" />,
              <FaTiktok key="tiktok" />,
            ].map((icon, i) => (
              <Link href="#" key={i}>
                <div className="h-8 w-8 rounded-full bg-slate-800/40 flex items-center justify-center text-slate-400 hover:bg-[#08CFF9] hover:text-[#211F22] transition-colors">
                  {icon}
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;