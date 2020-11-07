import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AddAnswerForm } from './AddAnswerForm';
import store from '../../../app/store';
import userEvent from '@testing-library/user-event'
import { answerAdded } from '../pollSlice';

describe('testing Add answer form', () => {
    it("should display a placeholder", () => {

        const { getByPlaceholderText } = render(
            <Provider store={store}>
                <AddAnswerForm />
            </Provider>
        );

        expect(getByPlaceholderText(/Type an answer/i)).toBeInTheDocument();
    });

    it("should put value of input in state when input changes", () => {

        const { getByRole } = render(
            <Provider store={store}>
                <AddAnswerForm />
            </Provider>
        );

        userEvent.type(screen.getByPlaceholderText(/Type an answer/i), "string");
        expect(getByRole("textbox")).toHaveValue("string");

    });

    it("should change the store when button is pressed", () => {

        const { getByRole } = render(
            <Provider store={store}>
                <AddAnswerForm />
            </Provider>
        );

        userEvent.type(screen.getByPlaceholderText(/Type an answer/i), "string");
        userEvent.click(getByRole("button"));
        expect(store.getState().poll.answers.length).toEqual(3);

    });

    it("should disable the button if more than 10 answer", () => {

        const { getByRole } = render(
            <Provider store={store}>
                <AddAnswerForm />
            </Provider>
        );

        for (let index = 0; index < 10; index++) {
            store.dispatch(answerAdded({
                id: index,
                answer: `answer${index}`,
                vote: 0
            }))
        }

        expect(getByRole("button")).toHaveAttribute("disabled");

    })
})