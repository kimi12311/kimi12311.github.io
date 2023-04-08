import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

function Contact() {
  const Section = styled.div`
    height: 100vh;
    color: white;
    scroll-snap-align: center;
  `;
  

  return (
    <>
      <Section>
        <h1>Contact</h1>
      </Section>
    </>
  );
}

export default Contact;
