import styled from 'styled-components';
import Blog_Brain_02 from '../media/Blog_Brain_02.png';
import {motion} from 'framer-motion'
import { size } from '../data/Device';

export const InfoGraphic = styled(motion.div)`
  max-width: 70rem;
  margin: 5rem auto;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0.8rem 3.2rem 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(0.5rem);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 1rem;
  img {
    width: 7rem;
  }
`;

export const Footer = styled.div`
  padding: 3rem 0;
`;

export const MainTitle = styled.div`
  height: 10rem;
  border-style: solid;
  border-width: 50px 0 50px 50px;
  border-color: transparent transparent transparent hsl(136, 61%, 30%);
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  h1 {
    padding-left: 5rem;
    font-size: 6rem;
    letter-spacing: 5rem;
    text-shadow: 2px 2px 2px #000;
    background: hsl(136, 61%, 30%);
  }
  @media screen and (max-width: ${size.medium}) {
    h1 {
      font-size: 4rem;
      letter-spacing: 2rem;
    }
  }
`;

export const InfoGraphicTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  border-radius: 1rem;
  background: #0067b1;
  position: relative;
  z-index: 10;
  overflow: hidden;
  img {
    width: 7rem;
    position: absolute;
    top: 0;
    left: 5rem;
    z-index: 20;
  }
  h2 {
    padding-right: 5rem;
  }
  @media screen and (max-width: ${size.small}) {
    img {
      opacity: 0.5;
    }
    h2 {
      padding: 0 1rem;
    }
  }
`;

export const InfoGraphicCol = styled.div`
  display: flex;
  span {
    display: block;
    font-size: 5rem;
    color: hsl(206, 90%, 20%);
  }
  padding: 2rem 0rem;
  p {
    text-align: center;
  }
  .context {
    width: 50%;
    border-right: 0.2rem solid #0067b1;
    padding: 3rem;
  }
  .more-context {
    display: flex;
    align-items: flex-start;
    padding: 3rem;
    img {
      width: 10rem;
    }
    p {
      /* padding: 0 1rem; */
      font-size: 2.4rem;
    }
  }
`;

export const InfoGraphicSlogan = styled.div`
  background-color: #0a6bb5;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
`;
export const InfoGraphicSource = styled.div`
  p {
    text-align: right;
    font-style: italic;
    font-size: 1.2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  text-align: center;
  padding: 3rem 0;
  .grid-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 1;
  }
  .grid-container:hover {
    opacity: 0.7;
  }
  p {
    text-align: center;
  }
  .stat {
    background: #28a64a;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .grid-container:hover .stat {
    background: #0067b1;
  }
  .description {
  }
`;

export const ThinkingFast = styled.div`
  display: flex;
  text-align: center;
  .col {
    width: 50%;
  }
  .stat {
    font-size: 4rem;
    color: hsl(206, 90%, 20%);
  }
  .description {
    font-size: 2.5rem;
    padding: 1rem;
  }
`;

export const ShrinkingDiv = styled.div`
  display: flex;
  .col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  .left {
    background-image: url(${Blog_Brain_02});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 20rem;
    margin: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    span {
      font-size: 5rem;
    }
    p {
      font-size: 1.5rem;
      padding: 1rem;
    }
  }
  .right {
    color: #0a6bb5;
    p {
      padding: 1.5rem;
      text-align: center;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.5rem;
    }
  }
`;

export const BrainImperfectContainer = styled.div`
  display: flex;
  .col {
    background: rgba(255, 255, 255, 1);
    width: 50%;
    padding: 3rem 0.5rem;
    margin: 15rem 1rem 5rem 1rem;
    position: relative;
    border-radius: 1rem;
    img {
      width: 15rem;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .context {
    border-radius: 1rem;
    color: #0a6bb5;
    padding: 5rem 1rem 1rem 1rem;
    text-align: center;
    .stat {
      font-size: 5rem;
      font-weight: 700;
      margin: 0;
    }
    span {
      font-size: 5rem;
      font-weight: 700;
    }
  }
`;
