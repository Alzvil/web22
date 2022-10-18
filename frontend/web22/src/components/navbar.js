import ListaNav from "./ListaNav";

function Navbar() {
    return (
        <ul>
            <ListaNav text={"Inicio"} className={"active"} link={"/"} />
            <ListaNav text={"¿Cómo Jugar?"} />
            <ListaNav text={"Acerca de"} link={"/acerca_de"}/>
            <ListaNav text={"Nosotros"} link={"/nosotros"} />  

            <div className="right">
                <div className="dropdown" id="nav_invitado">
                    <ListaNav text={"¡Quiero Jugar!"} className={"dropbtn"} />
                    <div className="dropdown-content">
                        <ListaNav text={"Registrarse"} link={"/registrarse"} />
                        <ListaNav text={"Iniciar Sesión"} link={"/inicio_sesion"} />
                    </div>
                </div>
            </div>
        </ul>
    );
};

export default Navbar;