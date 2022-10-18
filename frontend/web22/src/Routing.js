import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import Nosotros from './components/Nosotros';
import { Registrarse, InicioSesion } from './components/FormUser';

function Routing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Landing/>} />
                <Route path={"/acerca_de"} element={<About/>} />
                <Route path={"/nosotros"} element={<Nosotros/>} />
                <Route path={"/registrarse"} element={<Registrarse />} />
                <Route path={"/inicio_sesion"} element={<InicioSesion />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;