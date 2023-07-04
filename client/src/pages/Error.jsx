// import { Link } from 'react-router-dom';
import img from '../assets/images/track.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <Styles className='page'>
      <div>
        <img src={img} alt='error-page-image' />
        <h3>Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </Styles>
  );
};

const Styles = styled.main`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-left: 1.3rem;
  }
  h3 {
    margin-top: -2rem;
    color: var(--secondary-6)
  }
  p {
    margin-bottom: .5rem;
    color: var(--grey-5);
  }
  a {
    color: var(--primary-7);
    text-decoration: underline;
    text-transform: capitalize;
  }
`

export default Error;
