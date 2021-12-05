import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from './styles/projpage.module.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'

export default function Options() {
  return (
    <div>
      <Layout>
        <div className={styles.title}>
          <p>Put Options</p>       
        </div>  
        <div className={styles.header}>
          <Link to="/project"><button className={styles.jobbutton}><AiOutlineArrowLeft /> Back</button></Link>
          <a className={styles.jobbuttonlink} href="https://github.com/dhruvpathak1/options_api" target="_blank" rel="noreferrer"><button className={styles.jobbutton}>View Github</button></a><br /><br />
          <p className={styles.desp}>Yahoo Finance API is used to display PUT Options stocks that fit in specific criteria as explained below. The API call is made for each particular stock. The API fetches us the stock data in a JSON format that is read from its URL.</p>
        </div>
        <div className={styles.info}>
          <ul className={styles.unlist}>
            <li className={styles.list}>The program is scheduled to run every 1 hour.</li>
            <li className={styles.list}>It outputs the PUT Options for the requested stocks that are available between 35 to 50 days from the time the program runs. This is done using Epoch time calculations.</li>
            <li className={styles.list}>Only PUT Option expiration dates falling within this range are taken into consideration.</li>
            <li className={styles.list}>Data satisfying the above condition is filtered under the condition that the 'Strike Price' of the PUT Option should be between 70% to 110% of the 'Current Stock Price'.</li>
            <li className={styles.list}>The data satisfying these conditions is then cleaned by the removal of unwanted and repetitive data. It is then printed with proper indentation, spacing and beautification.</li>
          </ul>
          </div>
      </Layout>
    </div>
  )
}
