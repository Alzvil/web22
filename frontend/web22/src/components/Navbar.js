import ListaNav from "./ListaNav";

function Navbar() {
    return (
        <ul>
            <ListaNav class={"active"} link={"/"} text={"Inicio"}/>
            <ListaNav text={"¿Cómo Jugar?"} />
            <ListaNav text={"Acerca de"} />
            <ListaNav text={"Nosotros"} />  
        </ul>
    );
};

export default Navbar;