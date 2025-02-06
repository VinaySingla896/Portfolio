import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;
  padding: 5rem 0;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
  }
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
`;

export const TimelineLine = styled.div`
  position: absolute;
  width: 4px;
  background-color: var(--pink);
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  @media (max-width: 768px) {
    left: 20px;
    transform: none;
  }
`;

export const TimelineContent = styled.div<{ side: string }>`
  position: relative;
  width: 45%;
  padding: 2rem;
  background: #2b2b2b;
  border-radius: 1rem;
  transition: 0.3s;
  margin: 1rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 30px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 10px 0;
    border-color: transparent #2b2b2b transparent transparent;
  }

  &:hover {
    transform: translateY(-5px);
    background-color: var(--pink);
  }

  /* Light mode styles */
  html.light & {
    background: var(--light-grey); // Use light grey for light mode
    color: var(--black);
    border: 1px solid rgba(0, 0, 0, 0.1);
    &::before {
      border-color: transparent var(--light-grey) transparent transparent;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 768px) {
    width: calc(100% - 60px);
    margin: 1rem 0 1rem 60px;

    &::before {
      left: -10px;
      right: auto;
      transform: none;
    }
  }
`;

export const TimelineItem = styled.div`
  padding: 20px 0;
  position: relative;
  width: 100%;
  min-height: 150px;
  overflow: hidden;

  &:nth-child(odd) {
    ${TimelineContent} {
      float: left;
      width: 45%;
      margin-right: 20px;

      &::before {
        right: -10px;
        transform: rotate(180deg);
      }
    }
  }

  &:nth-child(even) {
    ${TimelineContent} {
      float: right;
      width: 45%;
      margin-left: 20px;

      &::before {
        left: -10px;
      }
    }
  }

  @media (max-width: 768px) {
    ${TimelineContent} {
      float: none !important;
      width: calc(100% - 60px) !important;
      margin: 1rem 0 1rem 60px !important;
    }
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--blue);
  border-radius: 50%;
  top: 30px;
  right: -45px;
  z-index: 2;
  display: none;

  @media (max-width: 768px) {
    right: auto;
    left: 10px;
  }
`;

export const DateText = styled.span`
  display: block;
  color: var(--green);
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;