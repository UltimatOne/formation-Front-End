import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SuperHeros from "../models/superHeros";

const HerosDetails: React.FC = () => {
    const [herosDetails, setHerosDetails] = useState<SuperHeros>()
    const {id} = useParams<string>();
    useEffect(() => {
        fetch(`http://localhost:8000/superHeros/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setHerosDetails(data);
        });
    }, [id]);
    return(
        <div>
            <h2>{herosDetails?.name}</h2>
            <img src={herosDetails?.image} alt={herosDetails?.name}/>
            <Link to={`/edit/${id}`}><button>Modifier</button></Link>
            <p>Son vrai nom est {herosDetails?.civil}, il a {herosDetails?.age} ans et habite à {herosDetails?.ville}.</p>
        </div>
    )
}
export default HerosDetails;