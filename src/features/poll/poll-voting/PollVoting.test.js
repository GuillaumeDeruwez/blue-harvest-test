import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PollVoting } from './PollVoting';
import store from '../../../app/store';
import userEvent from '@testing-library/user-event'

describe('testing poll voting', () => {
    it("should have 2 voting options", () => {
        const { getAllByRole } = render(
            <Provider store={store}>
                <PollVoting />
            </Provider>
        );

        const input = getAllByRole("radio");
        expect(input.length).toEqual(2);
    });

    it("should have working checkboxes", () => {
        const { getAllByRole } = render(
            <Provider store={store}>
                <PollVoting />
            </Provider>
        );

        const input = getAllByRole("radio")[0];
        expect(input).not.checked;
        userEvent.click(input);
        expect(input).checked;
    });

    it("should havea working voting button", () => {
        const { getByRole } = render(
            <Provider store={store}>
                <PollVoting />
            </Provider>
        );

        const button = getByRole("button");
        const input = screen.getAllByRole("radio")[0];
        userEvent.click(input);
        userEvent.click(button);
        expect(store.getState().poll.answers[0].vote).toEqual(1);
    });
})
