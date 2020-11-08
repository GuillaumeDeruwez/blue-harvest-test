import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PollCreation } from './PollCreation';
import store from '../../../app/store';
import userEvent from '@testing-library/user-event'
import { answerAdded } from '../pollSlice';

describe('testing poll creation section', () => {
    //test that poll name is correct
    it('should display a poll name placeholder', () => {
        const { getByPlaceholderText } = render(
            <Provider store={store}>
                <PollCreation />
            </Provider>
        );

        expect(getByPlaceholderText(/name your poll/i)).toBeInTheDocument();
    });
    //test that you can edit pollname
    it('should have a working input for poll name', () => {
        const { getByRole } = render(
            <Provider store={store}>
                <PollCreation />
            </Provider>
        );

        userEvent.type(getByRole("textbox", {name: 'poll-name'}), "new name");
        expect(getByRole("textbox", {name: 'poll-name'})).toHaveValue("new name");
    });
    //test that reset button is working

    it('should have a working input for poll name', () => {
        const { getByTitle } = render(
            <Provider store={store}>
                <PollCreation />
            </Provider>
        );

        store.dispatch(answerAdded({
            id: 55,
            answer: "new answer",
            vote: 0
        }))

        expect(store.getState().poll.answers.length).toEqual(3);

        userEvent.click(getByTitle("reset"));
        
        expect(store.getState().poll.answers.length).toEqual(2);
    });
})

