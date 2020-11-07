import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Simple } from './Simple';
import store from '../../app/store';
import { nameEdited } from './pollSlice';
import userEvent from '@testing-library/user-event'

describe('testing component with selector simply', () => {
    //learning how to dispatch in testing component
    it("should display a simple name", () => {

        const { getByText } = render(
            <Provider store={store}>
                <Simple />
            </Provider>
        );

        store.dispatch(nameEdited("testing name"));
        expect(getByText(/testing name/i)).toBeInTheDocument();
    });

    // learning how to mock user event
    it("should test a click event", () => {

        const { getByText } = render(
            <Provider store={store}>
                <Simple />
            </Provider>
        );

        userEvent.click(screen.getByText(/click me/i));
        expect(getByText(/Hello/i)).toBeInTheDocument();

    });
})