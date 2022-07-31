import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import { QA } from '../data/Fiction';
import NLI_People_General_alt from '../media/NLI_People_General_alt.png';
import NLI_white from '../media/NLI_white.png';
import { NavContainer } from '../styles/Author';
import { Footer, InfoGraphicSource } from '../styles/Fact';
import {
  BottomImage, InfoGraphic, MainTitle,
  MasonryStyle, TitleContainer
} from '../styles/Fiction';
import { Container, LogoContainer } from '../styles/Home';

export default function Fiction() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    800: 2,
    500: 1
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        duration: 1
      }
    }
  };

  const motionItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };
  return (
    <Container>
      <a href="https://www.neuroleadership.com" target="blank">
        <LogoContainer>
          <img src={NLI_white} alt="NLI logo white version" />
        </LogoContainer>
      </a>
      <TitleContainer>
        <h1>FICTION</h1>
        <MainTitle></MainTitle>
      </TitleContainer>
      <MasonryStyle variants={container} initial="hidden" animate="show">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {QA &&
            QA.map((item) => (
              <InfoGraphic variants={motionItem} key={item.id}>
                <div className="context">
                  <p className="top">{item.myth}</p>
                  <p className="bottom">{item.fact}</p>
                </div>
              </InfoGraphic>
            ))}
        </Masonry>
      </MasonryStyle>
      <InfoGraphicSource>
        <p>
          Source: Northwestern Medicine, Entrepreneur, PLOS ONE, Psychological
          Science, Science Direct, Brainline.
        </p>
      </InfoGraphicSource>
      <BottomImage src={NLI_People_General_alt} alt="NLI_People_General_alt" />
      <Footer>
        <NavContainer>
          <Link to="/the-amazing-incredible-brain/">
            <button className="next">
              Start Over <BiRightArrowAlt />
            </button>
          </Link>
          <Link to="/the-amazing-incredible-brain/fact">
            <button className="back">
              <BiLeftArrowAlt /> Back
            </button>
          </Link>
        </NavContainer>
      </Footer>
    </Container>
  );
}
