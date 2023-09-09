import logo from "../../public/logo.webp"

const Nav = () => {
    return (
        <nav className="navigation">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
        </nav>
    )
}

export default Nav;