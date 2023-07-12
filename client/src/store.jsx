import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import skillsSlice from './features/skills/skillsSlice';

export const store = configureStore({
    reducer: {
        user: userSlice,
        skill: skillsSlice,
    },
});