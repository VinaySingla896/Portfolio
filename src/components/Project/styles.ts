import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  
  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
    @media (max-width: 480px) {
      font-size: 3rem;
    }
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;

    .project {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b; // Dark mode background
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      min-height: 0;

      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      /* Light mode styles */
      html.light & {
        background-color: var(--light-grey); // Light grey background for light mode
        color: var(--black);
        border: 1px solid rgba(0, 0, 0, 0.1);
        
        &:hover {
          filter: brightness(0.8);
          
          p a {
            color: var(--black);
            border-bottom-color: var(--black);
          }
        }
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        
        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        a > img {
          width: 5.0rem;
          @media (max-width: 480px) {
            width: 4rem;
          }
        }
      }

      h3 {
        margin-bottom: 2rem;
        font-size: 2.2rem;
        @media (max-width: 480px) {
          font-size: 1.8rem;
        }
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        word-wrap: break-word;
        font-size: 1.6rem;
        
        @media (max-width: 480px) {
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
        }

        a {
          color: #FFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          
          html.light & {
            color: var(--blue);
            border-bottom-color: var(--blue);
          }

          &:hover {
            color: var(--green);
            
            html.light & {
              color: var(--pink);
            }
          }
        }
      }

      footer {
        margin-top: auto;
        .tech-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
          flex-wrap: wrap;
          
          html.light & {
            color: var(--black);
            opacity: 0.8;
          }
          
          @media (max-width: 480px) {
            gap: 1rem;
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
      padding: 0;
    }
    margin-top: 8rem;
  }
`;