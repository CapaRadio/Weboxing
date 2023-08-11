import './navbar.css';

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <a href="../route/Accueil.js">Weboxing</a>
            </div>
            <nav>
                <a href="../route/Accueil.js">Accueil</a>
                <a href="/">Services</a>
                <a href="/">Boutique</a>
                <a href="/">Aides</a>
                <a href="/">Profil</a>

            </nav>
        </div>
    )
}

export default Navbar;