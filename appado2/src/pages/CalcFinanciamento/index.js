import { useState } from 'react';
import './CalcFinanciamento.css';
import PunpunCasa from './Imagens/PunpunCasa.png';

function CalculoFinanciamento() {

    const [parcela2, setParcela2] = useState();
    const [parcela3, setParcela3] = useState();
    const [parcela4, setParcela4] = useState();
    const [total, setTotal] = useState();
    const [valorSolicitado, setValorSolicitado] = useState(0);

    const [financiamento, setFinanciamento] = useState ({
        Parcela2:0,
        Parcela3:0,
        Parcela4 :0,
        ValorSolicitado: 0
    })

    function EventoFinanciamento (evento) {
        evento.preventDefault();
        alert("Calculo do Fianaciamento Completo!");

        setParcela2(parseInt(Math.round(total)/2))
        setParcela3(parseInt(Math.round(total)/3))
        setParcela4(parseInt(Math.round(total)/4))
        setTotal(parseInt(Math.round(valorSolicitado) * 1.37))

        setFinanciamento ({
            Parcela2: parcela2,
            Parcela3: parcela3,
            Parcela4 : parcela4,
            ValorSolicitado: valorSolicitado
        })

    }

    return (
    <div className='divInterface'>
        <h1 className='h1Cf'>Simulação de Financiamento</h1>
        <img className='img1Cf' src={PunpunCasa} />
        <p className='nomeCliente'>Nome do Cliente: Leonardo Ravanelli Coelho</p>
        <form onSubmit={EventoFinanciamento}>

            <label className='labelValorSolicitadoInput'>Valor Solicitado:</label>
            <input className='inputValorSolicitado' placeholder='Insira algum Valor' value={valorSolicitado}
            onChange= {(evento) => setValorSolicitado(evento.target.value)}></input>

            <br></br>

            <button className='botaoFinanciamento' type='submit'><div className='botaoCalcular'>Calcular</div></button>

        </form>

        <div className='divInformacoesFinanciamento'>
            <span>Valor Solicitado: R$ {valorSolicitado}</span>
                                <br></br>
            Taxa de Juros: 37%
                                <br></br>
            <div className='parcelas'>
            <span>2x Parcelas de: R$ {parcela2}</span>
            ⠀⠀⠀⠀⠀Total a ser pago: R$ {total}     
                                <br></br>
            <span>3x Parcelas de: R$ {parcela3}</span>
            ⠀⠀⠀⠀⠀Total a ser pago: R$ {total}
                                <br></br>
            <span>4x Parcelas de: R$ {parcela4}</span>
            ⠀⠀⠀⠀⠀Total a ser pago: R$ {total}
                                <br></br>
        </div>
        </div>

    </div>
    )
}

export default CalculoFinanciamento;