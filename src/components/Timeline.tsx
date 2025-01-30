/*import { Calendar } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Timeline: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeDescription, setActiveDescription] = useState<string | null>(null);

  const timelineItems = [
    {
      title: "Registration Open",
      description: "Kickstart your journey by registering for the event.",
      detailedDescription: "Here is the detailed description for Registration Open. This is where you start the event process by registering and getting familiar with the rules and guidelines."
    },
    {
      title: "Problem Statement Release",
      description: "Find your teammates and form a strong team.",
      detailedDescription: "Here is the detailed description for Problem Statement Release. The problem statement will be released on the event day, and teams can start brainstorming solutions."
    },
    {
      title: "Dev Sprint (Day-1)",
      description: "Build fast, innovate faster—Dev Sprint awaits!",
      detailedDescription: "Dev Sprint is where coding begins. It's time to put your ideas into action and start building a prototype of your solution on Day-1."
    },
    {
      title: "Git Challenge (Day-2)",
      description: "Collaborate, code, and conquer challenges together!",
      detailedDescription: "Git Challenge on Day-2 will test your skills in collaboration and version control. Teams will need to use Git to manage their project code effectively."
    },
    {
      title: "Pitch Deck Submission",
      description: "Craft your vision and submit your winning pitch deck!",
      detailedDescription: "Pitch Deck Submission requires teams to submit a presentation that showcases their solution, the technology used, and the potential impact of their project."
    },
    {
      title: "Hackathon Day (Final day)",
      description: "Final stretch, last code push—let’s finish strong!",
      detailedDescription: "The final day of the hackathon will be intense as teams finalize their projects, debug, and make their final presentations to the judges."
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Calendar className="text-teal-400" /> Event Timeline
      </h2>

      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-teal-800 transform md:-translate-x-0.5"></div>

      <div className="space-y-8">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-[26px] md:left-1/2 w-3 h-3 rounded-full bg-teal-500 transform -translate-x-1/2 mt-4 animate-pulse"></div>
            <div className={`${index % 2 === 0 ? "ml-12 md:ml-0 md:mr-[50%] md:pr-8" : "ml-12 md:ml-[50%] md:pl-8"}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  
                  if (activeItem === item.title) {
                    setActiveItem(null); 
                    setActiveDescription(null);
                  } else {
                    setActiveItem(item.title);
                    setActiveDescription(item.detailedDescription);
                  }
                }}
                className={`bg-gradient-to-br from-[#255e61] via-[#222] to-[#1a1a1a] p-4 rounded-xl backdrop-blur-sm border transition cursor-pointer ${activeItem === item.title ? "border-teal-300 shadow-teal-400 shadow-lg" : "border-transparent"}`}
              >
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Display Detailed Description in Modal }
      {activeItem && activeDescription && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          onClick={() => setActiveDescription(null)} 
        >
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-900 text-white p-6 rounded-lg border border-cyan-400 relative w-96 max-h-96 overflow-y-auto"
          >
            {/* Close Button *}
            <button
              onClick={() => setActiveDescription(null)}
              className="absolute top-2 right-2 text-cyan-400 hover:text-white"
            >
              &times;
            </button>

            {/* Heading *}
            <h3 className="text-lg font-bold text-white mb-4">
              {activeItem} {/* Display the active item's title *}
            </h3>

            {/* Detailed Description *}
            <p className="text-sm mb-4">{activeDescription}</p> {/* Display the detailed description *}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Timeline;*/






import { Calendar } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Timeline: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeDescription, setActiveDescription] = useState<string | null>(null);

  const timelineItems = [
    {
      title: "Registration Open",
      description: "Kickstart your journey by registering for the event.",
      detailedDescription: "Here is the detailed description for Registration Open. This is where you start the event process by registering and getting familiar with the rules and guidelines."
    },
    {
      title: "Problem Statement Release",
      description: "Find your teammates and form a strong team.",
      detailedDescription: "Here is the detailed description for Problem Statement Release. The problem statement will be released on the event day, and teams can start brainstorming solutions."
    },
    {
      title: "Dev Sprint (Day-1)",
      description: "Build fast, innovate faster—Dev Sprint awaits!",
      detailedDescription: "Dev Sprint is where coding begins. It's time to put your ideas into action and start building a prototype of your solution on Day-1."
    },
    {
      title: "Git Challenge (Day-2)",
      description: "Collaborate, code, and conquer challenges together!",
      detailedDescription: "Git Challenge on Day-2 will test your skills in collaboration and version control. Teams will need to use Git to manage their project code effectively."
    },
    {
      title: "Pitch Deck Submission",
      description: "Craft your vision and submit your winning pitch deck!",
      detailedDescription: "Pitch Deck Submission requires teams to submit a presentation that showcases their solution, the technology used, and the potential impact of their project."
    },
    {
      title: "Hackathon Day (Final day)",
      description: "Final stretch, last code push—let’s finish strong!",
      detailedDescription: "The final day of the hackathon will be intense as teams finalize their projects, debug, and make their final presentations to the judges."
    },
  ];

  return (
    <div className="relative"> {/* Added relative to limit timeline height */}
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Calendar className="text-teal-400" /> Event Timeline
      </h2>

      {/* Adjusted timeline height to be within event container */}
      <div className="absolute left-[26px] md:left-1/2 w-0.5 bg-teal-800 top-0 bottom-0 md:translate-x-[-1px] h-full"></div>

      <div className="space-y-8">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Adjusted dot position */}
            <div className="absolute left-[26px] md:left-1/2 w-3 h-3 rounded-full bg-teal-500 transform -translate-x-1/2 mt-4 animate-pulse"></div>
            <div className={`${index % 2 === 0 ? "ml-12 md:ml-0 md:mr-[50%] md:pr-8" : "ml-12 md:ml-[50%] md:pl-8"}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  if (activeItem === item.title) {
                    setActiveItem(null); 
                    setActiveDescription(null);
                  } else {
                    setActiveItem(item.title);
                    setActiveDescription(item.detailedDescription);
                  }
                }}
                className={`bg-gradient-to-br from-[#255e61] via-[#222] to-[#1a1a1a] p-4 rounded-xl backdrop-blur-sm border transition cursor-pointer ${activeItem === item.title ? "border-teal-300 shadow-teal-400 shadow-lg" : "border-transparent"}`}
              >
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Display Detailed Description in Modal */}
      {activeItem && activeDescription && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          onClick={() => setActiveDescription(null)} 
        >
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-900 text-white p-6 rounded-lg border border-cyan-400 relative w-96 max-h-96 overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveDescription(null)}
              className="absolute top-2 right-2 text-cyan-400 hover:text-white"
            >
              &times;
            </button>

            {/* Heading */}
            <h3 className="text-lg font-bold text-white mb-4">
              {activeItem} {/* Display the active item's title */}
            </h3>

            {/* Detailed Description */}
            <p className="text-sm mb-4">{activeDescription}</p> {/* Display the detailed description */}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Timeline;

