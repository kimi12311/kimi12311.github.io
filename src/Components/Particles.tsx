import { motion } from "framer-motion";
import { useState } from "react";
import Particles from "react-tsparticles";
import styled from "styled-components";
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = async (main: any) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };
  const Section = styled.div`
    height: 100vh;
    color: white;
    scroll-snap-align: center;
  `;

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 40,
          particles: {
            color: {
              value: "#f1f1f1",
            },
            number: {
              density: {
                enable: true,
                area: 1080,
              },
              limit: 0,
              value: 500,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.1,
                speed: 1,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.1,
              },
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.2,
              },
              value: 1,
            },
          },
        }}
      />
    </>
  );
}

export default Particle;
