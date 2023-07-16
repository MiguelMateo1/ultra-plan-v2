import styled from 'styled-components'

// css styles
const Styles = styled.section`
  display: grid;
  align-items: center;
  min-height: 100vh;
  .logo {
    width: 60px;
    display: block;
    margin: 0 auto;
    margin-bottom: 1.3rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-3);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
    transition: var(--transition);
    background-color: var(--primary-4);
  }
  .demo-btn {
    background-color: var(--primary-2);
    color: var(--primary-4);
  }
  .btn:hover {
    background-color: var(--primary-3);
  }
  .demo-btn:hover {
    color: var(--grey-05);
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--secondary-4);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`
export default Styles;