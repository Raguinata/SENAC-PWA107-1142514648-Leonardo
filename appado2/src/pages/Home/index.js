import './Home.css';
import Punpun from './Imagens/Punpun.png'

function Home(){

    return(
        <div className='homeDiv'>

            <h1 className='homeH1'>Bem Vindo(a)</h1>

            <h2 className='homeH2'>Está é a home da nossa empresa</h2>

            <p className='homeP'>Você poderá acessar as categorias do site clicando nos itens acima</p>
            
            <img className='fotoHome' src={Punpun}/>
        </div>
    )
}

export default Home;