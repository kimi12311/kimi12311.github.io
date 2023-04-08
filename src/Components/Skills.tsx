import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import Particle from "./Particles";

function Skills() {
  const [selected, setSelected] = useState("frontend");
  const Section = styled.div`
    height: 100vh;
    color: white;
    scroll-snap-align: center;
  `;

  const determineDialogue = () => {
    switch (selected) {
        case "frontend":
            return (
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl mb-10">Frontend</h1>
                    <div className="flex flex-row justify-center items-center align-middle space-x-5 space-y-5 flex-wrap">
                        <div className="w-24 hover:scale-105 transition-all duration-200 h-24 rounded-full bg-blue-400 text-center"><h1 className="pt-8">React</h1></div>
                        <div className="w-24 hover:scale-105 transition-all duration-200 h-24 rounded-full bg-blue-400 text-center"><h1 className="pt-8">Tailwind CSS</h1></div>
                        <div className="w-24 hover:scale-105 transition-all duration-200 h-24 rounded-full bg-blue-400 text-center"><h1 className="pt-8">Javascript</h1></div>
                        <div className="w-24 hover:scale-105 transition-all duration-200 h-24 rounded-full bg-blue-400 text-center"><h1 className="pt-8">Typescript</h1></div>
                        <div className="w-24 hover:scale-105 transition-all duration-200 h-24 rounded-full bg-blue-400 text-center"><h1 className="pt-8">Responsive Design</h1></div>
                        <div className="w-24 hover:scale-105 transition-all duration-200 h-24 rounded-full bg-blue-400 text-center"><h1 className="pt-8">HTML</h1></div>
                        <div className="w-24 hover:scale-105 transition-all duration-200 h-24 rounded-full bg-blue-400 text-center"><h1 className="pt-8">CSS</h1></div>
                        <div className="w-24 hover:scale-105 transition-all duration-200 h-24 rounded-full bg-blue-400 text-center"><h1 className="pt-8">Blazor</h1></div>
                        <div className="w-24 hover:scale-105 transition-all duration-200 h-24 rounded-full bg-blue-400 text-center"><h1 className="pt-8">Razor Pages</h1></div>
                        <div className="w-24 hover:scale-105 transition-all duration-200 h-24 rounded-full bg-blue-400 text-center"><h1 className="pt-8">Redux</h1></div>
                    </div>
                </div>
            )
        case "tools":
            return (
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl mb-10">Tools</h1>
                    <div className="flex flex-row justify-center items-center space-x-5 space-y-5 flex-wrap">
                        <div className="w-24 h-24 hover:scale-105 transition-all duration-200 rounded-full bg-orange-300 text-center"><h1 className="pt-8">Visual Studio Code</h1></div>
                        <div className="w-24 h-24 hover:scale-105 transition-all duration-200 rounded-full bg-orange-300 text-center"><h1 className="pt-8">Docker</h1></div>
                        <div className="w-24 h-24 hover:scale-105 transition-all duration-200 rounded-full bg-orange-300 text-center"><h1 className="pt-8">Jetbrains IDEs</h1></div>
                        <div className="w-24 h-24 hover:scale-105 transition-all duration-200 rounded-full bg-orange-300 text-center"><h1 className="pt-8">Azure</h1></div>
                        <div className="w-24 h-24 hover:scale-105 transition-all duration-200 rounded-full bg-orange-300 text-center"><h1 className="pt-8">TDD</h1></div>
                        <div className="w-24 h-24 hover:scale-105 transition-all duration-200 rounded-full bg-orange-300 text-center"><h1 className="pt-8">Agile Work Methods</h1></div>
                        <div className="w-24 h-24 hover:scale-105 transition-all duration-200 rounded-full bg-orange-300 text-center"><h1 className="pt-8">xUnit/nUnit</h1></div>
                        <div className="w-24 h-24 hover:scale-105 transition-all duration-200 rounded-full bg-orange-300 text-center"><h1 className="pt-8">Github Actions</h1></div>
                        <div className="w-24 h-24 hover:scale-105 transition-all duration-200 rounded-full bg-orange-300 text-center"><h1 className="pt-8">Git</h1></div>
                    </div>
                </div>
            )
        case "backend":
            return (
                <div className="flex flex-col justify-center space-y-5 items-center">
                    <h1 className="text-2xl mb-10">Backend</h1>
                    <div className="flex flex-row justify-center items-center space-x-5">
                    <div className="w-24 hover:scale-105 transition-all duration-200 h-24 rounded-full bg-violet-300 text-center"><h1 className="pt-8">C#</h1></div>
                    <div className="w-24 hover:scale-105 transition-all duration-200 h-24 rounded-full bg-violet-300 text-center"><h1 className="pt-8">SQL</h1></div>
                    <div className="w-24 hover:scale-105 transition-all duration-200 h-24 rounded-full bg-violet-300 text-center"><h1 className="pt-8">ASP.Net</h1></div>
                    <div className="w-24 hover:scale-105 transition-all duration-200 h-24 rounded-full bg-violet-300 text-center"><h1 className="pt-8">NodeJs</h1></div>
                    <div className="w-24 hover:scale-105 transition-all duration-200 h-24 rounded-full bg-violet-300 text-center"><h1 className="pt-8">REST</h1></div>
                    <div className="w-24 hover:scale-105 transition-all duration-200 h-24 rounded-full bg-violet-300 text-center"><h1 className="pt-8">GraphQL</h1></div>
                    <div className="w-24 hover:scale-105 transition-all duration-200 h-24 rounded-full bg-violet-300 text-center"><h1 className="pt-8">MongoDB</h1></div>
                    </div>
                </div>
            )

    }
}

  

  return (
    <>
      <Section>
        <h1 className="text-center pt-10 text-3xl">Skills</h1>
        <div className="grid grid-cols-2 place-items-center align-middle">
            <div className="pt-64 text-center">
                <div onClick={()=>setSelected("frontend")} className="content-center w-72 h-24 rounded-xl mb-5 text-center bg-blue-400  hover:scale-105 transition-all duration-200 cursor-pointer">
                    <h1 className="mt-8">Frontend</h1>
                </div >
                <div onClick={()=>setSelected("tools")} className="w-72 h-24 rounded-xl mt-5 text-center bg-orange-300 hover:scale-105 transition-all duration-200 cursor-pointer">
                    <h1 className="mt-8">Tools</h1>
                </div>
                <div onClick={()=>setSelected("backend")} className="w-72 h-24 rounded-xl mt-5 text-center bg-violet-300 hover:scale-105 transition-all duration-200 cursor-pointer">
                    <h1 className="mt-8">Backend</h1>
                </div>
            </div>
            {determineDialogue()}
        </div>
      </Section>
    </>
  );
}

export default Skills;
