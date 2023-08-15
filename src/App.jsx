// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Body from './Body';
import Titulo from './Titulo';
import Calculo from './Calculo';

function App() {

  const [texto, setTexto] = useState("Estado Inicial");

  const titulo = "Componente com react usando props";

  const mensagemAlerta = (texto) => {
    alert(texto)
  }

  return (
    <div >
      <center>
        <h1>Olá React!!!</h1>
        <h2>Estado criado: {texto}</h2>
        <button onClick={ () => setTexto('Estado Modificado')}>Modificar estado</button>
      </center>
        <Titulo titulo={titulo}/>
        <Titulo titulo="Usando mais uma vez o componente Titulo com props"/>
        <Body texto="props do componente body"
        mensagemAlerta={mensagemAlerta}
        dados={['JSX', 'React', 'Node', 'props']}/>
        <Calculo/>
    </div>
  );
}

export default App;
