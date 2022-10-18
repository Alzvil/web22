import Images from "./images";

function About() {
    return (
        <div className="contenedor1">
            <div className="contenedor3">
                <h1>
                    チーム7 a.k.a. Equipo 7
                </h1>
                <Images image={"logo"} className={"logo"} alt={"logo"} />
                <h3>
                    Entre Nos! es un proyecto del <a className="hyper" href="nosotros.html">Equipo 7</a> <br></br>
                    para el ramo Tecnologías y <br></br>
                    aplicaciones web (IIC2513-1),<br></br>
                    ejercido por la Pontificia <br></br>
                    Universidad Católica. <br></br>
                    Actualmente se encuentra en <br></br>
                    la versión 0.01 la que es un <br></br>
                    estado
                    de prueba y no es funcional, <br></br>
                    pero pronto lo será.<br></br>
                    :D<br></br>
                </h3>
            </div>
        </div>
    );
};

export default About;