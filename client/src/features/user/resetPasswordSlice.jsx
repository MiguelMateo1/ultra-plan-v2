import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchUrl from '../../utils/axios';
import { toast } from "react-toastify";

const initialState = {
    email: '',
    otp: '',
    isLoading: false
  };

// resset password
export const resetPassword = createAsyncThunk(
    'reset/resetPassword',
    async ({otp,email},thunkAPI) => {
        try {
          const response = await fetchUrl.post('/send_recovery_email', {otp,email})
          console.log(response)
          return response.data
        } catch (err) {
            console.log(err, 'err reseting password');
            toast.error('error reseting password, try again later');
            return thunkAPI.rejectWithValue('Error resetting password, try again later');
        }
    }
  );


const resetPasswordSlice = createSlice({
    name: 'reset',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
         //   login user==========
          .addCase(resetPassword.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(resetPassword.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.otp = payload.otp;
            state.email = payload.email;
          })
          .addCase(resetPassword.rejected, (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
          })
        }
});

// export const { userLogout } = resetPasswordSlice.actions
export default resetPasswordSlice.reducer;