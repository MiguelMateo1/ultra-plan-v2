import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchUrl from '../../utils/axios';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: true,
  skills: [],
  totalSkills: 0,
  stats: {},
};

// get user skills
export const getAllSkills = createAsyncThunk(
  'allSkills/getAllSkills',
  async (userId) => {
      try {
        const response = await fetchUrl.get('/get-skills', {headers: {userId: userId}});
        return response.data;
      } catch (error) {
        return console.log(error);
      }
  }
);

// showStats
export const showStats = createAsyncThunk(
  'allSkills/showStats',
  async (userId) => {
      try {
        const response = await fetchUrl.get('/skills/stats', {headers: {userId: userId}});
        return response.data;
      } catch (error) {
        console.log(error);
        return toast.error(error.message);
      }
  }
);

// log hours
export const logHours = createAsyncThunk(
  'allSkills/logHours',
  async ({id, userId, month, hour}, thunkAPI) => {
      try {
        const response = await fetchUrl.patch(`/log`, {id, userId, month, hour});
        thunkAPI.dispatch(showStats(userId));
        thunkAPI.dispatch(getAllSkills(userId));
        return response
      } catch (error) {
        console.log(error);
        return toast.error(error.message);
      }
  }
);

// reset chart hours
export const resetChart = createAsyncThunk('allSkills/resetChart',
  async (userId, thunkAPI) => {
      try {
        const response = await fetchUrl.patch(`/reset`, {userId});
        thunkAPI.dispatch(showStats(userId));
        return response.data
      } catch (error) {
        return console.log(error);
      }
  }
);

const allSkillsSlice = createSlice({
  name: 'allSkills',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    }},
    extraReducers: (builder) => {
      builder
        .addCase(getAllSkills.pending, (state) => {
          // state.isLoading = true;
        })
        .addCase(getAllSkills.fulfilled, (state, { payload }) => {
          state.isLoading = false;
          state.skills = payload;
          state.totalSkills = payload.length;
        })
        .addCase(getAllSkills.rejected, (state, { payload }) => {
          state.isLoading = false;
          toast.error(payload);
        })
        .addCase(showStats.pending, (state) => {
          // state.isLoading = true;
        })
        .addCase(showStats.fulfilled, (state, { payload }) => {
          state.isLoading = false;
          state.stats = payload;
        })
        .addCase(showStats.rejected, (state, { payload }) => {
          state.isLoading = false;
          toast.error(payload);
        });
    },
});

export const {
  showLoading,
  hideLoading,
  handleChange,
} = allSkillsSlice.actions;

export default allSkillsSlice.reducer;
