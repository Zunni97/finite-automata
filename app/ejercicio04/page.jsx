'use client';
import React, { useState } from 'react'

const Ejercicio04 = () => {
  const [palabra,setPalabra] = useState('');
  const [resultado, setResultado] = useState('');

  const matriz = [
    [1, 3, 200],
    [1, 2, 200],
    [1, 2, 200],
    [4, 3, 200],
    [4, 3, 200]
  ]
const analizar = () => {

//La palabra que pone el usuario en arreglo
const c = palabra.split('');
//La variable que controla el ciclo para la iteracion
let i = 0;
//variable estado que funcionara como estado inicial
let estado = 0;
//creamos la variable caracter
let caracter = 0;


//Expresiones regulares
const isA = new RegExp('[aA]');
const isB = new RegExp('[bB]');

while(i < c.length){
  
  if(isA.test(c[i])){
    caracter = 0;
  }else if(isB.test(c[i])){
    caracter = 1;
  }else{
    caracter = 2;
    setResultado('Cadena no aceptada')
  }

  estado = matriz[estado][caracter]
  if (estado === 200) {
    setResultado('Cadena no aceptada')
    return
  }
  i++
}
if(estado === 1 || estado === 3 ){
  setResultado('Cadena aceptada');
}else{
  setResultado('Cadena no aceptada');
}
}
const limpiar = () => {

setPalabra('');
setResultado('');
}
  return (
    <div className='flex flex-col space-y-4 w-full p-10'>
    <div className=''>
      <p className='text-center'>
        Analizador DFA que reconoce las palabras con a y b que comiencen y terminen con la misma letra
      </p>
        <input type='text' placeholder='Coloca la entrada' className='p-2 rounded-md w-full bg-slate-300'
        value={palabra}
        onChange={e => setPalabra(e.target.value)}
        />
    </div>
    <div> <button 
            onClick={analizar}
            className='p-2 bg-slate-200 rounded-md text-black w-full'
            >Analizar la entrada</button>
    </div>

    <div>{resultado}</div>
    </div>
  )
}

export default Ejercicio04