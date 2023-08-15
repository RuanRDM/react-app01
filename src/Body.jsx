const Body = props => {
    return (
        <>
            <h2>{props.texto}</h2>
            <button
                onClick={ () => props.mensagemAlerta('Usando a função recebida por props') }
            >Mensagem</button>
            {
                props.dados.map(elemento => (
                    <li>{elemento}</li>                    
                ))
            }
        </>
    )
}

export default Body;