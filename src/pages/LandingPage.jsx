// images/icons
import landingImg from '../assets/images/landingPage/reading.svg';
import circlesImg from '../assets/images/landingPage/circles.png';
import circle1 from '../assets/images/landingPage/circle1.png';
import circle2 from '../assets/images/landingPage/circle2.png';
import circle3 from '../assets/images/landingPage/circle3.png';
// css
import Styles from '../assets/styles/LandingPageCSS';
// components
import { Logo } from '../components';
import {LandingInfo} from '../components'

const LandingPage = () => {
  return (
    <Styles>
    <div className='landing-page'>
     
      <nav>
        <Logo />
        <h3>ltra Plan</h3>
      </nav>
      
      <div className='main-container'>
      {/* bacground circles img */}
      <img src={circlesImg} className='circles'></img>
      <img src={circle1} className='circle-1'></img>
      <img src={circle2} className='circle-2'></img>
      <img src={circle3} className='circle-3'></img>
        <div className='info'>
          <h1>
            Skill <span>tracking</span> app
          </h1>
          <p>
          Introducing UltraPlan, a web app designed for a user start and 
          track a new skill/subject they want to learn. Helping individuals
          to easily create and monitor the progress of their skill in development,
          giving a visual journey to help plan and stay focus on you goals.
          </p>
          <button>
            Login/Register
          </button>
        </div>
        <img src={landingImg} alt='job hunt' className='img main-img' />
      </div>

      <LandingInfo />

     </div>
    </Styles>
  );
};

export default LandingPage;