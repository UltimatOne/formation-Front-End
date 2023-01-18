import { useState, useEffect } from "react";
import React from 'react';
import SuperHeros from "../models/superHeros";
import { useParams } from "react-router-dom";
import HerosForm from "../composents/herosForm/herosForm";
import HeroService from "../services/heroService";

const HerosEdit: React.FC = () => {
    const [hero, setHero] = useState<SuperHeros>();
    const { id } = useParams<string>();

    useEffect(() => {
        if (id){
            HeroService.getHeros(+id).then((data) => setHero(data));
            }
        }, [id]);
    
    return <main>
           {hero?.id ?(
                <>
                <h2> Editer : {hero?.name}</h2>
                <HerosForm hero={hero} edit={true}></HerosForm>
                </>
            ) : (
                <h2>Ce héros n'éxiste pas</h2>
            )} 
        </main>
};

export default HerosEdit;