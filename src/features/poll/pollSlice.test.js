import reducer, { initialState, nameEdited, answerAdded, answerEdited, answerRemoved, answerVoted, reset, selectPollName, selectPollAnswers } from './pollSlice';

describe('reducer, actions and selectors', () => {
    it('should return the initial state on first run', () => {
        // Arrange
        const nextState = initialState;

        // Act
        const result = reducer(undefined, {});

        // Assert
        expect(result).toEqual(nextState);
    });

    it('should change the name of the poll', () => {
        const nextState = reducer(initialState, nameEdited("test name"));
        const rootState = { poll: nextState };
        expect(selectPollName(rootState)).toEqual("test name");
    });

    it('should add an answer to the poll', () => {
        const data = {
            id: "2",
            answer: "testing",
            vote: 0
        };
        const nextState = reducer(initialState, answerAdded(data));
        const rootState = { poll: nextState };
        expect(selectPollAnswers(rootState).length).toEqual(3);
        expect(selectPollAnswers(rootState)[2]).toEqual(data);
    });

    it('should edit an existing answer', () => {
        const data = { id: "0", value: "edited" }
        const nextState = reducer(initialState, answerEdited(data));
        const rootState = { poll: nextState };
        expect(selectPollAnswers(rootState)[0].answer).toEqual("edited");
    });

    it('should remove an existing answer', () => {
        const nextState = reducer(initialState, answerRemoved("0"));
        const rootState = { poll: nextState };
        expect(selectPollAnswers(rootState).length).toEqual(1);
        expect(selectPollAnswers(rootState)).toEqual(expect.not.arrayContaining([{ id: "0", answer: "first answer", vote: 0 }]))
    });
    it('should add a vote to an answer', () => {
        const nextState = reducer(initialState, answerVoted("0"));
        const rootState = { poll: nextState };
        expect(selectPollAnswers(rootState)[0].vote).toEqual(1);
    });
    it('should restore the state', () => {
        const nextState = reducer(initialState, answerVoted("0"));
        const followingState = reducer(nextState, answerRemoved("1"));
        const thirdState = reducer(followingState, nameEdited("chuck"))
        const resetState = reducer(thirdState, reset());
        const rootState = {poll : resetState}
        expect(selectPollAnswers(rootState)).toEqual(initialState.answers);
        expect(selectPollName(rootState)).toEqual(initialState.pollName);
    })
})