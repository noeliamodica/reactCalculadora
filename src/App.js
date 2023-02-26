
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
          <Boton>1</Boton>
          <Boton>4</Boton>
          <Boton>7</Boton>
          <Boton>=</Boton>

        <div className='fila'></div>
          <Boton>2</Boton>
          <Boton>5</Boton>
          <Boton>8</Boton>
          <Boton>0</Boton>
        <div className='fila'></div>
          <Boton>3</Boton>
          <Boton>6</Boton>
          <Boton>9</Boton>
          <Boton>.</Boton>
        <div className='fila'></div>
          <Boton>+</Boton>
          <Boton>-</Boton>
          <Boton>*</Boton>
          <Boton>/</Boton>
        <div className='fila'></div>
        
        <Pantalla input={input} />  
        <BotonClear> Clear </BotonClear>
      </div>

     
    </div>
  );
}

export default App;
