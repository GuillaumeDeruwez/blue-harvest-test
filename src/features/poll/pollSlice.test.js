import reducer, {initialState, nameEdited, answerAdded, answerEdited, answerRemoved, answerVoted, reset, selectPollName, selectPollAnswers} from './pollSlice';

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
          const data = "test name";
          const nextState = reducer(initialState, nameEdited(data));
          const rootState = {poll:nextState};
          expect(selectPollName(rootState)).toEqual("test name");
      });

      it('should add an answer to the poll', () => {
        const data = {
            id: "2",
            answer: "testing",
            vote: 0
        };
        const nextState = reducer(initialState, answerAdded(data));
        const rootState = {poll:nextState};
        expect(selectPollAnswers(rootState).length).toEqual(3);
        expect(selectPollAnswers(rootState)[2]).toEqual(data);
    });
})