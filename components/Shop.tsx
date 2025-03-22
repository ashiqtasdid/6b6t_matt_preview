"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  FaCrown,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";
import EventSection from "./EventSection";

// Define type for PriceCard props
interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
  type?: "permanent" | "subscription";
  duration?: string;
  onClick: () => void;
}

// Define type for UpgradeCard props
interface UpgradeCardProps {
  from: string;
  to: string;
  price: string;
  onClick: () => void;
}

const PriceCard = ({
  title,
  price,
  features,
  popular = false,
  type = "permanent",
  duration = "",
  onClick,
}: PriceCardProps) => {
  const [showAdditionalFeatures, setShowAdditionalFeatures] = useState(false);

  const getFullFeatureDescription = () => {
    if (title === "Prime") {
      return (
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">Prime Prefix</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">Prime Discord Rank</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">12 Homes</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">/skin</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">420s /tpa cooldown</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">300s /home cooldown</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Access to 2 chat colors in /chatcolor
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Total lifetime personal statistics
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Embed Links permission in #general in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Attach Files permission in #general in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Add Reactions permission in #general in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Access to 10+ rank only channels in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Priority support using #premium-tickets channel in 6b6t Discord
            </span>
          </li>
        </ul>
      );
    } else if (title === "Elite") {
      return (
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">Elite Prefix</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">Elite Discord Rank</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">30 Homes</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">5 balloons with /balloons</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">/skin & /hat & /sit</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              /buildermode with 22 render distance
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              /hotspot create with 30 minute length and 30 minute cooldown
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">120s /tpa cooldown</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">90s /home cooldown</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Access to 3 chat colors in /chatcolor
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Change color of connection messages with /connectionmsgs color
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Change color of death messages with /deathmsgs color
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Total lifetime personal statistics
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Embed Links permission in #general in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Attach Files permission in #general in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Add Reactions permission in #general in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Change Nickname permission in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Streaming permission in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Access to 10+ rank only channels in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Priority support using #premium-tickets channel in 6b6t Discord
            </span>
          </li>
        </ul>
      );
    } else if (title === "Apex") {
      return (
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">Apex Prefix</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">Apex Discord Rank</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">100 Homes</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">60 balloons with /balloons</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">/skin & /hat & /sit</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              /buildermode with 32 render distance
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              /hotspot create with 90 minute length and 60 minute cooldown
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Use colors in anvils with the & sign, for example: &aHello
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Use underline, strikethrough and italic in anvils with the & sign
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">30s /tpa cooldown</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">15s /home cooldown</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Access to 5 chat colors in /chatcolor
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Change item name colors in anvils
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Change color of connection messages with /connectionmsgs color
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Change color of death messages with /deathmsgs color
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Total lifetime personal statistics
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Access to #advertising & #community-projects
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Embed Links permission in #general in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Attach Files permission in #general in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Add Reactions permission in #general in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Change Nickname permission in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Streaming permission in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Access to 10+ rank only channels in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Priority support using #premium-tickets channel in 6b6t Discord
            </span>
          </li>
        </ul>
      );
    } else if (title === "Prime Ultra") {
      return (
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">Prime Ultra Prefix</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">Prime Ultra Discord Rank</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">18 Homes</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">3 balloons with /balloons</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">/skin & /hat & /sit</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              /buildermode with 16 render distance
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">300s /tpa cooldown</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">180s /home cooldown</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Access to 3 chat colors in /chatcolor
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Change color of connection messages with /connectionmsgs color
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Change color of death messages with /deathmsgs color
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Total lifetime personal statistics
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Access to #advertising in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Embed Links permission in #general in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Attach Files permission in #general in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Add Reactions permission in #general in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Streaming permission in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Access to 10+ rank only channels in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Priority support using #premium-tickets channel in 6b6t Discord
            </span>
          </li>
        </ul>
      );
    } else if (title === "Elite Ultra") {
      return (
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">Elite Ultra Prefix</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">Elite Ultra Discord Rank</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">50 Homes</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">30 balloons with /balloons</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">/skin & /hat & /sit</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              /buildermode with 28 render distance
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              /hotspot create with 60 minute length and 45 minute cooldown
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">70s /tpa cooldown</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">40s /home cooldown</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Access to 6 chat colors in /chatcolor
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Change color of connection messages with /connectionmsgs color
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Change color of death messages with /deathmsgs color
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Total lifetime personal statistics
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Access to #advertising & #community-projects in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Embed Links permission in #general in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Attach Files permission in #general in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Add Reactions permission in #general in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Change Nickname permission in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Streaming permission in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Access to 10+ rank only channels in 6b6t Discord
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
            <span className="text-slate-300">
              Priority support using #premium-tickets channel in 6b6t Discord
            </span>
          </li>
        </ul>
      );
    } else {
      return (
        <div className="text-center py-2">
          <span className="text-slate-300">Full feature list coming soon</span>
        </div>
      );
    }
  };

  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px -10px rgba(8, 207, 249, 0.3)",
      }}
      className={`relative bg-slate-800/70 border ${
        popular ? "border-[#F7EB01]" : "border-slate-700"
      } rounded-xl p-6 transition-all duration-300 hover:border-[#08CFF9]`}
    >
      {popular && type !== "subscription" && (
        <div className="absolute -top-3 -right-2 bg-[#F7EB01] text-[#211F22] font-bold px-3 py-1 rounded-md text-sm shadow-lg border-2 border-slate-800 z-10 transform rotate-3">
          POPULAR
        </div>
      )}

      <div className="text-center mb-6">
        <div
          className={`inline-block p-3 rounded-full ${
            popular ? "bg-[#F7EB01]/20" : "bg-[#08CFF9]/20"
          } mb-3`}
        >
          <FaCrown
            size={24}
            className={popular ? "text-[#F7EB01]" : "text-[#08CFF9]"}
          />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="mt-1 text-sm text-slate-400">
          {type === "subscription" ? "Subscription" : "Permanent"}
          {duration && ` • ${duration}`}
        </div>
      </div>

      <div className="flex justify-center items-baseline mb-6">
        <span className="text-3xl font-extrabold text-white">€{price}</span>
        {type === "subscription" && (
          <span className="text-slate-400 ml-1">/period</span>
        )}
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FaCheckCircle className="text-[#08CFF9] mr-2 mt-1 flex-shrink-0" />
            <span className="text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>

      {showAdditionalFeatures && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-4 bg-slate-700/30 rounded-lg p-3"
        >
          <h4 className="text-sm font-semibold text-[#08CFF9] mb-2 border-b border-slate-700 pb-1">
            Full {title} Features
          </h4>
          {getFullFeatureDescription()}
        </motion.div>
      )}

      <button
        onClick={() => setShowAdditionalFeatures(!showAdditionalFeatures)}
        className={`w-full py-2 mb-3 rounded-md font-medium transition-all duration-300 
          ${
            showAdditionalFeatures
              ? "bg-slate-700/50 text-slate-300 border border-slate-600"
              : "bg-transparent border border-slate-600 text-slate-300 hover:border-[#08CFF9] hover:text-[#08CFF9]"
          }`}
      >
        {showAdditionalFeatures ? "Hide Full Features" : "View Full Features"}
      </button>

      <button
        onClick={onClick}
        className={`w-full py-3 rounded-md font-medium transition-all duration-300 ${
          popular
            ? "bg-[#F7EB01] text-[#211F22] hover:bg-[#08CFF9]"
            : "bg-[#08CFF9] text-[#211F22] hover:bg-[#F7EB01]"
        }`}
      >
        Buy Now
      </button>
    </motion.div>
  );
};

