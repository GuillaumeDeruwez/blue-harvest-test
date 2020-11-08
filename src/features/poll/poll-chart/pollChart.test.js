import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PollChart } from './pollChart';
import store from '../../../app/store';
import { nameEdited } from '../pollSlice';

jest.mock('react-chartjs-2', () => ({
    Bar: () => null, // add any additional chart types here
}));

describe('testing poll creation section', () => {

    it('should display a poll name correctly', () => {
        window.HTMLCanvasElement.prototype.getContext = () => {}
        const { getByText } = render(
            <Provider store={store}>
                <PollChart />
            </Provider>
        );

        store.dispatch(nameEdited("test name"))

        expect(getByText(/test name/i)).toBeInTheDocument();
    });

    it('should have a correct vote total', () => {
        window.HTMLCanvasElement.prototype.getContext = () => {}
        const { getByTestId } = render(
            <Provider store={store}>
                <PollChart />
            </Provider>
        );

        expect(getByTestId("total")).toBeInTheDocument();
    });
})