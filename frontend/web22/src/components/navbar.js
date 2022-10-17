
function Navbar() {
    return (
        <ul>
            <li><a class="active" href="index.html">Inicio</a></li>
            <li><a href="src/views/tutorial.html">¿Cómo jugar?</a></li>
            <li><a href="src/views/about.html">Acerca de</a></li>
            <li><a href="src/views/nosotros.html">Nosotros</a></li>
            <div class="right">
                <li class="dropdown" id="nav_invitado">
                    <a href="javascript:void(0)" class="dropbtn">¡Quiero Jugar!</a>
                    <div class="dropdown-content">
                        <a href="src/views/registro.html">Registrarse</a>
                        <a href="src/views/sesion.html">Iniciar Sesión</a>
                    </div>
                </li>
            </div>
            <div class="right">
                <li class="dropdown" id="nav_logeado">
                    <a href="javascript:void(0)" class="dropbtn" id="usuario_nav"></a>
                    <div class="dropdown-content">
                        <a href="index.html">Cerrar Sesión</a>
                    </div>
                </li>
            </div>   
        </ul>
    );
};

export default Navbar;