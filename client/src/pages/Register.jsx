import { useState } from 'react';
import { Logo, FormRow } from '../components';
import styled from 'styled-components'
import { toast } from 'react-toastify';
// axios
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';


const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
};


function Register() {
  const [values, setValues] = useState(initialState);
  const [member, setMember] = useState(true)
  const {user, isLoading} = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;

    // dynamic object keys, [property passed in braket]
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { first_name, last_name, email, password } = values;
    if (!email || !password || (!member && !first_name) || (!member && !last_name)) {
      // toast.error('Please fill out all fields');
        toast.warning('Please fill out all fields');
      return;
    }
    
    if (member) {
      dispatch(loginUser(values))
      return
    }

    if (!member) {
      dispatch(registerUser(values))
      console.log(values)
      return
    }

    // axios.post('http://localhost:8000/api/post', values)
    //   .then((result) => {
    //     console.log(result)
    //     navigate(`/${values.first_name}`);
    //   })
    //   .catch(err => console.log(err));
  };

  // toggles member to true/false in the state
  const toggleMember = () => {
    setMember(!member);
  };

  return (
    <Styles>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{member ? 'Login' : 'Register'}</h3>

        {/* form name field */}
        {!member && (
          <FormRow
            type='text'
            labelText='first name'
            name='first_name'
            value={values.first_name}
            handleChange={handleChange}
          />
        )}
        {!member && (
          <FormRow
            type='text'
            labelText='last name'
            name='last_name'
            value={values.last_name}
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
        <button type='submit' className='btn btn-block' disabled={isLoading}>submit</button>
        <p>
          {member ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {member ? 'Register' : 'Login'}
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