import React from 'react';
import Draw from '../components/Draw';
import Image from '../components/Image';
import MyImg from '../images/booksPage.png';

const Work = () => {
    return (
        <>
            <Image
                src={MyImg}
                alt="Jeśli się znowu załamiesz znowu ci wolno próbować, i jeśli raz wreszcie odniesiesz zwycięstwo, równyś jest temu który nigdy się nie załamał na duchu"
                description={`Albo zwyciężasz albo się uczysz`}
            />
            <h2>Dalejże kowalu</h2>
            <article>
                <p>
                    Tylko działanie usuwa wątpliwości. Obawy zakradają się
                    wtedy, gdy nie pracujesz – Conor McGregor
                </p>
            </article>
            <Draw type="work" />
        </>
    );
};

export default Work;
