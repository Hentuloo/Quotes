import React from 'react';
import Draw from '../components/Draw'

const Books = () => {
    return ( 
        <>
        <h1>Cytaty z książek</h1>
        <article>Zawieram tu cytaty głównie z książek które sam gdzieś kiedyś przeczytałem a te fragmenty zrobiły na mnie wrażenie. Tytuły są na <a href="/#">TEJ STRONIE</a></article>
        <Draw type='book'/>
        </>
     );
}
 
export default Books;