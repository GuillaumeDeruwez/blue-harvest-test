import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pollName: "",
    answers: [
        { id: "0", answer: "first answer", vote: 0 },
        { id: "1", answer: "second answer", vote: 0 },
    ]
}

export const pollSlice = createSlice({
    name: "poll",
    initialState,
    reducers: {
        nameEdited: (state, action) => {
            return { ...state, pollName: action.payload }
        },
        answerAdded: (state, action) => {
            if(state.answers.length < 10) {
                state.answers.push(action.payload)
            }
        },
        answerEdited: (state, action) => {
            const arrayIndex = state.answers.findIndex(answer => answer.id === action.payload.id);
            let copyOfAnswers = [...state.answers];
            copyOfAnswers[arrayIndex] = {...copyOfAnswers[arrayIndex], answer: action.payload.value}
            return {...state, answers: copyOfAnswers}
        },
        answerRemoved: (state, action) => {
            return {...state, answers: state.answers.filter(answer => answer.id !== action.payload)}
        },
        answerVoted: (state, action) => {
            const arrayIndex = state.answers.findIndex(answer => answer.id === action.payload);
            state.answers[arrayIndex].vote += 1;
        },
        reset : (state, action) => {
            return initialState
        }
    }
})

export const {nameEdited, answerAdded, answerEdited, answerRemoved, answerVoted, reset} = pollSlice.actions;

export const selectPoll = state => state.poll;

export default pollSlice.reducer;