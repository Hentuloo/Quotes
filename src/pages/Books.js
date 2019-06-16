import React from 'react';
import Draw from '../components/Draw';
import Image from '../components/Image';
import MyImg from '../images/booksPage.png';

const Books = () => {
    return (
        <>
            <Image
                src={MyImg}
                alt="Glupiec jest szczęsliwy, kiedy jego pragnienia zostana zaspokojone, Wojownik jest szczesliwy bez zadnego powodu - Dan Millman"
                description={`Na podstawie książki został stworzony film: "Sila spokoju"`}
            />
            <h2>Cytaty z książek</h2>
            <article>
                <p>
                    Zawieram tu cytaty głównie z książek które sam gdzieś kiedyś
                    przeczytałem a te fragmenty zrobiły na mnie wrażenie. Tytuły
                    są na
                    <a href="http://chentekwdzialaniu.pl/ksiazki">
                        TEJ STRONIE(mój blog)
                    </a>
                </p>
            </article>
            <Draw type="book" />
        </>
    );
};

export default Books;
