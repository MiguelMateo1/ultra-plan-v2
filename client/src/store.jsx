import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import skillsSlice from './features/skills/skillsSlice';
import allSkillsSlice from './features/allSkills/allSkillsSlice';

export const store = configureStore({
    reducer: {
        user: userSlice,
        skill: skillsSlice,
        allSkills: allSkillsSlice
    },
});