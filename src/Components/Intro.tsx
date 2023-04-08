import { delay, motion } from "framer-motion";
import { useState } from "react";
import Particles from "react-tsparticles";
import styled from "styled-components";
import { loadFull } from "tsparticles";
import Particle from "./Particles";
import { SocialIcon } from "react-social-icons";
import Tilt from "react-parallax-tilt";

function Intro() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(true);
  const Section = styled.div`
    height: 100vh;
    color: white;
    scroll-snap-align: center;
    scale: 1.1;
    max-height: 100vh;
  `;

  const scrollTo = (id : string) => {
    const section = document.querySelector(`#${id}`);
    section!.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Section>
        <div className="text-center grid place-items-center h-max pt-48 align-middle">
          <h3 className="hover:text-cyan-200 transition-all duration-200 font-light pt-10 text-3xl flex flex-row">
            Hi, I'm Kimi
          </h3>
          <h3 className="hover:text-cyan-200 transition-all duration-200 font-light pt-10 text-3xl flex flex-row">
            Junior Fullstack Developer (.NET & JavaScript)
          </h3>
          <h3
            hidden={show2}
            className="text-xl pt-5 transition-all duration-200 font-light"
          >
            Nice you clicked the rocket.
          </h3>
        </div>
        <div hidden={show}>
          <motion.button
            whileTap={{ scale: 0.6 }}
            whileHover={{ scale: 1.05 }}
            transition={{ ease: "easeOut", duration: 1 }}
            onClick={(e) => {
              e.preventDefault();
              setShow(!show);
            }}
            className="flex justify-center bg-blue-700 h-10 items-center mb-5 w-32 m-auto mt-10 text-center rounded-full text-white"
          >
            Who am I?
          </motion.button>
        </div>
        <div hidden={!show}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2 }}
          >
            <Particle />
          </motion.div>
          <motion.div
            initial={{ x: -100, y: 300, rotate: 20 }}
            animate={{ x: screen.availWidth, y: 300, rotate: 45 }}
            transition={{ ease: "easeInOut", duration: 15, delay: 2 }}
            className="text-2xl "
          >
            <h1
              className="hover:cursor-pointer drop-shadow-lg shadow-white"
              onClick={(e) => {
                e.preventDefault();
                setShow2(false);
              }}
            >
              🚀
            </h1>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0.5, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          hidden={!show}
          className=""
        >
          <div className="text-center grid place-items-center h-max">
            <h3 className="transition-all duration-200 w-1/2 font-light mt-5 text-xl flex flex-row">
              I'm passionate about learning new things and I'm always looking
              for new challenges. I'm passionate about web development and
              backend development. I also love music, being a musician myself.
            </h3>
          </div>
          <div hidden={!show}>
            <motion.div
              className="flex flex-row justify-center space-x-10 text-center mt-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "anticipate", duration: 1 }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <SocialIcon
                  url="https://www.linkedin.com/in/kimi-andersson-bb1118263/"
                  network="linkedin"
                  className="scale-105 hover:scale-125 transition-all duration-200"
                  fgColor="white "
                  bgColor="black"
                />
              </Tilt>
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <SocialIcon
                  url="https://github.com/kimi12311"
                  network="github"
                  className="scale-105 hover:scale-125 transition-all duration-200"
                  fgColor="black "
                  bgColor="white"
                />
              </Tilt>
            </motion.div>
          </div>
          <div className="text-center pt-5 text-5xl"></div>
        </motion.div>
        <div
          hidden={!show}
          className="flex flex-row items-center justify-center space-x-20 pt-5 text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "anticipate", duration: 1 }}
            className="space-x-11"
            hidden={!show}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.8 }}
              onClick={()=>scrollTo("skills")}
              className="bg-blue-700 h-10 hover:bg-sky-500 transition-all duration-200  items-center mb-5 w-32 mt-10 text-center rounded-full text-white"
            >
              Skills
            </motion.button>
            <motion.button
              className="bg-blue-700 h-10 hover:bg-sky-500 transition-all duration-200 items-center mb-5 w-32 mt-10 text-center rounded-full text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.8 }}
              onClick={()=>scrollTo("experience")}
            >
              Experience
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.8 }}
              onClick={()=>scrollTo("projects")}
              className="bg-blue-700 h-10 hover:bg-sky-500 transition-all duration-200  items-center mb-5 w-32 mt-10 text-center rounded-full text-white"
            >
              Projects
            </motion.button>
          </motion.div>
        </div>
      </Section>
    </>
  );
}

export default Intro;
