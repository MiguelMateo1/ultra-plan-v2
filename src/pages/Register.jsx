import { useState } from 'react';
import { Logo, FormRow } from '../components';
import styled from 'styled-components'
import { toast } from 'react-toastify';

const initialState = {
  name: '',
  email: '',
  password: '',
  member: false,
};

function Register() {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // dynamic object keys, [property passed in braket]
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, member } = values;
    if (!email || !password || (!member && !name)) {
      // toast.error('Please fill out all fields');
        toast.warning('Please fill out all fields');
      return;
    }
    if (member) {
      console.log("loging in")
      return;
    }
    console.log("register")
  };

  // toggles the member to true/false in the state
  const toggleMember = () => {
    setValues({ ...values, member: !values.member });
  };

  return (
    <Styles>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.member ? 'Login' : 'Register'}</h3>

        {/* form name field */}
        {!values.member && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>submit</button>
        <p>
          {values.member ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.member ? 'Register' : 'Login'}
          </button>
        </p> 
      </form>
    </Styles>
  );
}

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
  }
  .btn:hover {
    background-color: var(--primary-3);
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--secondary-4);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`
export default Register;