import Styles from '../../assets/styles/RegisterCSS';
import { useState } from 'react';
import { Logo, FormRow, Loader } from '../../components';
import { toast } from 'react-toastify';
// axios
import { useDispatch, useSelector } from 'react-redux';
import { updateUserPassord } from '../../features/user/userSlice';
import { Link, useNavigate } from 'react-router-dom';

const initialState = {
  password: '',
  passwordComfirm: ''
};


function Reset() {
  const [values, setValues] = useState(initialState);
  const {email, isLoading} = useSelector((store) => store.reset);
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
        const { passwordComfirm, password } = values;
        if (!passwordComfirm || !password) {

            toast.warning('Please fill out all fields');
        return;
        }
        if (passwordComfirm != password) {
            toast.warning("password don't match, try again");
            return;
        }
        
        dispatch(updateUserPassord({ password,email}))
        toast.success(`Password updated successfully`); 
        navigate('/register')
    }


  return (
    <Styles>
      {isLoading && <Loader />}
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3 style={{marginBottom: '40px'}}>Reset password</h3>
        {/* password field */}
        <FormRow
          type='password'
          labelText = 'New password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        {/* password comfimed field */}
        <FormRow
          type='password'
          labelText = 'Confirm password'
          name='passwordComfirm'
          value={values.passwordComfirm}
          handleChange={handleChange}
        />
          <button type='submit' className='member-btn'>
            Reset Password
          </button>
      </form>
    </Styles>
  );
}

export default Reset;