import React from 'react';
import Draw from '../components/Draw';
import Image from '../components/Image';
import MyImg from '../images/filozofyPage.png';

const Filozofy = () => {
    return (
        <>
            <Image
                src={MyImg}
                alt="Twoje myśli czynią cię szczęśliwym lub zmartwionym"
                description={`Czyli możesz mieć nad tym kontrole`}
            />
            <h2>Filozoficzne</h2>
            <article>
                <p>Starozytny Rzym</p>
            </article>
            <Draw type="filozofy" />
        </>
    );
};

export default Filozofy;
