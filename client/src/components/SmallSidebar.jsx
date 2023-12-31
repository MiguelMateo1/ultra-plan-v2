import Styles from "../assets/styles/SmallSidebarCSS.js";
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar,getPageName } from "../features/user/userSlice";
import NavLinks from './NavLinks';

const SmallSidebar = () => {
    
    const { sidebarOpen } = useSelector((store) => store.user);
    const dispatch = useDispatch();
  
    const toggle = (e) => {
      const page = e.target.textContent;
      dispatch(toggleSidebar());
      dispatch(getPageName(page));
    };
    return (
      <Styles>
        <div className={ sidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container' }>
          <div className='content'>
            <button className='close-btn' onClick={toggle}>
              <FaTimes />
            </button>
            <header className="logo-div">
                <Logo />
                <h3 className='logo-text'>ltra Plan</h3>
            </header>
            <NavLinks toggleSidebar={toggle} />
          </div>
        </div>
      </Styles>
    );
  };

  export default SmallSidebar;