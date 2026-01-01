// Experience.tsx
import { Container, Timeline, TimelineItem, TimelineContent, TimelineDot, TimelineLine, DateText } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
export function Experience() {
  return (
    <Container id="experience">
      <h2>Experience</h2>
      <Timeline>
        <TimelineLine />

        {/* SDE-1 */}
        <TimelineItem>
          <ScrollAnimation animateIn="fadeIn">
            <TimelineContent side="left">
              <DateText>Jul 2025 – Present</DateText>
              <h3>Software Development Engineer I</h3>
              <p>WizCommerce · Bengaluru, India</p>
              <span className="grade">
                Own end-to-end backend systems for third-party integrations, including
                designing distributed sync services, scalable APIs, and centralized
                logging frameworks. Lead feature ownership from design to production,
                improving system reliability and reducing operational support overhead.
              </span>
              <TimelineDot />
            </TimelineContent>
          </ScrollAnimation>
        </TimelineItem>

        {/* Internship */}
        <TimelineItem>
          <ScrollAnimation animateIn="fadeIn">
            <TimelineContent side="right">
              <DateText>Sep 2024 – Jun 2025</DateText>
              <h3>Software Engineer Intern</h3>
              <p>WizCommerce · Bengaluru, India</p>
              <span className="grade">
                Built modular backend frameworks enabling non-technical teams to onboard
                clients independently. Developed data transformation pipelines for
                external APIs and implemented AI-powered features using LangChain and
                OpenAI APIs to support sales and customer workflows.
              </span>
              <TimelineDot />
            </TimelineContent>
          </ScrollAnimation>
        </TimelineItem>

      </Timeline>
    </Container>
  );
}
