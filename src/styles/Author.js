import styled from 'styled-components';
import { size } from '../data/Device';
import { motion } from 'framer-motion';

export const AuthorContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  .author-info {
    padding-left: 3rem;
  }
`;

export const Description = styled(motion.div)`
  max-width: 70rem;
  margin: 0 auto;
  p {
    font-size: 2rem;
    font-weight: 100;
    word-spacing: 0.5rem;
    line-height: 1.8;
  }
  @media screen and (max-width: ${size.medium}) {
    padding: 2rem;
    p {
      font-size: 1.8rem;
      word-spacing: 0.2rem;
    }
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
    display: flex;
    align-items: center;
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
  .next {
    position: fixed;
    right: 0;
    bottom: 0;
  }
  .back {
    position: fixed;
    left: 0;
    bottom: 0;
  }
`;
