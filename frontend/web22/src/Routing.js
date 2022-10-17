import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './components/Landing';

function Routing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Landing/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;