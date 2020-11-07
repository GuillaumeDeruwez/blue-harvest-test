import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PollAnswer } from './PollAnswer';
import store from '../../../app/store';
import userEvent from '@testing-library/user-event'
import { answerAdded } from '../pollSlice';

describe('testing poll answers deleting and editing', () => {
    it('should display two answers initialy', () => {
        const { getAllByRole } = render(
            <Provider store={store}>
                <PollAnswer />
            </Provider>
        );

        expect(getAllByRole("textbox").length).toEqual(2);
    });
    it('should have the delete button disabled', () => {
        const { getAllByRole } = render(
            <Provider store={store}>
                <PollAnswer />
            </Provider>
        );

        expect(getAllByRole("button")[0]).toHaveAttribute("disabled");
    });
    it('should be able to put in input', () => {
        const { getAllByRole } = render(
            <Provider store={store}>
                <PollAnswer />
            </Provider>
        );

        const input = getAllByRole("textbox")[0];

        userEvent.type(input, "string");
        expect(input).toHaveValue("string");
    });

    it('should have working button if 3 inputs are present', () => {
        const { getAllByRole } = render(
            <Provider store={store}>
                <PollAnswer />
            </Provider>
        );

        store.dispatch(answerAdded({
            id: "3",
            answer: "new answer",
            vote: 0
        }));

        let button = getAllByRole("button")[0];

        expect(getAllByRole("textbox").length).toEqual(3);
        expect(button).not.toHaveAttribute("disabled");

        userEvent.click(button);

        expect(getAllByRole("textbox").length).toEqual(2);
    });
});

