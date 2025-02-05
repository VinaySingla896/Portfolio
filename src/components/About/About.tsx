import { Container } from "./styles";
import VinaySingla from "../../assets/VinaySingla.jpg";
import FastAPI from "../../assets/FastAPI.svg";
import shopify from "../../assets/shopify.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import postgreSQLIcon from "../../assets/postgresql.svg";
import PythonIcon from "../../assets/python-5.svg";
import TailwindCSSIcon from "../../assets/tailwind-css-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import QuickbooksIcon from "../../assets/quickbooks-1.svg";
import LangChainIcon from "../../assets/langchain-color.svg";
import OpenAIIcon from "../../assets/openai-icon.svg";
export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I’m Vinay, a software engineer passionate about building
            scalable solutions and user-friendly web applications. Proficient in
            Python, JavaScript, FastAPI, and React, I hold a Bachelor’s in
            Computer Science from Chitkara University (GPA: 9.66/10). At
            WizCommerce, I engineered a backend system using FastAPI and
            PostgreSQL to automate data mapping for platforms like Shopify,
            reducing client onboarding time by 40% and eliminating manual code
            changes. My work revolves around simplifying complexity through
            clean, efficient code.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I’ve developed projects like Dr. Tech, a health-tech platform
            featuring AI-driven symptom analysis and a blood donor network built
            with the MERN stack. Recognized for my problem-solving skills, I
            ranked 86th globally in Coding Ninja’s World Cup and solved 350+
            data structure challenges on LeetCode. From REST APIs to cloud
            databases, I blend technical rigor with creativity to deliver tools
            that make a tangible impact.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            If you need a developer to streamline workflows, build scalable
            apps, or modernize your tech stack, let’s connect! I’m committed to
            turning your vision into reality with adaptable, future-ready
            solutions. Reach out—I’d love to collaborate and create something
            meaningful together.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={PythonIcon} alt="Python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={FastAPI} alt="FastAPi" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={postgreSQLIcon} alt="PostgreSQL" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={shopify} alt="shopify" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={QuickbooksIcon} alt="quickbooks" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={TailwindCSSIcon} alt="TailwindCSS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={LangChainIcon} alt="LangChain" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={OpenAIIcon} alt="OpenAI" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={VinaySingla} alt="Vinay Singla" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
