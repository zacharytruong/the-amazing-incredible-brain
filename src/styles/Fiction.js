import styled from 'styled-components';
import { size } from '../data/Device';
import {motion} from 'framer-motion'

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  h1 {
    padding-left: 5rem;
    font-size: 6rem;
    letter-spacing: 5rem;
    text-shadow: 2px 2px 2px #000;
    background: hsl(23, 89%, 54%);
  }
  @media screen and (max-width: ${size.medium}) {
    h1 {
      font-size: 4rem;
      letter-spacing: 2rem;
    }
  }
`;

export const MainTitle = styled.div`
  height: 10rem;
  border-style: solid;
  border-width: 50px 0 50px 50px;
  border-color: transparent transparent transparent hsl(23, 89%, 54%);
`;

export const MasonryStyle = styled(motion.div)`
  padding: 2rem;
  margin-bottom: 25rem;
  .my-masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: -3rem; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 3rem; /* gutter size */
    background-clip: padding-box;
  }
`;

export const InfoGraphic = styled(motion.div)`
  max-width: 70rem;
  margin: 5rem auto;
  padding: 5rem 1.5rem 1.5rem 1.5rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0.8rem 3.2rem 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(0.5rem);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 1rem;
  text-align: center;
  .context {
    position: relative;
  }
  .top {
    background: hsl(212, 100%, 24%);
    border-radius: 1rem;
    padding: 2rem;
    width: 65%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .bottom {
    padding: 8rem 1rem 5rem 1rem;
    background: white;
    color: hsl(206, 90%, 30%);
    border-radius: 1rem;
    margin: 0;
  }
`;

export const BottomImage = styled.img`
  position: absolute;
  opacity: 0.5;
  width: 80%;
  margin: 0 auto;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
`;
