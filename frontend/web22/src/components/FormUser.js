import {TextInput, CheckboxInput} from './InputForm';
import Images from './images';
import Boton from './boton';
import axios from "axios";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function FormUser(props) {
    // const validaSesion = async () => {

    //     let username = document.getElementById("input_username").value;
    //     let password = document.getElementById("input_pass").value;

    // };

    const guardaRegistro = async () => {
        console.log("Empieza");

        let username = document.getElementById("input_username").value;
        let password = document.getElementById("input_pass").value;
        //let password2 = document.getElementById("input_pass2").value;
        let email = document.getElementById("input_email").value;

        const url = `${SERVER_URL}/usuarios`;
        const body = {
            username: username,
            password: password,
            email: email,
        };

        console.log("cargado");

        await axios
            .post(url, body)
            .then((response) => {
                alert(` NUEVO USUARIO REGISTRADO: ${body.username}`);
            })
            .catch((error) =>
                alert(`[${error.response.status}] ${error.response.data}`)
            );
        
        console.log("termina");
    };


    return (
        <div>
            <div className="center">
                {
                    props.uso === "inicio" &&
                    <h1>Inicio de Sesión</h1>
                }
                {
                    props.uso === "registro" &&
                    <h1>Registrar Usuario</h1>
                }
            </div>
            <div className="contenedor1">
                <div className="contenedor2">
                    <TextInput id={"input_username"} text={"Ingresa tu nombre de usuario"} />
                    <TextInput id={"input_pass"} text={"Ingresa tu contraseña"} />

                    {
                        props.uso === "inicio" &&

                        <div>
                            <CheckboxInput id={"check_pass"} text="Recordar mis datos"/>

                            <div className="center">
                                <Boton className={"small"} id={"enviar_registro"} link={""} 
                                text={"Iniciar Sesión"}/>
                            </div>
                            <br></br>
                        </div>
                    }

                    {
                        props.uso === "registro" &&
                        <div>
                            <div>
                                <TextInput id={"input_pass2"} text={"Confirma tu contraseña"} />
                                <TextInput id={"input_email"} text={"Ingresa tu email"} />
                            </div>

                            <div className="center">
                                <Boton className={"small"} id={"enviar_registro"} link={""}
                                text={"Registrarme"} onClick={guardaRegistro}/>
                            </div>
                            <br></br>
                        </div>
                    }

                </div>
            </div>

            <div className="center">
                <Images image={"logo"} className={"logo"} alt={"logo"} />
            </div>
            <br></br>
        </div>
    );
};

function InicioSesion() {
    return (
        <FormUser uso="inicio" />
    );
};

function Registrarse() {
    return (
        <FormUser uso="registro" />
    );
};

export { InicioSesion, Registrarse }