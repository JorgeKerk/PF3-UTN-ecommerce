import React from 'react'
import styles from './Footer.module.css'
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
    <div className={styles.container}>
      <div className={styles.subContainer1}>
        <div className={styles.divisions}>
          {
            sections.map( (m, ind) =>
              <div key={ind} className={styles.boxDiv}>
                <h3 className={styles.h3Format}>{m.title}</h3>
                {
                  m.items.map( (i,indI)=> 
                    <p key={indI} className={styles.pDiv}><Link to='#'>{i}</Link></p>
                  )
                }
              </div>
            )
          }
        <div className={styles.logLinks}>
          <img src={logo} alt="logo de la empresa" width={160}/>
          <div className={styles.containerLinkIcons}>
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
      <div className={styles.subContainer2}>
        <p className={styles.copyright}>Copyright © 2023 Turo Corporation. Todos los derechos reservados.</p>
      </div>
    </div>
  )
}

export default Footer