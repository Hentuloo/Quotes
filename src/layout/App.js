import React, {Component} from 'react';
import '../style/app.css'
import {BrowserRouter as Router} from 'react-router-dom';

import Navigation from './Navigation';
import Main from './Main';

//https://pointcampus.ie/rooms

class App extends Component {
    state = { 
        words: []
     }
    render() { 
        return ( 
            <Router>
            <div className="app">
            <nav>{<Navigation/>}</nav>
            <section>{<Main/>}</section>
            </div>
            </Router>
         );
    }
}
 
export default App;