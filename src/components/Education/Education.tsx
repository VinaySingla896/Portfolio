// Education.tsx
import { Container, Timeline, TimelineItem, TimelineContent, TimelineDot, TimelineLine, DateText } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Education() {
  return (
    <Container id="education">
      <h2>Education</h2>
      <Timeline>
        <TimelineLine />
        
        <TimelineItem>
          <ScrollAnimation animateIn="fadeIn">
            <TimelineContent side="left">
              <DateText>Sep 2021 - June 2025</DateText>
              <h3>Bachelor of Engineering in Computer Science</h3>
              <p>Chitkara University, Punjab</p>
              <span className="grade">CGPA: 9.66/10</span>
              <TimelineDot />
            </TimelineContent>
          </ScrollAnimation>
        </TimelineItem>

        <TimelineItem>
          <ScrollAnimation animateIn="fadeIn">
            <TimelineContent side="right">
              <DateText>April 2020 - June 2021</DateText>
              <h3>CBSE - Class XII</h3>
              <p>Bathinda, Punjab</p>
              <span className="grade">Grade: 79%</span>
              <TimelineDot />
            </TimelineContent>
          </ScrollAnimation>
        </TimelineItem>

        <TimelineItem>
          <ScrollAnimation animateIn="fadeIn">
            <TimelineContent side="left">
              <DateText>April 2018 - April 2019</DateText>
              <h3>CBSE - Class X</h3>
              <p>Bathinda, Punjab</p>
              <span className="grade">Grade: 92%</span>
              <TimelineDot />
            </TimelineContent>
          </ScrollAnimation>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}