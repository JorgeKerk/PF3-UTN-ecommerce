import React from 'react'
import styles from './Footer.module.css'
import logo from '../../img/bookish.gif'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer1}>
        <div className={styles.divisions}>
          <div className={styles.boxDiv}>
            <h3>Bookish</h3>
            <p className={styles.pDiv}>About</p>
            <p className={styles.pDiv}>Team</p>
            <p className={styles.pDiv}>Policies</p>
            <p className={styles.pDiv}>Carrers</p>
            <p className={styles.pDiv}>Press</p>
          </div>
          <div className={styles.boxDiv}>
            <h3>Explore</h3>
            <p className={styles.pDiv}>Home</p>
            <p className={styles.pDiv}>About</p>
            <p className={styles.pDiv}>Trust & safety</p>
            <p className={styles.pDiv}>Sustainability</p>
            <p className={styles.pDiv}>FAQs</p>
            <p className={styles.pDiv}>Get Help</p>
          </div>
          <div className={styles.boxDiv}>
            <h3>Top cities</h3>
            <p className={styles.pDiv}>Atlanta</p>
            <p className={styles.pDiv}>Austin</p>
            <p className={styles.pDiv}>Boston</p>
            <p className={styles.pDiv}>Charlotte</p>
            <p className={styles.pDiv}>Chicago</p>
            <p className={styles.pDiv}>Dallas</p>
          </div>
          <div className={styles.boxDiv}>
            <h3>Section</h3>
            <p className={styles.pDiv}>Delivery</p>
            <p className={styles.pDiv}>Payment</p>
            <p className={styles.pDiv}>Price</p>
            <p className={styles.pDiv}>Writers</p>
          </div>
        <div className={styles.logLinks}>
          <img src={logo} alt="logo de la empresa" width={160}/>
        </div>
        </div>
      </div>
      <div className={styles.subContainer2}>
        <p className={styles.copyright}>Copyright © 2023 Turo Corporation. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer