import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import Cadastro from "./pages/Cadastro";
import Sobrenos from "./pages/SobreNos";
import ContaCorrente from "./pages/ContaCorrente";
import CalculoFinanciamento from "./pages/CalcFinanciamento";
import Erro from "./pages/Erro";
import Header from "./Componentes/Header";

function RouterApp(){
    return(
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/cadastro" element={<Cadastro/>}></Route>
            <Route path="/contacorrente" element={<ContaCorrente/>}></Route>
            <Route path="/calculofinanciamento" element={<CalculoFinanciamento/>}></Route>
            <Route path="/sobre" element={<Sobrenos/>}></Route>
            <Route path="*" element={<Erro/>}></Route>
            
        </Routes>
    </BrowserRouter>
    )
}

export default RouterApp;