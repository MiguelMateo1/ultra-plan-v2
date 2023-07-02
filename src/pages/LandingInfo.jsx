import StudyImg from '../assets/images/landingPage/study.svg';
import carImg from '../assets/images/landingPage/car.png'
import bikeImg from '../assets/images/landingPage/bike.png'
import Styles from '../assets/styles/LandingInfoCSS';
import { Logo } from '../components';
// icons
import { FaAngleUp, FaInstagram, FaLinkedinIn, FaTwitter, 
    FaCalendarCheck, FaIcons, FaSkiing } from "react-icons/fa";

const Landing = () => {
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies lacus. Cursus eget nunc scelerisque viverra mauris in</p>
            </div>

            <div>
                <FaCalendarCheck className='desc-icon'/>
                {/* <img src={Logo} alt='study-image' className='img description-img' /> */}
                <h4>track progress</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies lacus. Cursus eget nunc scelerisque viverra mauris in</p>
            </div>

            <div>
                <FaSkiing className='desc-icon'/>
                {/* <img src={Logo} alt='study-image' className='img description-img' /> */}
                <h4>Finish line</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies lacus.</p>
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
            <button className='footer-btn'>
                <FaAngleUp className='footer-btn-icon'/>
            </button>

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

export default Landing;