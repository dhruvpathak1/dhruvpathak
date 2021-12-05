import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from './styles/workexp.module.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'
import inceptio from '../../images/inception.jpeg'

export default function Iec() {
  return (
    <div>
      <Layout>
        <div className={styles.title}>
          <p>IEC</p>         
        </div>  
        <div className={styles.header}>
          <Link to="/exp"><button className={styles.jobbutton}><AiOutlineArrowLeft /> Back</button></Link><br /><br />
          <h1 className={styles.exptitle}>Experience</h1>
            <ul className={styles.unlist}>
            <li className={styles.list}>Organized and Managed the annual fest 'Inceptio', held to educate students about entrepreneurship and businesses.</li>
            <li className={styles.list}>Attracted a footfall of 350-450 at Inceptio from all over Mumbai and landed sponsorship deals for the event (Pillsbury, Bisleri, The Souled Store, Frapp etc).</li>
            <li className={styles.list}>Studied and analyzed business to gain sponsorships for the annual entrepreneur events and fests.</li>
            <li className={styles.list}>Planned, organized and managed events like 'A Day with an Entrepreneur', 'Think Tank' and other crowd funding events.</li>
          </ul>
          <div className={styles.imglogo}>
          <img src={inceptio} alt="inceptio" className={styles.ilogo} />
          </div>
        </div>
      </Layout>
    </div>
  )
}
