import Styles from '../assets/styles/RegisterCSS';
import { useState, useEffect } from 'react';
import { Logo, FormRow, Loader } from '../components';
import { toast } from 'react-toastify';
// axios
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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
      return
    }
  };

  // if user is logine/register or is already login(localState) naviget to home/dashboard
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 500);
    }
  }, [user]);

  // toggles member to true/false in the state
  const toggleMember = () => {
    setMember(!member);
  };

  return (
    <Styles>
      {isLoading && <Loader />}
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
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          {member ? 'Login' : 'Register'}
        </button>
        <button type='button' className='btn btn-block demo-btn' disabled={isLoading}
          onClick={() =>
            dispatch(
              loginUser({ email: 'test@user.com', password: '12345' })
            )
          }
        >
          Demo User
        </button>
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

export default Register;