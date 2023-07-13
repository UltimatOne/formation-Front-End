import React, { useState } from 'react';
import HerosForm from '../composents/herosForm/herosForm';
import SuperHeros from '../models/superHeros';

const HerosAjout: React.FC = () => {
    const [hero, setHero] = useState<SuperHeros>(new SuperHeros())
    return <>
    <h2>Créer un Héros</h2>
    <HerosForm hero={hero} edit={false}></HerosForm>
    </>
        
    
};

export default HerosAjout;