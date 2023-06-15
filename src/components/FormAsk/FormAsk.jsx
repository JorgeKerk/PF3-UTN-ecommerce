import React from 'react'
import styles from './FormAsk.module.css'

const FormAsk = () => {
  return (
    <div className={styles.container}>
      <div className={styles.canvas}>
        <div className={styles.subContiner}>
          <h1 className={styles.title}>Sientete Libre De Preguntar</h1>
          <p  className={styles.comment}>Si tiene alguna pregunta o comentario sobre nuestros productos, políticas o cualquier otra cosa, no dude en comunicarse con nuestro amable equipo de atención al cliente - siempre estamos aquí para ayudarlo.</p>
          <form action=""  className={styles.divForm}>
            <div className={styles.nameGmail}>
                <input type="text" placeholder="Name" className={styles.fomatElement1} />
                <input type="text" placeholder="Gmail" className={styles.fomatElement2} />
            </div>
            <textarea rows="6" cols="25" placeholder="Your Text" className={styles.fomatElement3} />
            <div className={styles.divButton}>
              <button className={styles.formatButton}>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormAsk