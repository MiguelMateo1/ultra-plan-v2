import styled from 'styled-components'

const Styles = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--grey-1);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: var(--transition);
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
      padding-top: 5px;
      margin-left: -10px;
      font-weight: 600;
      font-size: 1.4rem;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
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
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link:hover {
      background: #fff;
      padding-left: 3rem;
      color: var(--grey-7);
    }
    .nav-link:hover .icon {
      color: var(--primary-7);
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
      color: var(--primary-7);
    }
  }
`
export default Styles;
