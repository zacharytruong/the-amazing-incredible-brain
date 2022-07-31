import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  background: linear-gradient(
    90deg,
    #08417e,
    #094c8c,
    #0a5899,
    #0a64a7,
    #0970b5,
    #077cc3,
    #0489d0,
    #0096de
  );
  color: white;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const LogoContainer = styled.div`
  min-height: 10rem;
  img {
    max-width: 30rem;
    padding: 5rem;
  }
`;

export const TitleContainer = styled(motion.div)`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  width: 100%;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding-left: 5rem;
  .title {
    max-width: 70%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.025),
      rgba(255, 255, 255, 0)
    );
    padding: 3rem 0rem;
    border-radius: 1rem;
  }
  h1 {
    font-size: 6rem;
    padding-left: 5rem;
    margin: 0;
    font-weight: 200;
  }
`;

export const BrainIdeaContainer = styled.div`
  img {
    max-width: 30rem;
    position: absolute;
    top: -5rem;
    right: 5rem;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    mask-image: linear-gradient(
      to top left,
      rgba(10, 107, 181, 1),
      rgba(0, 0, 0, 0)
    );
  }
`;

export const NavContainer = styled.div`
  button {
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.5rem;
    background: none;
    font-size: 3rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    display: flex;
    align-items: center;
    transform: translateX(-50%);
    opacity: 0.2;
  }
  button:hover {
    background: rgba(255, 255, 255, 0.1);
    opacity: 1;
  }
  svg {
    font-size: 3rem;
    vertical-align: middle;
  }
`;
