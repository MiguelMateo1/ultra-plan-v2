import styled from 'styled-components'

const Styles = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 50px;
    }
    .logo-div {
      display: flex;
    }
    .logo-text {
      padding-top: 12px;
      margin-left: -10px;
      font-weight: 600;
      font-size: 1.4rem;
    }
  .sidebar-container {
    position: fixed;
    margin-left: -100%;
    ${'' /* width: 90%; */}
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-sidebar {
    margin-left: 0%;
    z-index: 20;
    opacity: 1;
  }
  .content {
    background: #fff;
    ${'' /* background: var(--grey-1); */}
    width: 90vw;
    height: 95vh;
    border-radius: var(--border-radius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: darkred;
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-4);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--grey-7);
  }
  .nav-link:hover .icon {
    color: var(--primary-5);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .active {
    color: var(--grey-7);
  }
  .active .icon {
    color: var(--primary-5);
  }
`
export default Styles;
