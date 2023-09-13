import "./Accueil.css";
import ProfilCard from "../ProfilCard/ProfilCard";

const Accueil = ({data}) =>{
    return(
        <>
            <header>
                <img alt="logo du site" />
                <h1>LE TITRE DE LA PAGE</h1>
            </header>

            <main className="column">
                <section className="section1">
                    <h2>La mythologie grecque</h2>
                    <p>
                        Eu culpa quis pariatur ex aute consequat nostrud velit. Anim pariatur enim ut quis elit adipisicing ea quis laborum excepteur id proident enim enim. Officia magna aliquip laboris pariatur cillum quis veniam id in.
                        Eu culpa quis pariatur ex aute consequat nostrud velit. Anim pariatur enim ut quis elit adipisicing ea quis laborum excepteur id proident enim enim. Officia magna aliquip laboris pariatur cillum quis veniam id in.
                        Eu culpa quis pariatur ex aute consequat nostrud velit. Anim pariatur enim ut quis elit adipisicing ea quis laborum excepteur id proident enim enim. Officia magna aliquip laboris pariatur cillum quis veniam id in.
                    </p>
                </section>
                <section className="section2 column">
                    <input placeholder="Recherche" />
                    <div>
                        
                    </div>
                </section>
            </main>

            <footer>

            </footer>
        </>
    )
}

export default Accueil;