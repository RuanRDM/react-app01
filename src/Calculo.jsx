import {useEffect, useState} from "react";

function Calculo(){

    const [valor1, setValor1] = useState(null);
    const [valor2, setValor2] = useState(null);
    const [resultado, setResultado] = useState(null);

    useEffect(()=>{
        console.log('Executou o use effect');
    },[])

    useEffect(()=>{
        console.log('Modificou o valor1');
    },[valor1])

    return(
        <>
            <h1>Valor 1: {valor1}</h1>
            <h1>Valor 2: {valor2}</h1>
            <h1>Resultado: {resultado}</h1>
            <div>
                <label htmlFor="vlr1">Valor 1</label>
                <input type="number" id="vlr1" value={valor1} 
                onChange={ e => setValor1(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="vlr2">Valor 1</label>
                <input type="number" id="vlr2" value={valor2} 
                onChange={ e => setValor2(e.target.value)}/>
            </div>
            <button onClick={() => 
                setResultado(Number(valor1)+Number(valor2))}>+</button>
        </>
    )
}

export default Calculo;