import "./SobreNos.css";
import PunpunSentado from './Imagens/PunpunSentado.png'

function Sobrenos (){

    return (
        <div className="sobreDiv">
            
            <h1 className="sobreH1">Sobre Nós</h1>

            <p className="sobreP">Nós do Banco Educacional temos como objetivo, criar um site<br/>
            de financiamento fictício, tudo isso para poder auxiliar no<br/>
            aprendizado de crianças e jovens que querem saber como funciona<br/>
            um banco real, mas sem ter que ver vídeos sobre, ou ter que abrir<br/>
            conta em um banco, com o nosso site os alunos poderão ver na prática como<br/>
            tudo funciona e ter um grande aprendizado, queremos levar a nossa<br/>
            plataforma para escolas e universidades de maneira totalmente gratuita, para<br/>
            tentar evoluir a educação financeira no Brasil e no Mundo.</p>

            <img className="fotoSobre" src={PunpunSentado}/>
            
            <img className="fotoSobre2" src={PunpunSentado}/>
        </div>
    )
}

export default Sobrenos;