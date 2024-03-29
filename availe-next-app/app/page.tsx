"use client";

import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { SiCplusplus, SiWireshark } from "react-icons/si";
import { FaJava, FaAws, FaReact, FaDocker } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { PiFileSqlLight } from "react-icons/pi";
import { CiServer } from "react-icons/ci";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandPython, TbBrandTypescript } from "react-icons/tb";


export default function Home() {
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const technologies_dict = [
    // Programming Languages
    { name: 'Python', Icon: TbBrandPython },
    { name: 'C++', Icon: SiCplusplus },
    { name: 'Java', Icon: FaJava },
    { name: 'TypeScript', Icon: TbBrandTypescript },

    // Frontend Technologies
    { name: 'React', Icon: FaReact },
    { name: 'Next.js', Icon: TbBrandNextjs },

    // Backend and Infrastructure
    { name: 'AWS', Icon: FaAws },
    { name: 'Linux', Icon: CiServer },
    { name: 'Docker', Icon: FaDocker },

    // Development Tools and Databases
    { name: 'Jenkins', Icon: GoGear },
    { name: 'SQL', Icon: PiFileSqlLight },
    { name: 'Wireshark', Icon: SiWireshark },
  ];

  return (
    <><main className="flex justify-between flex-row min-h-screen bg-indigo-400">
      <div className="flex flex-col justify-center flex-grow text-center items-center gap-12">
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
          <h1 className="font-medium text-white">
            <span className="text-2xl">Hello, I'm</span> <br />
            <span className="text-6xl">Rafael Diaz</span> <br />
            <span className="text-3xl">a software developer</span>
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {technologies_dict.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <tech.Icon className="text-white text-4xl" />
              <span className="text-white text-lg">{tech.name}</span>
            </div>
          ))}
        </div>
        <FiChevronDown
          className="text-white text-4xl cursor-pointer mt-5"
          onClick={() => handleScrollToSection('about-section')} />
      </div>
      <div className="flex flex-col flex-grow p-10">
        <div className="relative w-full h-full">
          <Image src="/vercel.svg" alt="Vercel Logo" layout="fill" objectFit="contain" />
        </div>
      </div>
    </main><div id="about-section" className="flex flex-col flex-grow p-10 min-h">
        <h2 className="text-black text-3xl">About Me</h2>
        <p className="text-black text-lg">
          I am a software developer with experience in web development and cloud computing.
        </p>
      </div></>
  );
}