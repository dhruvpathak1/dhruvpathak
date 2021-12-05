import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from './styles/workexp.module.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'

export default function Bewakoof() {
  return (
    <div>
      <Layout>
        <div className={styles.title}>
          <p>Bewakoof</p>       
        </div>  
        <div className={styles.header}>
          <Link to="/exp"><button className={styles.jobbutton}><AiOutlineArrowLeft /> Back</button></Link><br /><br />
          <h1 className={styles.exptitle}>Experience</h1>
          <ul className={styles.unlist}>
            <li className={styles.list}>Managed paid acquisition and re-targeting ads on Facebook. Scaled ads to an overall spend of 7 lakh.</li>
            <li className={styles.list}>Achieved 10% reduction in CPA from Facebook Ads through continuous experimentation of targeting, messaging and landing page optimization.</li>
            <li className={styles.list}>Used Google Analytics and Branch.io to accurately measure ROI and attribution.</li>
            <li className={styles.list}>Handled day to day reporting of performance marketing and assisted the senior team with execution of digital ads.</li>
            <li className={styles.list}>Attended Facebook's Blueprint Event to learn about Facebook Ad Manager.</li>
            <li className={styles.list}>Case Study on the pros and cons of websites of competitors versus Bewakoof's website.</li>
          </ul>
        </div>
      </Layout>
    </div>
  )
}
