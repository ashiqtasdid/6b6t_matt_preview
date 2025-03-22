"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaClock,
  FaGift,
  FaTrophy,
  FaInfoCircle,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

interface EventProgressBarProps {
  eventName: string;
  eventDescription?: string;
  startDate: Date;
  endDate: Date;
  hideEndDate?: boolean;
  hideDates?: boolean; 
  currentValue: number;
  targetValue: number;
  unit?: string;
  rewards?: Array<{
    threshold: number;
    name: string;
    description: string;
    details?: string;
  }>;
  expandableRewards?: boolean;
  className?: string;
  accentColor?: string;
  secondaryColor?: string;
}

const EventProgressBar: React.FC<EventProgressBarProps> = ({
  eventName,
  eventDescription = "",
  startDate,
  endDate,
  hideEndDate = false,
  hideDates = false, // Default to false
  currentValue,
  targetValue,
  unit = "",
  rewards = [],
  expandableRewards = false,
  className = "",
  accentColor = "#08CFF9",
  secondaryColor = "#F7EB01",
}) => {
  const [timeRemaining, setTimeRemaining] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedRewardIndex, setExpandedRewardIndex] = useState<number | null>(null);
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    // Calculate progress percentage
    const percentage = Math.min(
      Math.round((currentValue / targetValue) * 100),
      100
    );
    setProgressPercentage(percentage);

    // Update time remaining
    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentValue, targetValue, endDate]);

  // Toggle reward details
  const toggleRewardDetails = (index: number, event: React.MouseEvent) => {
    if (!expandableRewards) return;
    event.stopPropagation();
    setExpandedRewardIndex(expandedRewardIndex === index ? null : index);
  };

  // Find the next reward
  const nextReward = rewards.find((reward) => reward.threshold > currentValue);
  const nextRewardPercentage = nextReward
    ? (nextReward.threshold / targetValue) * 100
    : null;

  // Format date function
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div
      className={`bg-slate-800/70 border border-slate-700 rounded-xl overflow-hidden ${className}`}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-white">{eventName}</h3>
            {eventDescription && (
              <p className="text-slate-300 text-sm mt-1">{eventDescription}</p>
            )}
          </div>
          <div
            className="px-3 py-1 rounded-full text-sm flex items-center"
            style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
          >
            <FaClock className="mr-1" />
            <span>
              {timeRemaining.days > 0 && `${timeRemaining.days}d `}
              {String(timeRemaining.hours).padStart(2, "0")}:
              {String(timeRemaining.minutes).padStart(2, "0")}:
              {String(timeRemaining.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Only show dates section if hideDates is false */}
        {!hideDates && (
          <div
            className={`grid ${
              hideEndDate ? "grid-cols-1" : "grid-cols-2"
            } gap-4 mb-4 text-sm`}
          >
            <div className="bg-slate-800/50 rounded p-2 flex justify-between">
              <span className="text-slate-400">Start:</span>
              <span className="text-white">{formatDate(startDate)}</span>
            </div>

            {!hideEndDate && (
              <div className="bg-slate-800/50 rounded p-2 flex justify-between">
                <span className="text-slate-400">End:</span>
                <span className="text-white">{formatDate(endDate)}</span>
              </div>
            )}
          </div>
        )}

        <div className="relative h-8 bg-slate-800/50 rounded-md overflow-hidden mb-2">
          {/* Main progress bar */}
          <motion.div
            className="h-full rounded-md"
            style={{ backgroundColor: accentColor }}
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {/* Next reward marker */}
          {nextRewardPercentage && (
            <div
              className="absolute top-0 h-full border-l-2 border-dashed"
              style={{
                left: `${nextRewardPercentage}%`,
                borderColor: secondaryColor,
              }}
            >
              <div
                className="absolute -top-1 -left-2 h-4 w-4 rounded-full"
                style={{ backgroundColor: secondaryColor }}
              />
            </div>
          )}
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="text-white font-medium">
            {progressPercentage}% Complete
          </div>
        </div>

        {/* Next reward preview */}
        {nextReward && (
          <div
            className="mt-4 p-3 rounded-lg flex items-center justify-between cursor-pointer"
            style={{
              backgroundColor: `${secondaryColor}10`,
              borderLeft: `3px solid ${secondaryColor}`,
            }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-center">
              <div
                className="h-8 w-8 rounded-full flex items-center justify-center mr-3"
                style={{ backgroundColor: `${secondaryColor}30` }}
              >
                <FaGift style={{ color: secondaryColor }} />
              </div>
              <div>
                <div className="text-sm text-slate-400">
                  Next Reward at {nextReward.threshold.toLocaleString()} {unit}
                </div>
                <div className="text-white font-medium">{nextReward.name}</div>
              </div>
            </div>
            <div
              className="text-slate-400"
              style={{
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <FaInfoCircle />
            </div>
          </div>
        )}
      </div>

      {/* Expanded rewards section */}
      <AnimatePresence>
        {isExpanded && rewards.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0">
              <hr className="border-slate-700 mb-4" />

              <h4 className="text-white font-medium mb-3 flex items-center">
                <FaTrophy className="mr-2" style={{ color: secondaryColor }} />
                Event Rewards
              </h4>

              <div className="space-y-3">
                {rewards.map((reward, index) => {
                  const isUnlocked = currentValue >= reward.threshold;

                  return (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${
                        isUnlocked
                          ? "border-green-500/30 bg-green-500/10"
                          : "border-slate-700 bg-slate-800/30"
                      }`}
                    >
                      <div 
                        className={`flex justify-between items-start ${expandableRewards && reward.details ? 'cursor-pointer' : ''}`}
                        onClick={(e) => expandableRewards && reward.details ? toggleRewardDetails(index, e) : null}
                      >
                        <div>
                          <div className="font-medium text-white">
                            {reward.name}
                          </div>
                          <div className="text-sm text-slate-400">
                            {reward.description}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div
                            className="text-xs px-2 py-1 rounded-full mr-2"
                            style={{
                              backgroundColor: isUnlocked
                                ? "rgba(16, 185, 129, 0.2)"
                                : `${accentColor}20`,
                              color: isUnlocked ? "#10B981" : accentColor,
                            }}
                          >
                            {isUnlocked
                              ? "Unlocked"
                              : `${reward.threshold.toLocaleString()} ${unit}`}
                          </div>
                          {expandableRewards && reward.details && (
                            expandedRewardIndex === index ? 
                              <FaChevronUp className="text-slate-400" /> : 
                              <FaChevronDown className="text-slate-400" />
                          )}
                        </div>
                      </div>
                      
                      {/* Expandable details */}
                      {expandableRewards && reward.details && (
                        <AnimatePresence>
                          {expandedRewardIndex === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-3 pt-3 border-t border-slate-700/30 text-sm text-slate-300">
                                {reward.details}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventProgressBar;