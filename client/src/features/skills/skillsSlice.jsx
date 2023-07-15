import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { showLoading, hideLoading, getAllSkills } from '../allSkills/allSkillsSlice';

const initialState = {
  isLoading: false,
  skill_name: '',
  total_hours: '',
  days_per_week: 1,
  days_per_week_options: [1,2,3,4,5,6,7],
  hour_per_day: 1,
  hour_per_day_options: [1, 2, 3, 4, 5, 6],
  skill_icon: '',
  completed_hours: 0,
  isEditing: false,
  editSkillId: '',
};


// create skill
export const createSkill = createAsyncThunk(
    'skill/createSkill',
    async (skill, thunkAPI) => {
        try {
          const response = await axios.post('http://localhost:8000/add-skill', skill, { 
            headers: { authorization: thunkAPI.getState().user.user.token} 
          });
          thunkAPI.dispatch(clearValues());
          return response.data;
        } catch (error) {
          return console.log(error);
        }
    }
);

// delete skill
export const deleteSkill = createAsyncThunk(
    'skill/deleteSkill',
    async (skillId, thunkAPI) => {
      thunkAPI.dispatch(showLoading());
        try {
          const response = await axios.delete(`http://localhost:8000/skills/${skillId}`, { 
            headers: { authorization: thunkAPI.getState().user.user.token} 
          });
          thunkAPI.dispatch(getAllSkills());
          return response.data
        } catch (err) {
            thunkAPI.dispatch(hideLoading())
            return thunkAPI.rejectWithValue(err.response);
        }
    }
);

// edit skill
export const editSkill = createAsyncThunk(
  'skill/editSkill',
  async ( {skillId, skill}, thunkAPI) => {
    try {
      const response = await axios.patch(`http://localhost:8000/skills/${skillId}`, skill, { 
        headers: { authorization: thunkAPI.getState().user.user.token} 
      });
      thunkAPI.dispatch(clearValues());
      return response.data
    } catch (err) {
        console.log(err)
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

const skillsSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return initialState
    },
    setEditSkill: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSkill.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSkill.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload)
        if (payload.auth == false) {
          toast.success('Unauthorized, re-login');
          return
        }
        toast.success('Skill Created');
      })
      .addCase(createSkill.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteSkill.fulfilled, (state, { payload }) => {
        toast.success('Job deleted');
      })
      .addCase(deleteSkill.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(editSkill.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editSkill.fulfilled, (state, {payload}) => {
        console.log(payload)
        state.isLoading = false;
        if (payload == 'no token') {
          toast.success('not able to update, please login again');
           return
        }
        toast.success('Skill Modified...');
      })
      .addCase(editSkill.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { handleChange, clearValues, setEditSkill } = skillsSlice.actions;

export default skillsSlice.reducer;
