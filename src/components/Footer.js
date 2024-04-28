import React from 'react'
import * as styles from './styles/footer.module.css'
import downloadFile from '../cv.pdf'
import { BsGithub,BsInstagram,BsLinkedin } from 'react-icons/Bs'

export default function Footer() {
    return (
      <div>
      <div className={styles.footerbox}>
          <h1 className={styles.cvh1}>Do you want to know more?</h1>
          <a href={downloadFile} download>
              <button className={styles.cvbutton}>
                Download CV
              </button>
            </a>
        <div className={styles.form}>
        <h1 className={styles.contacthead}>Contact Me</h1><br /><br />
          <form action="https://formspree.io/f/mbjqjgqp" method="POST">
            <input type="text" name="Name" className={styles.contactbox} placeholder="Name" required />
            <input type="email" name="Email" className={styles.contactbox} placeholder="Email" required />
            <input type="text" name="Subject" className={styles.contactbox} placeholder="Subject" required /><br />
            <textarea placeholder="Message" name="Message" required className={styles.contacttxtbox} />
            <input type="submit" value="Send Message" className={styles.contactsubmit} /><br />
          </form>
        </div>

        <div className={styles.footerbar}>
          <div className={styles.footericonbox}>
            <a href="https://github.com/dhruvpathak1" target="_blank" rel="noreferrer"><BsGithub className={styles.footericons} /></a>
            <a href="https://www.instagram.com/dhruv_._pathak/" target="_blank" rel="noreferrer"><BsInstagram className={styles.footericons} /></a>
            <a href="https://www.linkedin.com/in/dhruv-pathak-6ab0a916a/" target="_blank" rel="noreferrer"><BsLinkedin className={styles.footericons} /></a>
          </div> 
          <div className={styles.footercopyright}>
            <h3>Copyright ©2023 All rights reserved | Made by Dhruv Pathak</h3>
          </div>    
        </div>
    </div>

      </div>

    )
}
