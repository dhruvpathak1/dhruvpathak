import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from './styles/projpage.module.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'
import { Helmet } from 'react-helmet'

export default function Interestment() {
  return (
    <div>
      <Layout>
        <Helmet title=" Projects | Interestment " defer={false} />
        <div className={styles.title}>
          <p>Interestment</p>       
        </div>  
        <div className={styles.header}>
          <Link to="/project"><button className={styles.jobbutton}><AiOutlineArrowLeft /> Back</button></Link>
          <a className={styles.jobbuttonlink} href="https://github.com/dhruvpathak1/stock_market_project" target="_blank" rel="noreferrer"><button className={styles.jobbutton}>View Github</button></a><br /><br />
          <p className={styles.desp}>Interestment is a project focused on the stock market in the financial domain. It aims to assist investors having a diversified portfolio with stocks from various global markets purchased using different demat accounts. The project is focused for users with zero to little stock market knowledge. The simple and minimal design aims to help users understand the working of the stock market, learn basic terms and understand the key metrics of different shares without the complex graphs and highly complex metrics.</p><br /><br />
          <p className={styles.desp}>The project has a LogIn / SignUp with the database connected to Firebase. It also has a FORGOT PASSWORD feature that sends an email to reset password to the registered email. There are 5 sections in the project a user can interact with after logging in. These sections are as follows:</p>
        </div>
        <div className={styles.info}>
          <ul className={styles.unlist}>
            <li className={styles.list}>Search - This page is used to search any GLOBAL stock and fetch their data from the last 5 days. A user can also add the stock to their watchlist.</li>
            <li className={styles.list}>Home - It has a dropdown menu that has different sectors like Banks, Sports etc. The goal is to group stocks for users based on their INTERESTS.</li>
            <li className={styles.list}>Watchlist - Users can view and edit their watchlist.</li>
            <li className={styles.list}>Stock School - The aim of this section is to help the users get familiar with the terminology and basic questions about the stock market.</li>
            <li className={styles.list}>Contact Us - For any queries or requests, the user can contact us through the given form.</li>
            <li className={styles.list}>Editing - User can update their username and add more interests to their profile.</li>
          </ul>
          </div>
      </Layout>
    </div>
  )
}
