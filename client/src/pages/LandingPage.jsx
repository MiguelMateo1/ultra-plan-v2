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
// react
import { Link } from 'react-router-dom';

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
          <p className='intro-text'>
            Introducing UltraPlan, a web app designed to help users start and track
            their progress in learning new skills or subjects. Providing an
            intuitive platform for individuals to create and monitor
            their time spent on a skill, offering a visual journey to aid in planning
            and maintaining focus on their goals.
          </p>
          <Link to='/register' className='btn'>
            Login/Register
          </Link>
        </div>
        <img src={landingImg} alt='job hunt' className='img main-img' />
      </div>

      <LandingInfo />

     </div>
    </Styles>
  );
};

export default LandingPage;