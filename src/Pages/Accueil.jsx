import React from 'react';
import "./Accueil.css";
import Banner from '../Structure de Page/Banner';
import CardLogement from '../Composants/CardLogement'


function Accueil() {
  return (
    <div>
      <Banner/>
      <CardLogement/>
    </div>
    
  );
}

export default Accueil;

