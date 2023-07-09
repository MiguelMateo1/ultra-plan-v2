import NavLinks from './NavLinks';
import Logo from '../components/Logo';
import Wrapper from '../assets/styles/BigSidebarCSS';
import { useSelector } from 'react-redux';

const BigSidebar = () => {
  const { sidebarOpen } = useSelector((store) => store.user);

  return (
    <Wrapper>
      <div
        className={ sidebarOpen ? 'sidebar-container ' : 'sidebar-container show-sidebar'}>
        <div className='content'>
          <header className="logo-div">
                <Logo />
                <h3 className='logo-text'>ltra Plan</h3>
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
    );
  };

  export default BigSidebar;