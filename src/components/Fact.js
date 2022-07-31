import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { NeuronsNumbers } from '../data/NeuronsNumbers';
import Brain_Graphic_10_percent_smaller from '../media/Brain_Graphic_10_percent_smaller.png';
import Brain_Graphic_imperfect_brain from '../media/Brain_Graphic_imperfect_brain.png';
import Brain_Icon_CognitiveBias from '../media/Brain_Icon_CognitiveBias.png';
import Brain_Icon_Decisions from '../media/Brain_Icon_Decisions.png';
import ForkAndKnife from '../media/ForkAndKnife.png';
import NLI_Icon_FatPosi from '../media/NLI_Icon_FatPosi.png';
import NLI_Icon_Numbers from '../media/NLI_Icon_Numbers.png';
import NLI_Icon_Spedometer from '../media/NLI_Icon_Spedometer.png';
import NLI_white from '../media/NLI_white.png';
import { NavContainer } from '../styles/Author';
import {
  BrainImperfectContainer,
  Footer,
  Grid,
  InfoGraphic,
  InfoGraphicCol,
  InfoGraphicSlogan,
  InfoGraphicSource,
  InfoGraphicTitle,
  MainTitle,
  ShrinkingDiv,
  ThinkingFast,
  TitleContainer
} from '../styles/Fact';
import { Container, LogoContainer } from '../styles/Home';

export default function Fact() {
  return (
    <Container>
      <a href="https://www.neuroleadership.com" target="blank">
        <LogoContainer>
          <img src={NLI_white} alt="NLI logo white version" />
        </LogoContainer>
      </a>
      <TitleContainer>
        <h1>FACTS</h1>
        <MainTitle></MainTitle>
      </TitleContainer>
      <InfoGraphic
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1
          }
        }}
      >
        <InfoGraphicTitle>
          <img src={NLI_Icon_FatPosi} alt="NLI_Icon_FatPosi" />
          <h2>The fatter the brain, the healthier it is.</h2>
        </InfoGraphicTitle>
        <InfoGraphicCol>
          <div className="context">
            <p>
              Fat makes up <span>50%</span> of the dry weight of the brain
            </p>
          </div>
          <div className="more-context">
            <img src={ForkAndKnife} alt="" />
            <p>A severe, no fat diet can lead to neurons eating themselves</p>
          </div>
        </InfoGraphicCol>
        <InfoGraphicSlogan>
          <p>
            If you’re trying to lose weight and deprive yourself of fat, your
            brain may shrink
          </p>
        </InfoGraphicSlogan>
        <InfoGraphicSource>
          <p>
            Sources: National Institutes of Health, Smithosian, Harvard
            University
          </p>
        </InfoGraphicSource>
      </InfoGraphic>
      <InfoGraphic
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1
          }
        }}
      >
        <InfoGraphicTitle>
          <img src={NLI_Icon_Numbers} alt="NLI_Icon_Numbers" />
          <h2>Neurons by the numbers:</h2>
        </InfoGraphicTitle>
        <Grid>
          {NeuronsNumbers &&
            NeuronsNumbers.map((data) => (
              <div key={data.id} className="grid-container">
                <div className="stat">
                  <p>{data.stat}</p>
                </div>
                <div className="description">
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
        </Grid>
        <InfoGraphicSource>
          <p>Sources: Discover Magazine, University of Southern California</p>
        </InfoGraphicSource>
      </InfoGraphic>
      <InfoGraphic
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1
          }
        }}
      >
        <InfoGraphicTitle>
          <img src={NLI_Icon_Spedometer} alt="NLI_Icon_Spedometer" />
          <h2>Thinking fast</h2>
        </InfoGraphicTitle>
        <ThinkingFast>
          <div className="col">
            <p className="stat">248 mph</p>
            <p className="description">The max speed of a Formula 1 race car</p>
          </div>
          <div className="col">
            <p className="stat">270 mph</p>
            <p className="description">The speed at which neurons travel</p>
          </div>
        </ThinkingFast>
        <InfoGraphicSlogan>
          <h3>
            Neurons are so active they can form more than 2,000 different
            thoughts an hour, up to 50,000 thoughts a day
          </h3>
        </InfoGraphicSlogan>
        <InfoGraphicSource>
          <p>Sources: Discover Magazine, University of Southern California</p>
        </InfoGraphicSource>
      </InfoGraphic>
      <InfoGraphic
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1
          }
        }}
      >
        <InfoGraphicTitle>
          <img
            src={Brain_Graphic_10_percent_smaller}
            alt="Brain_Graphic_10_percent_smaller"
          />
          <h2>Signs of shrinking:</h2>
        </InfoGraphicTitle>
        <ShrinkingDiv>
          <div className="col left">
            <p>
              <span>10%</span>The decrease in our brain size compared to our
              ancestors, due to use becoming more efficient.
            </p>
          </div>
          <div className="col right">
            <p>
              Relying on our phone’s GPS is causing our hippocampus, our brain’s
              form of GPS, to shrink.
            </p>
            <p>
              Cab drivers have larger hippocampus, because of the mental workout
              they get while navigating thousands of streets
            </p>
          </div>
        </ShrinkingDiv>
        <InfoGraphicSource>
          <p>Sources: Discover, University of Southern California</p>
        </InfoGraphicSource>
      </InfoGraphic>
      <InfoGraphic
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1
          }
        }}
      >
        <InfoGraphicTitle>
          <img
            src={Brain_Graphic_imperfect_brain}
            alt="Brain_Graphic_imperfect_brain"
          />
          <h2>Our brains are (im)-perfect</h2>
        </InfoGraphicTitle>
        <BrainImperfectContainer>
          <div className="col">
            <img src={Brain_Icon_CognitiveBias} alt="" />
            <div className="context">
              <p className="stat">200</p>
              <p>
                Number of known cognitive biases and distortions that cause us
                to think and act irrationally.
              </p>
              <p>
                Your memories are unreliable and change over time. Emotions,
                motivation, cues, context and frequency of use can all affect
                how accurately you remember something.
              </p>
            </div>
          </div>
          <div className="col">
            <img src={Brain_Icon_Decisions} alt="Brain_Icon_Decisions" />
            <div className="context">
              <p>
                Up to <span>90%</span>
              </p>
              <p>Of our decisions take place in our subconscious.</p>
            </div>
          </div>
        </BrainImperfectContainer>
        <InfoGraphicSource>
          <p>
            Source: Psychology Today, Northwestern University, TheTeamW (Susan
            Weinschenk, Ph.D).
          </p>
        </InfoGraphicSource>
      </InfoGraphic>
      <Footer>
        <NavContainer>
          <Link to="/fiction">
            <button className="next">
              Next <BiRightArrowAlt />
            </button>
          </Link>
          <Link to="/author">
            <button className="back">
              <BiLeftArrowAlt /> Back
            </button>
          </Link>
        </NavContainer>
      </Footer>
    </Container>
  );
}
