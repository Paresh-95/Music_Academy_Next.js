import { cn } from "@/lib/utils";
import {
  IconPiano,
  IconMicrophone,
  IconMusic,
  IconGuitarPick,
  IconCircle,
  IconWaveSawTool,
  IconMusicOff,
  IconFileMusic,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const webinars = [
    {
      title: "Mastering the Piano: From Basics to Brilliance",
      description:
        "Join us for a deep dive into piano techniques, suitable for beginners and seasoned players alike.",
      icon: <IconPiano />,
    },
    {
      title: "Vocal Training: Finding Your Unique Voice",
      description:
        "Discover exercises and methods to enhance your vocal range and control.",
      icon: <IconMicrophone />,
    },
    {
      title: "The Art of Composition: Creating Melodies",
      description:
        "Learn the fundamentals of composing music that resonates and captivates.",
      icon: <IconMusic />,
    },
    {
      title: "Guitar Secrets: Strumming to Soloing",
      description:
        "Unlock guitar techniques that will elevate your playing to the next level.",
      icon: <IconGuitarPick />,
    },
    {
      title: "Rhythm and Beats: An Introduction to Drumming",
      description:
        "Explore the world of percussion and develop a solid foundation in drumming.",
      icon: <IconCircle />, // Alternative for drums
    },
    {
      title: "Music Production 101: Bringing Sounds to Life",
      description:
        "Get acquainted with the tools and techniques of modern music production.",
      icon: <IconWaveSawTool />, // Alternative waveform icon
    },
    {
      title: "Jazz Improvisation: Expressing Spontaneity",
      description:
        "Dive into the principles of jazz and learn how to improvise like a pro.",
      icon: <IconMusicOff />, // Alternative for jazz or improvisation
    },
    {
      title: "Songwriting Workshop: Crafting Lyrics That Speak",
      description:
        "Harness the power of words and melody to create songs that leave a lasting impact.",
      icon: <IconFileMusic />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {webinars.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm mt-5 text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
