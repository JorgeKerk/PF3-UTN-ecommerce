import React from 'react'
import styles from './FormAsk.module.css'

const FormAsk = () => {
  return (
    <div className={styles.container}>
      <div className={'flex justify-center items-center w-screen bg-[#1b0f0099]'}>
        <div className='flex flex-col items-center w-1/2'>
          <h1 className='font-medium text-[2.5rem] text-[var(--primary-text)]'>Sientete Libre De Preguntar</h1>
          <p className='text-center text-[var(--primary-text)]'>Si tiene alguna pregunta o comentario sobre nuestros productos, políticas o cualquier otra cosa, no dude en comunicarse con nuestro amable equipo de atención al cliente - siempre estamos aquí para ayudarlo.</p>
          <form action=""  className='flex w-full flex-col gap-5 mt-6'>
            <div className='flex justify-between'>
                <input type="text" placeholder="Name" className='p-[0.7rem] rounded-[0.3rem] w-[48.6%]' />
                <input type="text" placeholder="Gmail" className='p-[0.7rem] rounded-[0.3rem] w-[48.6%]' />
            </div>
            <textarea rows="6" cols="25" placeholder="Your Text" className='p-[0.7rem] rounded-[0.3rem]' />
            <div className='flex justify-center mt-12'>
              <button className='w-[15%] rounded-2xl bg-[var(--terciary-color)] p-[0.4rem] font-bold'>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormAsk