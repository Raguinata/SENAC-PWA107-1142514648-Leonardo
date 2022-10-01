import './ContaCorrente.css'
import { useState } from 'react';

function ContaCorrente () {
    const [deposito, setDeposito] = useState (0);
    const [saque, setSaque] = useState(0);
    const [saldo, setSaldo] = useState(102456);

    const [movimentacao, setMovimentacao] = useState ({
        depositoConta: 0,
        saqueConta: 0,
    })

    function EventoConta(evento) {

        evento.preventDefault()
        alert("Transação Concluida!")
        
        setSaldo(parseInt(saldo) + parseInt(deposito) - parseInt(saque))

        setMovimentacao ({
            depositoConta: deposito,
            saqueConta: saque,
            saldototal: saldo
        })
    }

    return (
        <div className='divCc'>
            <h1 className='tituloContaCorrente'>Conta Corrente</h1>
            <p className='nomeCliente'>Nome do Cliente: Leonardo Ravanelli Coelho</p>
            <form onSubmit={EventoConta}>

                <label className='labelDeposito'>Depósito:</label>
                <input className='inputDeposito' placeholder='Insira um valor a ser depósitado' value={deposito}
                onChange= {(evento) => setDeposito(evento.target.value)}></input>

                <br></br>

                <label className='labelSaque'>Saque:</label>
                <input className='inputSaque' placeholder='Insira um valor a ser sacado' value={saque}
                onChange= {(evento) => setSaque(evento.target.value)}></input>

                <br></br>

                <button className="botaoMovimentacao" type="submit"><div className="confirmarMovimentacao">Confirmar</div></button>

        </form>

        <div className='divSaldo'>
            <span>Saldo Atual = {saldo}</span>
        </div>
        </div>
    )
    
}


export default ContaCorrente;