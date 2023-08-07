import NavLinks from './NavLinks';
import Logo from '../components/Logo';
import Wrapper from '../assets/styles/BigSidebarCSS';
import { useDispatch, useSelector } from 'react-redux';
import { getPageName } from "../features/user/userSlice";

const BigSidebar = () => {
  const { sidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const setPageName = (e) => {
    const page = e.target.textContent;
    dispatch(getPageName(page))
  };

  return (
    <Wrapper>
      <div
        className={ sidebarOpen ? 'sidebar-container ' : 'sidebar-container show-sidebar'}>
        <div className='content'>
          <header className="logo-div">
                <Logo />
                <h3 className='logo-text'>ltra Plan</h3>
          </header>
          <NavLinks toggleSidebar={setPageName}/>
        </div>
      </div>
    </Wrapper>
    );
  };

  export default BigSidebar;