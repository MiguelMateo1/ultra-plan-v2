import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {addUserToLocalStorage,getUserFromLocalStorage,removeUserFromLocalStorage} from '../../utils/localStorage';

// const navigate = useNavigate()
const initialState = {
    isLoading: false,
    sidebarOpen: false,
    user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user, thunkAPI) => {
        try {
          const response = await axios.post('http://localhost:8000/api/register', user)
        //   console.log(response);
          return response.data
        } catch (err) {
            console.error('Error occurred:', err.response);
            throw err;
      }
    }
)

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        try {
          const response = await axios.post('http://localhost:8000/api/login', user)
        //   console.log(JSON.stringify(user));
          return response.data
        } catch (err) {
            console.log(err, 'error loging in');
            thunkAPI.rejectWithValue(err.response);
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      toggleSidebar: (state) => {
        state.sidebarOpen = !state.sidebarOpen
      },
      userLogout: (state, {payload}) => {
        state.user = null;
        state.sidebarOpen = false;
        removeUserFromLocalStorage();
        console.log(payload)
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
        }
});

export const { toggleSidebar, userLogout } = userSlice.actions
export default userSlice.reducer;