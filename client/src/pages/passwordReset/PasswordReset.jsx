import Styles from '../../assets/styles/RegisterCSS';
import { useState } from 'react';
import { Logo, FormRow, Loader } from '../../components';
import { toast } from 'react-toastify';
// axios
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../features/user/resetPasswordSlice';
import { Link, useNavigate } from 'react-router-dom';
import fetchUrl from '../../utils/axios';

const initialState = {
  email: '',
};


function PasswordReset() {
  const [values, setValues] = useState(initialState);
  const { isLoading} = useSelector((store) => store.reset);
  const [emailExists, setEmailExists] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setValues({ ...values, email: value });
  };

//   checks email and navigates to otp page
  function nagigateToOtp(e) {
    e.preventDefault();
    const { email } = values;

    if (email) {
        checkEmail(email).then((isValidEmail) => {
            if (isValidEmail) {
                const otp = Math.floor(Math.random() * 9000 + 1000);

                dispatch(resetPassword({ otp,email}))
                navigate("/otp")
                return;
            } else {
                return toast.warning('Email does not exist');
            }
        });
    } else {
        return toast.warning('Please fill out all fields');
    }
  }


  function checkEmail(email) {
    return fetchUrl.get('/check', { params: { email }})
      .then(response => {
        setEmailExists(response.data.exists);
        return response.data.exists;
      })
      .catch(error => {
        console.error('Error checking email:', error);
        return false;
      });
  }

  return (
    <Styles>
      {isLoading && <Loader />}
      <form className='form' onSubmit={nagigateToOtp}>
        <Logo />
        <h3 style={{marginBottom: '40px'}} >Password Reset</h3>
        {/* email field */}
        <FormRow
          type='email'
          name='email'
          labelText='Enter your email address'
          value={values.email}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          Reset
        </button>
        <p>
          <Link to='/landing' className='member-btn'>
            Back to home page
          </Link>
        </p> 
      </form>
    </Styles>
  );
}

export default PasswordReset;