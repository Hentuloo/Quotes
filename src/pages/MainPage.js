import React from 'react';
import Draw from '../components/Draw';
import Image from '../components/Image';
import MyImg from '../images/mainPage.png';

const MainPage = () => {
    return (
        <>
            <Image
                src={MyImg}
                alt="Arkę zbudowali amatorzy a titanica profesjonaliści"
                description={`Nie trzeba być KIMŚ by dobrze tworzyć`}
            />
            <h2>Co to za aplikacja?</h2>
            <article>
                <p>
                    Głównym powodem stworzenia tej strony była chęć podnoszenia
                    swoich umiejętności jako programista a przy okazji chciałbym
                    przedstawić Ci kilkadziesiąt cytatów na które trafiłem
                    poczytując książki, śledząc twórców a przedewszystkim
                    interesując się samorozwojem, uważam że większość z nich
                    mają nad przeciętny przekaz a nawet w niektórych podaję
                    swoją <strong>sugestje</strong> do sposobu intrepretacji
                </p>
            </article>
            <Draw title="Wylosuj coś dla siebie!" type="all" />
        </>
    );
};

export default MainPage;
