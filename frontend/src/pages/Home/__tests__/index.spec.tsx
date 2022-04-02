import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import Home from '../index';

const mockStore = configureStore([]);

describe("Home Component", () => {

    let store;
    beforeEach(() => {
        store = mockStore({
            myState: 'sample text',
        });
    });

    store.dispatch = jest.fn();

    it.todo("should render the search box");

    it.todo("should render the list of items");
});