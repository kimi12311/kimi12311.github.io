import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Work from "./Components/Work";
import Intro from "./Components/Intro";
import './index.css'

function App() {
  const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <>
      <Container className="  bg-gradient-to-r from-slate-900 to-slate-950 animate-gradient-x">
        <Intro/>
        <div id="skills">
        <Skills />
        </div>
        <div id="experience">
        <Work />
        </div>
        <Contact />
      </Container>
    </>
  );
}

export default App;
