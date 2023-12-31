import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import skillsSlice from './features/skills/skillsSlice';
import allSkillsSlice from './features/allSkills/allSkillsSlice';
import resetPasswordSlice from './features/user/resetPasswordSlice';

export const store = configureStore({
    reducer: {
        user: userSlice,
        skill: skillsSlice,
        allSkills: allSkillsSlice,
        reset: resetPasswordSlice 
    },
    devTools: false
});