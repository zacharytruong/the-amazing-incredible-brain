import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Blog_Brain_02 from '../media/Blog_Brain_02.png';
import NLI_white from '../media/NLI_white.png';
import {
  BrainIdeaContainer,
  Container,
  LogoContainer,
  NavContainer,
  TitleContainer
} from '../styles/Home';

export default function Home() {
  return (
    <Container>
      <a href="https://www.neuroleadership.com" target="blank">
        <LogoContainer>
          <img src={NLI_white} alt="NLI logo white version" />
        </LogoContainer>
      </a>
      <TitleContainer
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            delay: 0.5,
            duration: 1
          }
        }}
      >
        <div className="title">
          <h1 className="top">The Amazing,</h1>
          <h1 className="bottom">Incredible Brain</h1>
        </div>
        <BrainIdeaContainer>
          <img src={Blog_Brain_02} alt="Blog_Brain_02" />
        </BrainIdeaContainer>
      </TitleContainer>
      <NavContainer>
        <Link to="/author">
          <button>
            Next <BiRightArrowAlt />
          </button>
        </Link>
      </NavContainer>
    </Container>
  );
}
