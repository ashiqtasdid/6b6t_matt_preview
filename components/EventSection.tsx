import React from "react";
import EventProgressBar from "./EventProgressBar";

const EventSection = () => {
  // Single featured event data
  const featuredEvent = {
    name: "Summer Anarchy Challenge",
    description: "Work together to defeat bosses and unlock server-wide rewards!",
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-06-30"), // We'll keep this for timer calculation but hide display
    currentValue: 350000,
    targetValue: 1000000,
    unit: "points",
    rewards: [
      {
        threshold: 100000,
        name: "Bonus Vote Rewards",
        description: "All players receive 2x vote rewards for the remainder of the event"
      },
      {
        threshold: 250000,
        name: "Exclusive Cosmetic Kit",
        description: "All players gain access to special summer themed cosmetics"
      },
      {
        threshold: 500000,
        name: "Double XP Weekend",
        description: "Server-wide double XP for all activities during the final weekend"
      },
    ]
  };
  
  return (
    <div className="relative bg-[#211F22] py-20">
      <div className="absolute top-20 right-10 w-60 h-60 bg-[#F7EB01]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-[#08CFF9]/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <EventProgressBar
            eventName={featuredEvent.name}
            eventDescription={featuredEvent.description}
            startDate={featuredEvent.startDate}
            endDate={featuredEvent.endDate}
            hideDates={true} 
            currentValue={featuredEvent.currentValue}
            targetValue={featuredEvent.targetValue}
            unit={featuredEvent.unit}
            rewards={featuredEvent.rewards}
            accentColor="#08CFF9"
            secondaryColor="#F7EB01"
          />
        </div>
      </div>
    </div>
  );
};

export default EventSection;