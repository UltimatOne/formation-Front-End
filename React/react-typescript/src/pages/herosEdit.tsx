import { useState, useEffect } from "react";
import React from 'react';
import SuperHeros from "../models/superHeros";
import { useParams } from "react-router-dom";
import HerosForm from "../composents/herosForm/herosForm";

const HerosEdit: React.FC = () => {
    const [hero, setHero] = useState<SuperHeros>();
    const { id } = useParams<string>();

    useEffect(() => {
        fetch(`http://localhost:8000/superHeros/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setHero(data);
        });
    }, [id]);
    
    return <main>
           {hero?.id ?(
                <>
                <h2> Editer : {hero?.name}</h2>
                <HerosForm hero={hero}></HerosForm>
                </>
            ) : (
                <h2>Ce héros n'éxiste pas</h2>
            )} 
        </main>
};

export default HerosEdit;