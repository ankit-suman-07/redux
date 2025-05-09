import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Habit {
    id: string;
    name: string;
    frequency: "daily" | "weekly";
    completedDates: string[];
    startedAt: string;
}

interface HabitState {
    habits: Habit[];
}

const initialState: HabitState = {
    habits: [],
}

const habitSlice = createSlice({
    name: "habits",
    initialState,
    reducers:{
        addHabit: (state, action:PayloadAction<{name: string, frequency: "daily" | "weekly"}>) => {
            const newHabit: Habit = {
                id: Date.now().toString(),
                name: action.payload.name,
                frequency: action.payload.frequency,
                completedDates: [],
                startedAt: new Date().toISOString(),
            }
            state.habits.push(newHabit);
            localStorage.setItem("habits", JSON.stringify(state.habits));
            }
        },
    })

export const {addHabit} = habitSlice.actions;
export default habitSlice.reducer;