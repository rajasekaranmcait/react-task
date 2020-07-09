import React from 'react';
import Info from '../Components/info';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

it("Render", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Info /></Router>, div);
});