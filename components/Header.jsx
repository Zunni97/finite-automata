import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='p-5 bg-slate-500'>
        <div>
                <h1 className='text-2xl font-bold text-center'> AUTOMATAS FINITOS
            </h1>
        </div>

    <nav>
        <ul className='flex justify-evenly uppercase'>
        <li className='p-2 rounded-md cursor-pointer hover:bg-slate-300'>
              <Link href={'/'}>Inicio</Link>
              </li>
            <li className='p-2 rounded-md cursor-pointer hover:bg-slate-300'>
              <Link href={'/ejercicio01'}>Ejercicio 01</Link>
            
            </li>
            <li className='p-2 rounded-md cursor-pointer hover:bg-slate-300' > 
            <Link href={'/ejercicio02'}>Ejercicio 02</Link> 
            </li>
            <li className='p-2 rounded-md cursor-pointer hover:bg-slate-300'>
            <Link href={'/ejercicio03'}>Ejercicio 03</Link> 
            </li>
            <li className='p-2 rounded-md cursor-pointer hover:bg-slate-300'>
            <Link href={'/ejercicio04'}>Ejercicio 04</Link> 
            </li>
        </ul>
    </nav>
    </header>
  );
};

export default Header