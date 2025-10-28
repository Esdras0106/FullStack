import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
    return (
        <header className="header-container">
            <div className="logo">Gerenciamento de usuári
                
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cadastro">Cadastrar</Link>
                <Link to="/lista">Listar</Link>
        </nav>
            </header >
)
};


export default Header;