import React from 'react';
import Draw from '../components/Draw'

const MainPage = () => {
    return ( 
        <>
        <h1>Co to za aplikacja?</h1>
        <article>Głównym powodem stworzenia tej strony była chęć podnoszenia swoich umiejętności jako programista a przy okazji chciałbym przedstawić Ci kilkadziesiąt cytatów na które trafiłem poczytując książki, śledząc twórców a przedewszystkim interesując się samorozwojem, uważam że większość z nich mają nad przeciętny przekaz a nawet w niektórych podaję swoją <strong>sugestje</strong> do sposobu intrepretacji</article>
        <Draw title="Wylosuj coś dla siebie!" type='all'/>
        </>
     );
}
 
export default MainPage;