import { useEffect, useState } from 'react';
import { FormRow } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUser } from '../../features/user/userSlice';
import Styles from '../../assets/styles/ProfileFormCSS';

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: '',
    id: user.id,
  });
  const initialValues = ({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: '',
    id: user.id,
  });

  // set save changes btn disable of active, check if initial state  and stare are =
  const btnToggle = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { first_name, email, last_name } = userData;
    if (!first_name || !email || !last_name ) {
      toast.error('please fill out all fields');
      return;
    }

    dispatch(updateUser(userData, user.token));
    setUserData(prev => {
      return {...prev, password: ""}
    })
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Styles>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className='form-center'>
          <FormRow
            type='text'
            labelText='first name'
            name='first_name'
            value={userData.first_name}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            labelText='last name'
            name='last_name'
            value={userData.last_name}
            handleChange={handleChange}
          />
          <FormRow
            type='email'
            name='email'
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type='password'
            labelText='update password'
            name='password'
            value={userData.password}
            handleChange={handleChange}
          />
          <button type='submit' className='btn btn-block' disabled={btnToggle(initialValues, userData)}>
            {isLoading ? 'Please Wait...' : 'Save changes'}
          </button>
        </div>
      </form>
    </Styles>
  );
};

export default Profile;