const UpgradeCard = ({ from, to, price, onClick }: UpgradeCardProps) => {
  const [showBenefits, setShowBenefits] = useState(false);

  // Calculate the features gained when upgrading
  const getUpgradeBenefits = () => {
    if (from === "Prime" && to === "Elite") {
      return [
        "18 additional homes (12 → 30)",
        "5 balloons with /balloons",
        "/buildermode with 22 render distance",
        "/hotspot create with 30 minute length",
        "Much faster cooldowns (120s /tpa, 90s /home)",
        "Access to 3 chat colors (from 2)",
        "Change color of connection & death messages",
        "Change Nickname permission in Discord",
      ];
    } else if (from === "Prime" && to === "Apex") {
      return [
        "88 additional homes (12 → 100)",
        "60 balloons with /balloons",
        "/buildermode with 32 render distance",
        "/hotspot create with 90 minute length",
        "Ultra-fast cooldowns (30s /tpa, 15s /home)",
        "Change item name colors in anvils",
        "Use colors & formatting in anvils",
        "Access to 5 chat colors (from 2)",
        "Access to #advertising & community projects",
      ];
    } else if (from === "Elite" && to === "Apex") {
      return [
        "70 additional homes (30 → 100)",
        "55 additional balloons (5 → 60)",
        "Enhanced builder mode (22 → 32 render distance)",
        "Longer hotspot duration (30 → 90 minutes)",
        "Much faster cooldowns (120s → 30s /tpa, 90s → 15s /home)",
        "Change item name colors in anvils",
        "Use colors & formatting in anvils",
        "Additional chat colors (3 → 5)",
        "Access to #community-projects in Discord",
      ];
    }
    return [];
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-slate-800/40 border border-slate-700 rounded-lg p-5 transition-all duration-300 hover:border-[#08CFF9]"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="flex flex-col items-center mr-4">
            <span className="text-slate-400 text-sm">From</span>
            <span
              className={`font-medium text-lg ${
                from === "Prime"
                  ? "text-[#08CFF9]"
                  : from === "Elite"
                  ? "text-[#F7EB01]"
                  : "text-white"
              }`}
            >
              {from}
            </span>
          </div>
          <div className="text-[#08CFF9] text-2xl">→</div>
          <div className="flex flex-col items-center ml-4">
            <span className="text-slate-400 text-sm">To</span>
            <span
              className={`font-medium text-lg ${
                to === "Elite"
                  ? "text-[#F7EB01]"
                  : to === "Apex"
                  ? "text-purple-400"
                  : "text-white"
              }`}
            >
              {to}
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-4 text-right">
            <div className="text-slate-400 text-sm">Price</div>
            <div className="font-bold text-xl text-white">€{price}</div>
          </div>
          <button
            onClick={onClick}
            className="px-4 py-2 bg-[#08CFF9] text-[#211F22] rounded-md font-medium hover:bg-[#F7EB01] transition-all duration-300"
          >
            Upgrade
          </button>
        </div>
      </div>

      <button
        onClick={() => setShowBenefits(!showBenefits)}
        className="text-sm text-slate-300 hover:text-[#08CFF9] transition-colors duration-300 flex items-center mb-2"
      >
        <span>{showBenefits ? "Hide benefits" : "See what you'll gain"}</span>
        <svg
          className={`ml-1 w-4 h-4 transition-transform duration-300 ${
            showBenefits ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {showBenefits && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-2 bg-slate-800/70 rounded-md p-3 border-l-2 border-[#08CFF9]"
        >
          <div className="text-sm font-medium text-[#08CFF9] mb-2">
            Benefits gained from this upgrade:
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
            {getUpgradeBenefits().map((benefit, index) => (
              <li
                key={index}
                className="text-sm text-slate-300 flex items-start"
              >
                <FaCheckCircle className="text-[#F7EB01] mr-2 mt-0.5 flex-shrink-0 text-xs" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

const Shop = () => {
  const [activeTab, setActiveTab] = useState("permanent");

  const handlePurchase = (packageName: string, price: string): void => {
    console.log(`Purchase initiated for ${packageName} at €${price}`);
    // Implement your payment logic here
  };

  const permanentFeatures = {
    prime: [
      "Special Name Color in Chat",
      "/sethome - Set 2 Homes",
      "/enderchest - Portable Ender Chest",
      "/hat - Wear Any Item as Hat",
      "Access to Prime Kits",
    ],
    elite: [
      "All Prime Features",
      "/sethome - Set 5 Homes",
      "/craft - Portable Crafting Table",
      "/feed - Fill Hunger Bar",
      "Priority Server Queue",
      "Access to Elite Kits",
    ],
    apex: [
      "All Elite Features",
      "/sethome - Set 10 Homes",
      "/repair - Repair Items",
      "/heal - Restore Health",
      "Highest Priority Queue",
      "Premium Discord Role",
      "Access to All Kits",
      "Exclusive Monthly Item Drops",
    ],
  };

  const subscriptionFeatures = {
    primeUltra: [
      "All Prime Features",
      "/fly - Creative Flight",
      "/back - Return to Death Location",
      "2x Vote Rewards",
      "Ultra Prime Kit Access",
    ],
    eliteUltra: [
      "All Elite & Prime Ultra Features",
      "/fly with 2x Speed",
      "/heal & /feed Cooldown Reduction",
      "3x Vote Rewards",
      "Ultra Elite Kit Access",
      "Access to Private Ultra Servers",
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative bg-[#211F22] py-20">
      <div className="absolute top-40 right-10 w-60 h-60 bg-[#08CFF9]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#F7EB01]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-[#08CFF9] font-semibold text-lg"
          >
            SERVER RANKS
          </motion.h2>
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-white mt-2"
          >
            Enhance Your <span className="text-[#08CFF9]">Experience</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-slate-300 max-w-2xl mx-auto"
          >
            Purchase a rank to unlock exclusive perks, commands, and abilities
            on the 6b6t server. Support the server and enhance your anarchy
            experience.
          </motion.p>
        </motion.div>

        <div>
          <EventSection />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <div className="bg-slate-800/50 border border-slate-700 rounded-full p-1">
              <button
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === "permanent"
                    ? "bg-[#08CFF9] text-[#211F22] font-medium"
                    : "text-slate-300"
                }`}
                onClick={() => setActiveTab("permanent")}
              >
                Permanent Ranks
              </button>
              <button
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === "subscription"
                    ? "bg-[#08CFF9] text-[#211F22] font-medium"
                    : "text-slate-300"
                }`}
                onClick={() => setActiveTab("subscription")}
              >
                Subscription Ranks
              </button>
              <button
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === "upgrades"
                    ? "bg-[#08CFF9] text-[#211F22] font-medium"
                    : "text-slate-300"
                }`}
                onClick={() => setActiveTab("upgrades")}
              >
                Rank Upgrades
              </button>
            </div>
          </motion.div>

          {activeTab === "permanent" && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <motion.div variants={itemVariants}>
                <PriceCard
                  title="Prime"
                  price="16.99"
                  features={permanentFeatures.prime}
                  type="permanent"
                  onClick={() => handlePurchase("Prime", "16.99")}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <PriceCard
                  title="Elite"
                  price="49.99"
                  features={permanentFeatures.elite}
                  popular={true}
                  type="permanent"
                  onClick={() => handlePurchase("Elite", "49.99")}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <PriceCard
                  title="Apex"
                  price="159.99"
                  features={permanentFeatures.apex}
                  type="permanent"
                  onClick={() => handlePurchase("Apex", "159.99")}
                />
              </motion.div>
            </motion.div>
          )}

          {activeTab === "subscription" && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <span className="w-2 h-8 bg-[#08CFF9] rounded-full mr-3"></span>
                  Prime Ultra Subscriptions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div variants={itemVariants}>
                    <PriceCard
                      title="Prime Ultra"
                      price="5.99"
                      features={subscriptionFeatures.primeUltra}
                      type="subscription"
                      duration="1 month"
                      onClick={() =>
                        handlePurchase("Prime Ultra 1 Month", "5.99")
                      }
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <div className="relative">
                      <div className="absolute -top-3 -right-2 bg-[#08CFF9] text-[#211F22] font-bold px-3 py-1 rounded-md text-sm shadow-lg border-2 border-slate-800 z-10 transform -rotate-3">
                        SAVE 33%
                      </div>
                      <PriceCard
                        title="Prime Ultra"
                        price="11.98"
                        features={[
                          ...subscriptionFeatures.primeUltra,
                          "Only €3.99/month (regularly €5.99)",
                          "Subscribe longer for bigger savings",
                        ]}
                        type="subscription"
                        duration="3 months"
                        onClick={() =>
                          handlePurchase("Prime Ultra 3 Months", "11.98")
                        }
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <div className="relative">
                      <div className="absolute -top-3 -right-2 bg-[#F7EB01] text-[#211F22] font-bold px-3 py-1 rounded-md text-sm shadow-lg border-2 border-slate-800 z-10 transform rotate-3">
                        SAVE 42%
                      </div>
                      
                      <PriceCard
                        title="Prime Ultra"
                        price="20.95"
                        features={[
                          ...subscriptionFeatures.primeUltra,
                          "Only €3.49/month (regularly €5.99)",
                          "Best value for Prime Ultra tier",
                        ]}
                        type="subscription"
                        duration="6 months"
                        onClick={() =>
                          handlePurchase("Prime Ultra 6 Months", "20.95")
                        }
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <span className="w-2 h-8 bg-[#F7EB01] rounded-full mr-3"></span>
                  Elite Ultra Subscriptions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div variants={itemVariants}>
                    <PriceCard
                      title="Elite Ultra"
                      price="14.99"
                      features={subscriptionFeatures.eliteUltra}
                      type="subscription"
                      duration="1 month"
                      onClick={() =>
                        handlePurchase("Elite Ultra 1 Month", "14.99")
                      }
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <div className="relative">
                      <div className="absolute -top-3 -right-2 bg-[#08CFF9] text-[#211F22] font-bold px-3 py-1 rounded-md text-sm shadow-lg border-2 border-slate-800 z-10 transform -rotate-3">
                        SAVE 40%
                      </div>
                      <PriceCard
                        title="Elite Ultra"
                        price="26.97"
                        features={[
                          ...subscriptionFeatures.eliteUltra,
                          "Only €8.99/month (regularly €14.99)",
                          "Subscribe longer for bigger savings",
                        ]}
                        type="subscription"
                        duration="3 months"
                        onClick={() =>
                          handlePurchase("Elite Ultra 3 Months", "26.97")
                        }
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <div className="relative">
                      <div className="absolute -top-3 -right-2 bg-[#F7EB01] text-[#211F22] font-bold px-3 py-1 rounded-md text-sm shadow-lg border-2 border-slate-800 z-10 transform rotate-3">
                        SAVE 44%
                      </div>
                    
                      <PriceCard
                        title="Elite Ultra"
                        price="49.98"
                        features={[
                          ...subscriptionFeatures.eliteUltra,
                          "Only €8.33/month (regularly €14.99)",
                          "Best value for Elite Ultra tier",
                        ]}
                        type="subscription"
                        duration="6 months"
                        onClick={() =>
                          handlePurchase("Elite Ultra 6 Months", "49.98")
                        }
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-slate-800/60 to-slate-800/30 border border-slate-700 rounded-lg p-5"
              >
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <FaInfoCircle className="text-[#08CFF9]" />
                  <h4 className="text-white font-semibold">
                    Subscription Savings
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h5 className="text-[#08CFF9] font-medium mb-1">
                      Monthly Plan
                    </h5>
                    <p className="text-slate-300 text-sm">
                      Standard pricing with monthly renewal
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#08CFF9]/20 text-[#08CFF9] font-semibold px-2 py-0.5 rounded-md text-xs">
                      SAVE 33-40%
                    </div>
                    <h5 className="text-[#08CFF9] font-medium mb-1">
                      3-Month Plan
                    </h5>
                    <p className="text-slate-300 text-sm">
                      Save up to 40% compared to monthly pricing
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#F7EB01]/20 text-[#F7EB01] font-semibold px-2 py-0.5 rounded-md text-xs">
                      BEST VALUE! SAVE 42-44%
                    </div>
                    <h5 className="text-[#F7EB01] font-medium mb-1">
                      6-Month Plan
                    </h5>
                    <p className="text-slate-300 text-sm">
                      Our best value with up to 44% savings
                    </p>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-slate-300 text-sm">
                    All subscriptions auto-renew but can be canceled anytime.
                    You&apos;ll keep all your benefits until the end of your
                    subscription period.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "upgrades" && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto space-y-6"
            >
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-slate-800/60 to-slate-800/30 border border-slate-700 rounded-lg p-6 mb-8"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  Save Money with Rank Upgrades
                </h3>
                <div className="flex items-start mb-5">
                  <FaInfoCircle className="text-[#08CFF9] mt-1 mr-3 flex-shrink-0" />
                  <p className="text-slate-300">
                    Already have a rank? Save money by upgrading your existing
                    rank instead of purchasing a new one. Upgrades retain all
                    your current benefits while adding all the perks of the
                    higher rank.
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-4 py-4">
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-[#08CFF9]/20 flex items-center justify-center">
                      <FaCrown size={24} className="text-[#08CFF9]" />
                    </div>
                    <span className="mt-2 font-medium text-[#08CFF9]">
                      Prime
                    </span>
                  </div>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-[#08CFF9] to-[#F7EB01]"></div>
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-[#F7EB01]/20 flex items-center justify-center">
                      <FaCrown size={24} className="text-[#F7EB01]" />
                    </div>
                    <span className="mt-2 font-medium text-[#F7EB01]">
                      Elite
                    </span>
                  </div>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-[#F7EB01] to-purple-400"></div>
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-purple-400/20 flex items-center justify-center">
                      <FaCrown size={24} className="text-purple-400" />
                    </div>
                    <span className="mt-2 font-medium text-purple-400">
                      Apex
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <UpgradeCard
                  from="Prime"
                  to="Elite"
                  price="32.99"
                  onClick={() =>
                    handlePurchase("Prime to Elite Upgrade", "32.99")
                  }
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <UpgradeCard
                  from="Prime"
                  to="Apex"
                  price="143.99"
                  onClick={() =>
                    handlePurchase("Prime to Apex Upgrade", "143.99")
                  }
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <UpgradeCard
                  from="Elite"
                  to="Apex"
                  price="110.99"
                  onClick={() =>
                    handlePurchase("Elite to Apex Upgrade", "110.99")
                  }
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-slate-800/30 border border-slate-700 rounded-lg p-5 mt-6 text-center"
              >
                <div className="text-white font-medium mb-2">
                  Need help with your upgrade?
                </div>
                <p className="text-sm text-slate-300">
                  Contact us on Discord or via email at{" "}
                  <a
                    href="mailto:contact@6b6t.org"
                    className="text-[#08CFF9] hover:underline"
                  >
                    contact@6b6t.org
                  </a>{" "}
                  for assistance
                </p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 bg-slate-800/30 border border-slate-700 rounded-lg p-6 text-center max-w-2xl mx-auto"
        >
          <h3 className="text-white font-bold mb-2">
            Need Help With Your Purchase?
          </h3>
          <p className="text-slate-300">
            Join our Discord server for support with payments, rank activation,
            or any questions about the perks.
          </p>
          <a
            href="https://discord.6b6t.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium rounded-md transition-colors duration-300"
          >
            Join Our Discord
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;
