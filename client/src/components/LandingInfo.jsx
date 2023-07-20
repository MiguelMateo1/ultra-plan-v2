import StudyImg from '../assets/images/landingPage/study.svg';
import carImg from '../assets/images/landingPage/car.png'
import bikeImg from '../assets/images/landingPage/bike.png'
import Styles from '../assets/styles/LandingInfoCSS';
import { Logo } from '.';
// icons
import { FaAngleUp, FaInstagram, FaLinkedinIn, FaTwitter, 
    FaCalendarCheck, FaIcons, FaSkiing } from "react-icons/fa";

const LandingInfo = () => {
  return (
    <Styles>
    <section className='container'>

        <div className='title-area'>
            <h2>What we do</h2>
            <img src={StudyImg} alt='study-image' className='img study-img' />
        </div>

        <div className='description-area'>
            <div>
                <FaIcons className='desc-icon'/>
                {/* <img src={Logo} alt='study-image' className='img description-img' /> */}
                <h4>Start Journey</h4>
                <p>Embarking on a journey to learn a new skill, be it  learning a new language, musical  instrument, or exploring an intriguing subject, unlocks a world of possibilities for personal growth and fulfillment.</p>
            </div>

            <div>
                <FaCalendarCheck className='desc-icon'/>
                {/* <img src={Logo} alt='study-image' className='img description-img' /> */}
                <h4>track progress</h4>
                <p>Tracking serves as a compass on your journey. By diligently tracking your progress, allowing you to adjust strategies, set realistic goals, and stay motivated.</p>
            </div>

            <div>
                <FaSkiing className='desc-icon'/>
                {/* <img src={Logo} alt='study-image' className='img description-img' /> */}
                <h4>Finish line</h4>
                <p>Get a visual representation of the projected completion date and the total hours dedicated to your new skill. It serves as a compass, helping you stay focused on the tasks that need to be accomplished each day to reach your end goal.</p>
            </div>
        </div>
     </section>

     <section className='footer-container'>

        <div className='footer-content'>
            <aside className='logo-area'>
                <Logo/>
            </aside>
            <h5 className='social-links'>
                <FaInstagram className='social-icon'/><FaLinkedinIn className='social-icon'/>
                <FaTwitter className='social-icon' />
            </h5>
            <a className='footer-btn' href="#">
                <FaAngleUp className='footer-btn-icon'/>
            </a>

        </div>
        <div className='footer-img'>
            <img src={carImg} alt='car-image' className='footer-icon'></img>
            <img src={bikeImg} alt='car-image' className='footer-icon-2'></img>
        </div>
        <div className='footer-end'>
            <p>&copy; UltraPlan 2023</p>
        </div>
    </section>
    </Styles>
  );
};

export default LandingInfo;