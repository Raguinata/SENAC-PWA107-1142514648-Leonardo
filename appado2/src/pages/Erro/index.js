import './Erro.css';
import PunpunErro from './Imagens/PunpunErro.png';
import PunpunSentado from './Imagens/PunpunSentado.png';

function Erro (){
    return (
        <div className='divErro'>

            <h1 className="h1Erro">Ops deu Erro...</h1>
            
            <p className='pErro'>Algo deu errado, mas não se preocupe é só clicar <br/>
            em um dos links a cima e tudo voltara ao normal.</p>

            <img className='img1' src={PunpunErro}/>

            <img className='img2' src={PunpunSentado}/>
            
        </div>
    )
}

export default Erro;

