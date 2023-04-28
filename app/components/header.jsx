import { Link } from "@remix-run/react"
import logo from "../../public/img/logo.svg"
import Navegacion from "./navegacion"

function Header() {

    return (
        <header className="header">
            <div className="contenedor barra">
                <Link className="logo" to="/" >
                    <img className="logo" src={logo} alt="Imagen Logo" />
                </Link>
                <nav className="navegacion">
                    <Navegacion />
                </nav>
            </div>
        </header>
    )
}

export default Header