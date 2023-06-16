import React from 'react'
import logo from '../../img/bookish.gif'
import youtube from '../../img/youtube.svg'
import instagram from '../../img/instagram.svg'
import facebook from '../../img/facebook.svg'
import twitter from '../../img/twitter.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  const sections = [
    { 
      title: 'Bookish',
      items: ['Acerca de', 'Equipo', 'Políticas', 'Carreras', 'Imprenta']
    },
    { 
      title: 'Explorar',
      items: ['Inicio', 'Acerca de', 'Confianza y seguridad', 'Sostenibilidad', 'Preguntas y respuestas', 'Consigue ayuda']
    },
    { 
      title: 'Ciudades principales',
      items: ['Atlanta', 'Austin', 'Boston', 'Charlotte', 'Chicago', 'Dallas']
    },
    { 
      title: 'Secciones',
      items: ['Entrega', 'Pago', 'Precio', 'Escritores']
    }
  ]

  return (
    <div className='flex flex-col w-screen bg-[var(--terciary-color)]'>
      <div className='flex justify-center w-screen h-[90%] bg-none border-b-[0.5px] border-[#000000b3] shadow-[0px_0.5px_2px_0px_rgba(0,77,17,0.685)]'>
        <div className='flex flex-wrap w-4/5'>
          {
            sections.map( (m, ind) =>
              <div key={ind} className='flex flex-col pt-8 pb-20 px-[3%]'>
                <h3 className='font-bold mb-4 text-[19px]'>{m.title}</h3>
                {
                  m.items.map( (i,indI)=> 
                    <p key={indI} className='text-[19px] text-[#313131b3]'><Link to='#'>{i}</Link></p>
                  )
                }
              </div>
            )
          }
        <div className='flex flex-col pt-14 pl-[7.5rem]'>
          <img src={logo} alt="logo de la empresa" width={160}/>
          <div className='flex mt-8 gap-4'>
            <Link to='#'>
              <img src={youtube} alt="youtube" width={30}/>
            </Link>
            <Link to='#'>
              <img src={instagram} alt="instagram" width={30}/>
            </Link>
            <Link to='#'>
              <img src={facebook} alt="facebook" width={30}/>
            </Link>
            <Link to='#'>
              <img src={twitter} alt="twitter" width={30}/>
            </Link>
          </div>
        </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <p className='text-[#313131b3] py-4'>Copyright © 2023 Turo Corporation. Todos los derechos reservados.</p>
      </div>
    </div>
  )
}

export default Footer