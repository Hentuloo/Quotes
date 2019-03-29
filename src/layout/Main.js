import React from 'react';
import '../style/main.css';
import {Route,Switch} from 'react-router-dom';


import Filozofy from '../pages/Filozofy';
import Books from '../pages/Books';
import Stoicy from '../pages/Stoicy';
import MainPage from '../pages/MainPage';
import Contact from '../pages/Contact';
import Insta from '../pages/Insta';
import Work from '../pages/Work';
import ErrorPage from '../pages/ErrorPage';

const Main = () => {
    return ( 
    <>
        <main className="content">
        <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route path="/praca" component={Work}></Route>
        <Route path="/ksiazki" component={Books}></Route>
        <Route path="/stoicy" component={Stoicy}></Route>
        <Route path="/Insta" component={Insta}></Route>
        <Route path="/filozoficzne" component={Filozofy}></Route>
        <Route path="/kontakt" component={Contact}></Route>
        <Route component={ErrorPage}></Route>
        </Switch>
        </main>
        <footer className="footer"><span> Copyright by Kamil Chędkowski </span></footer>
    </>
     );
}
 
export default Main;