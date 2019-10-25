import React from 'react';

import App from '../App';

import ReactDOM from 'react-dom';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Index', () => {
    
    it('renders index.js without crashing', () => { 

        const div = document.createElement('div');
        ReactDOM.render(<App />, div);

        expect(ReactDOM.render).toHaveBeenCalledWith(<App/>, div);
    });
    
});
