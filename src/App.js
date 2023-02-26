
import './App.css';
import Logo from './imagenes/calculadora.png'
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor =>{
    setInput(input + valor);

  };
  return (
    <div className='App'>
      
      <div className='logo-contenedor'>
        <img
          src={Logo}
          className='logo'
          alt='Logo' />
      </div>
      
      <div className='contenedor-calculadora'>
      
          
          
        <div className='fila'></div>
          <Boton manejarClic={agregarInput} >1</Boton>
          <Boton manejarClic={agregarInput} >4</Boton>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>=</Boton>

        <div className='fila'></div>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
        <div className='fila'></div>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
        <div className='fila'></div>
          <Boton manejarClic={agregarInput}>+</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        <div className='fila'></div>
        
        <Pantalla input={input} />  
        <BotonClear manejarClear={()=> setInput('') } > Clear </BotonClear>
      </div>

     
    </div>
  );
}

export default App;
