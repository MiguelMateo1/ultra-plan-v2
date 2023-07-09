import styled from 'styled-components'

const Styles = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  background: #fff;
  background: var(--grey-4);
  .logo {
    display: flex;
    align-items: center;
    width: 55px;
  }
  .logo-text {
    display: none;
    margin: 0;
  }
  .logo-div {
    margin-left: 38px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-5);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .btn-container {
    position: relative;
    margin-top: 8px;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 5px;
    gap: 0 5px;
    position: relative;
    text-transform: capitalize;
    border-radius: 15px;
    background: var(--secondary-6);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--secondary-1);
    box-shadow: var(--box-shadow);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: 10px;
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-7);
    letter-spacing: var(--letterSpacing);
    font-weight: 600;
    text-transform: capitalize;
    cursor: pointer;
  }
  
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
    .logo-div {
    margin-left: 0px;
  }
  }
`
export default Styles;
