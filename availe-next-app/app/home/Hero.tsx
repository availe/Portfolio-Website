import { CiServer } from "react-icons/ci";
import { FaJava, FaReact, FaAws, FaDocker } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { GoGear } from "react-icons/go";
import { PiFileSqlLight } from "react-icons/pi";
import { SiCplusplus, SiWireshark } from "react-icons/si";
import {
  TbBrandPython,
  TbBrandTypescript,
  TbBrandNextjs,
} from "react-icons/tb";
import { scrollToSection } from "@/utils/scrollToSection";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";


const HomeMain = () => {
  const technologies_dict = [
    // Programming Languages
    { name: "Python", Icon: TbBrandPython },
    { name: "C++", Icon: SiCplusplus },
    { name: "Java", Icon: FaJava },
    { name: "TypeScript", Icon: TbBrandTypescript },

    // Frontend Technologies
    { name: "React", Icon: FaReact },
    { name: "Next.js", Icon: TbBrandNextjs },

    // Backend and Infrastructure
    { name: "AWS", Icon: FaAws },
    { name: "Linux", Icon: CiServer },
    { name: "Docker", Icon: FaDocker },

    // Development Tools and Databases
    { name: "Jenkins", Icon: GoGear },
    { name: "SQL", Icon: PiFileSqlLight },
    { name: "Wireshark", Icon: SiWireshark },
  ];

  return (
    <div className="flex justify-evenly flex-col min-h-screen bg-indigo-400">
      <div className="flex flex-row">
        <div className="flex flex-col w-3/5 justify-center flex-grow text-center items-center gap-12 pointer-events-none sm:pointer-events-auto">
          <Link href="/about" passHref>
            <div className="md:bg-white md:bg-opacity-20 p-6 md:rounded-lg md:shadow-lg transition duration-300 ease-in-out hover:bg-opacity-25 hover:shadow-xl hover:scale-105">
              <h1 className="font-medium text-white">
                <span className="text-2xl">Hello, I&apos;m</span> <br />
                <span className="text-6xl">Rafael Diaz</span> <br />
                <span className="text-3xl">a software developer</span>
              </h1>
            </div>
          </Link>

          <Tabs defaultValue="languages" className="w-full max-w-md mx-auto">
            <TabsList aria-label="Manage your settings">
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
              <TabsTrigger value="devtools">Development Tools</TabsTrigger>
            </TabsList>
            <TabsContent value="languages">
              <p>Languages</p>
            </TabsContent>
            <TabsContent value="frontend">
              <p>Frontend</p>
            </TabsContent>
            <TabsContent value="infrastructure">
              <p>Infrastructure</p>
            </TabsContent>
            <TabsContent value="devtools">
              <p>Development Tools</p>
            </TabsContent>
          </Tabs>

          {/* <div className="grid grid-cols-4 gap-0 md:gap-4">
            {technologies_dict.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <tech.Icon className="text-white text-4xl" />
                <span className="text-white text-lg">{tech.name}</span>
              </div>
            ))}
          </div> */}
        </div>
        <div className="flex-col flex-grow w-2/5 p-10 hidden md:flex">
          <h1 className="text-white text-2xl text-center mb-5">
            Featured Project
          </h1>
          <Link href="/about" passHref>
            <div className="flex flex-col justify-center transition duration-300 ease-in-out transform hover:scale-105">
              <Image
                src="/render.webp"
                alt="Vercel Logo"
                width="3"
                height="2"
                layout="responsive"
                style={{ objectFit: "contain" }}
              />
              <span className="text-center text-white mt-8">
                Expense Tracker, built with JavaFX and SQLite
              </span>
            </div>
          </Link>
        </div>
      </div>
      <FiChevronDown
        className="text-white text-4xl self-center"
        onClick={() => scrollToSection("about-section")}
      />
    </div>
  );
};

export default HomeMain;
