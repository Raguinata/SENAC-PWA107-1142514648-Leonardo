import { useState } from "react";
import './cadastro.css'
import PunpunGuardachuva from './Imagens/PunpunGuardachuva.png';

function Cadastro () {

    const [nome, setNome] = useState('');
    const [cpf, setcpf] = useState('');
    const [endereco, setendereco] = useState('');
    
    const [dadosCliente, setDadosCliente] = useState({
        nomeCliente:" ____________________",
        cpfCliente: " ______________________",
        enderecoCliente: "____________________"
    })

    function cadastrarCliente(evento) {

        evento.preventDefault()
        alert("Usuario cadastrado com Sucesso")

        setDadosCliente ({
            nomeCliente:" " + nome,
            cpfCliente:" " + cpf,
            enderecoCliente:" "+ endereco
        })
    }

    return(
        <div className="divCadastro">
        <h1 className="tituloCadastro">Cadastro</h1>
        <img className="fotoCadastro" src={PunpunGuardachuva}/>
        <form onSubmit={cadastrarCliente}>
        
            <label className="labelNome">Nome do Cliente:</label>
            <input className="inputNome" placeholder="Informe o nome do cliente" value = {nome}
            onChange= {(evento ) => setNome(evento.target.value)}>

            </input>
            <br></br>

            <label className="labelCpf">Número do CPF:</label>
            <input className="inputCpf" placeholder="Informe o número do CPF do cliente" value = {cpf}
            onChange= {(evento ) => setcpf(evento.target.value)}>

            </input>
            <br></br>

            <label className="labelEndereco">Endereço do Cliente:</label>
            <input className="inputEndereco" placeholder="Informe o endereço do cliente" value = {endereco}
            onChange= {(evento ) => setendereco(evento.target.value)}>

            </input>
            <br></br>


            <button className="botaoCadastro" type="submit"><div className="cadastrarCadastro">Cadastrar</div></button>

        </form>
        <div className="informacoesCadastro">
            <span>Nome do Cliente:  {dadosCliente.nomeCliente}</span>
            <br></br>
            <span>CPF do Cliente:  {dadosCliente.cpfCliente}</span>
            <br></br>
            <span>Endereço do Cliente:  {dadosCliente.enderecoCliente}</span>
        </div>
        </div>
    )


}

export default Cadastro;
