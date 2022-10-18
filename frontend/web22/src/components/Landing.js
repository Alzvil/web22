import Images from "./images";
import Boton from "./boton";

function Landing() {
    return (
        <div className="contenedor1">
            <div className="contenedor2">
                <h1>¡Bienvenid@ a Entre Nos!</h1>
                <div className="center">
                    <Images image={"logo"} className={"logo"} alt={"logo"} />
                </div>
                <h2>
                    Crea tu cuenta o ingresa a una existente, invita a todos tus amig@s y consigue escapar de la cárcel
                    o atraparlos a todos. ¿Qué estás esperando? Disfruta de este juegazo clickeando "Jugar".
                </h2>
                <div className="center">
                    <Boton className={"center"} link={""} text={"Jugar"} />
                </div>
                <br></br>
            </div>
            <div className="contenedor3">
                <Images image={"mapa"} className={"portada"} alt={"mapa"} />
                <div>
                    <h3 className="cita">
                        <i><b>"Este es el mejor juego que he jugado en mi vida."</b></i>
                        <br></br>
                        <p>-n4dieD1JoNunk</p>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Landing;