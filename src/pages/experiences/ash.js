import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from './styles/workexp.module.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'
import Gallery from '../../components/gallery';
import i1 from '../../images/ash/1.jpeg'
import i2 from '../../images/ash/2.png'
import i3 from '../../images/ash/3.png'

export default function Ash() {
  return (
    <div>
      <Layout>
        <div className={styles.title}>
          <p>Ash Initiative NGO</p>         
        </div>  
        <div className={styles.header}>
          <Link to="/exp"><button className={styles.jobbutton}><AiOutlineArrowLeft /> Back</button></Link><br /><br />
          <h1 className={styles.exptitle}>Experience</h1>
          <ul className={styles.unlist}>
            <li className={styles.list}>Awarded Star Volunteer for my contributions, involvement and commitment towards the NGO.</li>
            <li className={styles.list}>Raised awareness about Black Lives Matter and Self Harm through social media channels like Instagram.</li>
            <li className={styles.list}>Promoted Skill Day which was aimed to provide mental stress reduction during Lockdown Phases.</li>
          </ul>
        </div>

        <Gallery img1={i1} title1="" img2={i2} title2="" img3={i3} title3=""/>

      </Layout>
    </div>
  )
}
