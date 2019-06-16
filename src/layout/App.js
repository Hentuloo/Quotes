import React from 'react';
import '../style/app.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './Navigation';
import Main from './Main';

const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="app">
                <nav>{<Navigation />}</nav>
                <Main />
            </div>
        </Router>
    );
};

export default App;
