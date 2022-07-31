import { motion } from 'framer-motion';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Emma from '../media/emmasarror.png';
import NLI_white from '../media/NLI_white.png';
import { AuthorContainer, Description, NavContainer } from '../styles/Author';
import { Container, LogoContainer } from '../styles/Home';
export default function Author() {
  // Animation variants
  const container = {
    hidden: { opacity: 0, y: '-10rem' },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        duration: 1
      }
    }
  };

  const fade = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        duration: 1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: '-10rem' },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Container>
      <a href="https://www.neuroleadership.com" target="blank">
        <LogoContainer>
          <img src={NLI_white} alt="NLI logo white version" />
        </LogoContainer>
      </a>
      <AuthorContainer variants={container} initial="hidden" animate="show">
        <motion.img variants={item} src={Emma} alt="Emma Sarro, Ph.D." />
        <div className="author-info">
          <motion.h1 variants={item}>By Emma Sarro, Ph.D.</motion.h1>
          <motion.p variants={item}>MARCH 15TH, 2022</motion.p>
        </div>
      </AuthorContainer>
      <Description variants={fade} initial="hidden" animate="show">
        <p>
          We’ve come a long way in our understanding of the brain. From
          believing it acted as a cooling device for our hot hearts during the
          4th century B.C. to thinking the bony bumps on our skulls predicted
          our mental traits, a popular theory up until the early 1900s, our
          thoughts on the organ that allows for thoughts have evolved. We now
          know the brain is our driver for every thought, behavior, and emotion.
          In honor of Brain Awareness Week, we wanted to highlight a few of our
          favorites facts – and myths – about this complex, intriguing organ.
        </p>
      </Description>
      <NavContainer>
        <Link to="/fact">
          <button className="next">
            Next <BiRightArrowAlt />
          </button>
        </Link>
        <Link to="/">
          <button className="back">
            <BiLeftArrowAlt /> Back
          </button>
        </Link>
      </NavContainer>
    </Container>
  );
}
