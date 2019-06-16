import React from 'react';
import Draw from '../components/Draw';
import Image from '../components/Image';
import MyImg from '../images/instaPage.png';

const Insta = () => {
    return (
        <>
            <Image
                src={MyImg}
                alt="Mój instagram"
                description={`Tam też są cytaty ale w ładnych szablonach`}
            />
            <h2>Z mojego insta</h2>
            <article>
                <p>
                    Tworzyłem przez pewnien czas grafiki z insta w formie
                    złotych myśli/cytatów myślę że jest to wartę twojej uwagei:{' '}
                    <a href="/#">PROFIL</a>
                </p>
            </article>
            <Draw type="insta" />
        </>
    );
};

export default Insta;
