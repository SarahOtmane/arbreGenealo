import "./Accueil.css";

import ProfilCard from "../ProfilCard/ProfilCard";
import Blog from "../Blog/Blog";
import logo from '../../assets/logo.png';

import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importez les styles du carrousel
import { Carousel } from "react-responsive-carousel";


const Accueil = ({dataList}) =>{
    const articles = [
       {
        picture : 'https://i.pinimg.com/originals/1f/9a/44/1f9a4405c1db5d23a13d8608dfba6850.jpg',
        title : 'La naissance des dieux grecs : un conte cosmique' , 
        shortText : 'Dans les annales de la mythologie, peu de récits sont aussi profonds et captivants que la naissance des dieux grecs. Ces histoires illustrent non seulement la nature des dieux, mais fournissent également des informations sur le comportement humain, la nature et le cosmos...',
        fullTest : `
            Dans les annales de la mythologie, peu de récits sont aussi profonds et captivants que la naissance des dieux grecs. Ces histoires illustrent non seulement la nature des dieux, mais fournissent également des informations sur le comportement humain, la nature et le cosmos.
            <br/><br/>
            <h4> Le vide et les premiers êtres</h4>
            Avant les dieux, il y avait le Chaos. Souvent appelé le vide béant, le Chaos était l'état primordial de l'existence. De ce vaste vide, les premiers êtres ont commencé à émerger. Gaïa (la Terre), le Tartare (l'abîme profond) et Éros (l'Amour) furent parmi les premiers à voir le jour. Gaïa, en particulier, jouera un rôle important dans la naissance et l'ascension des dieux.
            <br/> <br/>
            <h4> La première génération</h4>
            De Gaïa émergea Ouranos (le ciel) et, ensemble, ils donnèrent naissance à la première génération de Titans. Cette génération comprenait des figures notables comme Oceanus, Rhea et Cronus. Cependant, Ouranos, craignant le pouvoir de sa progéniture, emprisonna plusieurs d'entre eux dans la Terre, ce qui provoqua des tensions et des conflits. C'est ainsi qu'est né un cycle de conflits générationnels entre les êtres divins.
            <br/> <br/>
            <h4> Cronos, Rhéa et l'âge d'or</h4>
            Cronus, l'un des plus puissants Titans, s'est révolté contre son père Ouranos avec le soutien de Gaia. Après avoir renversé et castré Ouranos, Cronus régna sur ce que l'on appelle souvent "l'âge d'or". Cependant, Cronus, ayant appris la prophétie selon laquelle l'un de ses descendants le renverserait, avala chacun de ses enfants à leur naissance. Cet acte sombre conduira à un autre événement important dans la saga des dieux.
            <br/> <br/>
            <h4> Zeus et l'ascension des Olympiens</h4>
            Rhéa, l'épouse de Cronos, désespérée par le sort de ses enfants, réussit à sauver son plus jeune enfant, Zeus, en remettant à Cronos une pierre enveloppée d'un tissu. Zeus fut alors mis à l'écart et devint assez puissant pour défier son père. Avec l'aide de Métis, il obligea Cronus à régurgiter ses frères et sœurs : Hestia, Héra, Poséidon, Déméter et Hadès.
            C'est ainsi que débute la célèbre Titanomachie, une guerre de dix ans entre les Titans les plus âgés et les jeunes dieux de l'Olympe. Menés par Zeus, les Olympiens en sortirent victorieux, bannissant de nombreux Titans dans le Tartare.
        `,
        index : 1
       },
       {
        picture : 'https://i.pinimg.com/originals/44/26/c7/4426c7ab2f6627b4f2c1ef02af50e33c.jpg',
        title : 'La Signification Fascinante de la Mythologie' , 
        shortText : "La mythologie est un terme qui englobe un ensemble de récits et de croyances qui font partie intégrante d'une culture ou d'une société. Elle se compose de légendes, de contes et de mythes transmis à travers les générations. La mythologie permet aux individus d'expliquer...",
        fullTest : ``,
        index : 2
       },
       {
        picture : 'https://i.pinimg.com/originals/38/87/a1/3887a18c14da80e603dd486872f4e131.jpg',
        title : 'Divinités Dominantes de la Mythologie Grecque' , 
        shortText : "Au cœur de la mythologie grecque se trouvent les Douze Olympiens, un groupe de divinités qui résidaient sur le mont Olympe et qui jouaient un rôle central dans les croyances et les rites anciens. Ces dieux et déesses représentaient non seulement divers aspects de la vie...",
        fullTest : ``,
        index : 3
       } 
    ]

    return(
        <>
            <header className="row" id="header">
                <Link to={'/'}><img alt="logo du site" src={logo} /></Link>
                <section className="column">
                    <center>
                        <h1>Geneaorkhos</h1>
                        <h4>les créatures de la mythologie grecque</h4>
                        <button><a href="#section1">Voir plus</a></button>
                    </center>
                </section>
            </header>

            <main className="column">
                <section className="section1 row" id="section1">
                    {dataList.map(data => (<ProfilCard key={data.id} {...data} /> ))}
                </section>
                <section id="carousel"></section>
                <Carousel>
                    <div>
                        <p>
                            Est qui elit qui veniam est. Et amet anim aute nisi ea velit mollit ipsum proident deserunt elit ipsum. Amet deserunt velit qui excepteur non esse ad id. Lorem ad laboris et aute duis.
                            Est qui elit qui veniam est. Et amet anim aute nisi ea velit mollit ipsum proident deserunt elit ipsum. Amet deserunt velit qui excepteur non esse ad id. Lorem ad laboris et aute duis.
                        </p>
                    </div>
                    <div>
                        <p>
                            Est qui elit qui veniam est. Et amet anim aute nisi ea velit mollit ipsum proident deserunt elit ipsum. Amet deserunt velit qui excepteur non esse ad id. Lorem ad laboris et aute duis.
                            Est qui elit qui veniam est. Et amet anim aute nisi ea velit mollit ipsum proident deserunt elit ipsum. Amet deserunt velit qui excepteur non esse ad id. Lorem ad laboris et aute duis.
                        </p>
                    </div>
                    <div>
                        <p>
                            Est qui elit qui veniam est. Et amet anim aute nisi ea velit mollit ipsum proident deserunt elit ipsum. Amet deserunt velit qui excepteur non esse ad id. Lorem ad laboris et aute duis.
                            Est qui elit qui veniam est. Et amet anim aute nisi ea velit mollit ipsum proident deserunt elit ipsum. Amet deserunt velit qui excepteur non esse ad id. Lorem ad laboris et aute duis.
                        </p>
                    </div>
                </Carousel>
                <section className="row section2" id="section2">
                    {articles.map( article => (<Blog key={article.id} {...article} />))}
                </section>
            </main>

            <footer className="row">
                <nav>
                    <ul className="row">
                        <a href="#header"><li>Accueil</li></a>
                        <a href="#section1"><li>Liste des créatures</li></a>
                        <a href="#carousel"><li>Informations</li></a>
                        <a href="#section2"><li>Blog</li></a>
                    </ul>
                </nav>
                <Link to={'/'}><img alt="logo du site" src={logo} /></Link>
                <span>copyright©B3Développeur Fullstack - 2023</span>
            </footer>
        </>
    )
}

export default Accueil;