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
        description: "All players receive 2x vote rewards for the remainder of the event",
        details: "Cast your vote on popular Minecraft server listing sites and receive double the usual rewards! This bonus will remain active until the event concludes."
      },
      {
        threshold: 250000,
        name: "Exclusive Cosmetic Kit", 
        description: "All players gain access to special summer themed cosmetics",
        details: "This limited-time cosmetic pack includes beach outfits, surfboards, tropical pets, and summer-themed particle effects that won't be available anywhere else!"
      },
      {
        threshold: 500000,
        name: "Double XP Weekend",
        description: "Server-wide double XP for all activities during the final weekend",
        details: "Every activity on the server will award double experience points during the final weekend of the event. Perfect time to level up your skills and abilities!"
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
            expandableRewards={true}
            accentColor="#08CFF9"
            secondaryColor="#F7EB01"
          />
          
          {/* Additional Event Details */}
          <div className="mt-12 text-white space-y-6">
            <div className="bg-[#2A282B] rounded-lg p-6 border border-[#08CFF9]/20">
              <h3 className="text-xl font-bold text-[#F7EB01] mb-3">Not P2W!</h3>
              <p className="text-gray-300">
                This community isn&apos;t pay-2-win because it gives everyone an advantage.
              </p>
            </div>
            
            <div className="bg-[#2A282B] rounded-lg p-6 border border-[#08CFF9]/20">
              <h3 className="text-xl font-bold text-[#F7EB01] mb-3">Event Details</h3>
              <p className="text-gray-300 mb-4">
                The event will last 48 hours. It will allow for everyone to participate equally.
              </p>
              <p className="text-gray-300 mb-4">
                Once the goal is reached, the starting time will be announced in the 6b6t Discord and at the 6b6t Blog.
              </p>
              <p className="text-gray-300 font-medium">
                The goal is <span className="text-[#08CFF9] font-bold">3500 points</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;