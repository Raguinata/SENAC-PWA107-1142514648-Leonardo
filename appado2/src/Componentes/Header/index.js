import style from "./style.css"
import {Link}  from 'react-router-dom';
import Logo from './Logo.png'

function Header () {


    return (
        <header>
            <h1 className="titulo">Banco Educacional </h1>
            <img className="fototitulo" src={Logo}/>

            <div className="quadradohome"> <Link className="linkhome" to = '/'><b>Home</b></Link></div>
            <div> <Link className="linkcadastro" to = '/cadastro'><b>Cadastro</b></Link></div>
            <div className="quadradocc"> <Link className="linkcc" to = '/contacorrente'><b>Conta Corrente</b></Link></div>
            <div className="quadradocf"> <Link className="linkcf" to = '/calculofinanciamento'><b>Financiamento</b></Link></div>
            <div className="quadradosobre"> <Link className="linksobre" to = '/sobre'><b>Sobre Nós</b></Link></div>
            <div><Link to='/*'></Link></div>
            

        </header>
    )
}

export default Header