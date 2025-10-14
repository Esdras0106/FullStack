// FrontEnd\FrontEnd\src\Components\Footer\index.jsx

import './style.css';

function Footer() {
    return (
        <footer className="footer-container"> 
            <p>&copy; {new Date().getFullYear()} - SENAI Dendezeiros</p>
        </footer>
    )
}

export default Footer;