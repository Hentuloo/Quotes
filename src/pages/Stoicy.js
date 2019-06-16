import React from 'react';
import Draw from '../components/Draw';
import Image from '../components/Image';
import MyImg from '../images/stoicPage.png';

const Stoicy = () => {
    return (
        <>
            <Image
                src={MyImg}
                alt="Sukces nigdy nie jest ostateczny, porażka nigdy nie jest totalna. Liczy się tylko odwaga"
                description={`Churchill miał racje`}
            />
            <h2>Trudno jest być stoikiem</h2>
            <article>
                <p>
                    W stoicyzmie jest moc. Podoba mi się ta filozofia,
                    jednoczęśnie staram się praktykować w codziennych
                    trudnościach.
                </p>
            </article>
            <Draw type="stoic" />
        </>
    );
};

export default Stoicy;
