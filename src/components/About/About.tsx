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
          I’m a backend-focused Software Development Engineer with strong foundations in data structures, algorithms, and object-oriented design. I have hands-on experience building scalable, production-grade backend services, distributed integrations, and data pipelines using Python, Java, FastAPI, and PostgreSQL.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
          At a fast-paced B2B startup, I’ve owned end-to-end features—from designing APIs and integration workflows to ensuring reliability through logging, retries, and fault-tolerant systems. I enjoy working in ambiguous problem spaces, collaborating across teams, and turning complex requirements into simple, reliable software. I’m motivated by building systems that scale and deliver real-world impact.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          If you’re looking for a developer to streamline workflows, build scalable applications, or modernize your tech stack with AI-driven solutions, let’s connect. I specialize in creating reliable, future-ready systems by combining strong backend engineering with practical AI integrations. Reach out—I’d love to collaborate and turn your ideas into impactful, real-world solutions.
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
