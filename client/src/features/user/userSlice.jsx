import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchUrl from '../../utils/axios';
import { toast } from "react-toastify";
import {addUserToLocalStorage,getUserFromLocalStorage,removeUserFromLocalStorage} from '../../utils/localStorage';

const initialState = {
    isLoading: false,
    sidebarOpen: false,
    currentPage: localStorage.getItem('currentPage') || 'stats',
    user: getUserFromLocalStorage(),
};

// register user
export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user) => {
        try {
          const response = await fetchUrl.post('/register', user)
          return response.data
        } catch (err) {
            console.error('Error occurred:', err.response);
            throw err;
      }
    }
);

// login user
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        try {
          const response = await fetchUrl.post('/login', user)
          return response.data
        } catch (err) {
            console.log(err, 'error loging in');
            return toast.error('error loging in, try again later');
        }
    }
);

// update user
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ( user, thunkAPI) => {
    try {
      const response = await fetchUrl.post('/update', user, { 
        headers: { authorization: thunkAPI.getState().user.user.token} 
      });
      if  (response.data.message == 'demo') {
        toast.warning('Demo user cannot perform this action')
        return
      }
      if (response.data.auth == false) {
        thunkAPI.dispatch(userLogout());
        return thunkAPI.rejectWithValue('Unauthorized, Logging Out..');
      }
      return response.data
    } catch (err) {
        console.log(err)
      return toast.error(err.message);
    }
  }
);

// update password
export const updateUserPassord = createAsyncThunk(
  'user/updateUserPassord',
  async ( {password,email} ) => {
    try {
      const response = await fetchUrl.post('/reset/password', {password,email});
      return response.data
    } catch (err) {
        console.log(err)
      return toast.error(err.message);
    }
  }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      getPageName: (state, {payload}) => {
        state.currentPage = payload
        localStorage.setItem('currentPage', payload);
      },
      toggleSidebar: (state) => {
        state.sidebarOpen = !state.sidebarOpen
      },
      userLogout: (state, {payload}) => {
        state.user = null;
        state.sidebarOpen = false;
        state.currentPage = 'stats';
        removeUserFromLocalStorage();
        localStorage.removeItem('currentPage');
        if (payload) {
          toast.success(payload);
        }
      }
    },
    extraReducers: (builder) => {
        builder
         //   login user==========
          .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(loginUser.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            if (payload.message == 'Invalid email or password') {
                toast.warning('Invalid email or password');
                return;
            } 
            const user = payload.result[0];
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`Welcome Back ${user.first_name}`);
          })
          .addCase(loginUser.rejected, (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
          })
        //   register user==========
          .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(registerUser.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            if (payload.message == 'User already exists') {
                toast.warning('User already exists');
                return;
            } 
            if (payload.message == 'error') {
                toast.warning('server error, try again later');
                return;
            } 
            const user = payload.result[0];
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`Hello There ${user.first_name}`);
          })
          .addCase(registerUser.rejected, (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
          })
          // update user
          .addCase(updateUser.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload == 'no token' || action.payload == 'error') {
                toast.warning('Unauthorized..');
                console.log('no token')
              return;
            }
            if (action.payload.message == 'Request failed with status code 500') {
              console.log('reques failed')
              return;
            }
            if (action.payload.message == 'User already exists') {
              toast.success(`User already exists`);
              return;
            }

            const newUser = action.payload.result[0];

            state.user = newUser;
            addUserToLocalStorage(newUser);
            toast.success(`User Updated!`);
          })
          .addCase(updateUser.rejected, (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
          })
        }
});

export const { toggleSidebar, userLogout, getPageName } = userSlice.actions
export default userSlice.reducer;