import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id : "0", question : "test", vote: 0}
]

export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        questionAdded: (state, action) => {
            state.push(action.payload)
        },
        questionChanged: (state, action) => {
            const arrayIndex = state.findIndex(question => question.id === action.payload.id)
            let copyOfState = [...state];
            copyOfState[arrayIndex] = {...copyOfState[arrayIndex], question: action.payload.value}
            return copyOfState
        },
        questionRemoved: (state, action) => {
            const copyOfState = [...state];
            return copyOfState.filter(question => question.id !== action.payload)
        }
    }
})

export const { questionAdded, questionRemoved, questionChanged} = testSlice.actions;

export const selectQuestions = state => state.test;

export default testSlice.reducer;