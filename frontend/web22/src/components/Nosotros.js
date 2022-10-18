import Images from "./images";

function Nosotros() {
    return (
        <div className="contenedor1">
            <div className="contenedor3">
                <h1>
                    チーム7 a.k.a. Equipo 7
                </h1>
                <Images image={"equipo7"} className={"img"} alt={":D"} />
                <h3>
                    El equipo 7 está conformado <br></br>
                    por dos alumnos de Ingeniería,<br></br>
                    de la Pontificia Universidad Católica.<br></br>
                    Alan Guzmán y Daniel Ortiz de Zárate,<br></br>
                    que están cursando Tecnologías y <br></br>
                    aplicaciones web <br></br>
                    (IIC2513-1) en el segundo <br></br>
                    semestre del año 2022.
                </h3>
            </div>
        </div>
    );
};

export default Nosotros;