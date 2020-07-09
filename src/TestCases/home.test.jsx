import React from 'react';
import Home from '../Components/home';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

it("Render", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Home /></Router>, div);
});