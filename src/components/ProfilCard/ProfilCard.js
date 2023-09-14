import "../Accueil/Accueil.css";

import { Link } from "react-router-dom";

const ProfilCard = ({photo, nom, description}) => {
    return(
        <Link to={{
            pathname: "/Description",
            search: `?parametre1=${photo}&parametre2=${nom}&parametre3=${description}`
            }}
        >
            <article className="profilcard">
                <img src={photo} />
                <center><span>{nom}</span></center>
            </article>
        </Link>
    )
}

export default ProfilCard;