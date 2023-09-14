import { useState } from "react";

const Blog = ({title, picture, shortText, fulltext}) =>{
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return(
        <article className="article">
            <center>
                <img src={picture} />
                <h2>{title}</h2>
                <p>{shortText}</p>
                <button onClick={togglePopup}>La suite</button>
            </center>
            {showPopup && (
                <div>
                    <div className="overlay"></div>
                    <div className="popup">
                        <img src={picture} alt={title} />
                        <div>
                            <h2>{title}</h2>
                            <p>{fulltext}</p>
                        </div>
                        <center><button onClick={togglePopup}>Fermer</button></center>
                    </div>
                </div>
            )}
        </article>
    )
}

export default Blog