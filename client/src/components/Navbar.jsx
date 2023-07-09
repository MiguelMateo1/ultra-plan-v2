import Styles from "../assets/styles/NavbarCSS";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, userLogout } from "../features/user/userSlice";

const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false);
    const { user } = useSelector((store) => store.user);
    const dispatch = useDispatch();
  
    return (
        <Styles>
            <div className='nav-center'>
                <button type='button' className='toggle-btn' onClick={() => dispatch(toggleSidebar())}>
                    <FaAlignLeft />
                </button>
                <div className="logo-div">
                    <Logo />
                    <h3 className='logo-text'>dashboard</h3>
                </div>
                <div className='btn-container'>
                    <button
                        type='button'
                        className='btn'
                        onClick={() => setShowLogout(!showLogout)}>
                        <FaUserCircle />
                            {user && user.first_name}
                        <FaCaretDown />
                    </button>
                    <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
                        <button
                            type='button'
                            className='dropdown-btn'
                            onClick={() => dispatch(userLogout('Logged out succesfully'))}>
                            logout
                        </button>
                    </div>
                </div>
            </div>
        </Styles>
    );
  };

  export default Navbar;