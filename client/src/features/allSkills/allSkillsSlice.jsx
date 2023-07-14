import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: true,
  skills: [],
  totalSkills: 0,
  stats: {},
};

// icon and copleted hours in database

// get user skills
export const getAllSkills = createAsyncThunk(
  'sallSkills/getSkills',
  async (userId, thunkAPI) => {
      try {
        const response = await axios.get('http://localhost:8000/get-skills', {headers: {userId: userId}});
        console.log(response)
        return response.data;
      } catch (error) {
        return console.log(error);
      }
  }
);

export const showStats = createAsyncThunk('allSkills/showStats');

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
          state.isLoading = true;
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
          state.isLoading = true;
        })
        .addCase(showStats.fulfilled, (state, { payload }) => {
          state.isLoading = false;
          state.stats = payload.defaultStats;
          state.monthlyApplications = payload.monthlyApplications;
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
  clearAllJobsState,
} = allSkillsSlice.actions;

export default allSkillsSlice.reducer;
