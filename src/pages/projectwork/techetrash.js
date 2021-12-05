import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from './styles/projpage.module.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'

export default function TecheTrash() {
  return (
    <div>
      <Layout>
        <div className={styles.title}>
          <p>Tech-E Trash</p>       
        </div>  
        <div className={styles.header}>
          <Link to="/project"><button className={styles.jobbutton}><AiOutlineArrowLeft /> Back</button></Link>
          <a className={styles.jobbuttonlink} href="https://github.com/dhruvpathak1/tech_e_trash" target="_blank" rel="noreferrer"><button className={styles.jobbutton}>View Github</button></a><br /><br />
          <p className={styles.desp}>TECH-E TRASH is a website that provides a user-friendly interface and has multiple functionalities helping in various aspects of e-waste awareness. We have implemented multiple modules for the website, explained below: </p>
        </div>
        <div className={styles.info}>
          <ul className={styles.unlist}>
            <li className={styles.list}>AI Chat Box: The AI Chat Box module is available on every pages right side corner. It prompts the user that it can help the user when he/she visits the website for the very first time. The AI Bot has 4 general E-Waste related questions we have added to help the user.</li>
            <li className={styles.list}>Responsiveness: The website is majorly responsive and it adjusts correctly with different screen sizes of devices like mobile phones, tablets and laptops.</li>
            <li className={styles.list}>Home Page, Live E-Waste Count: An API with the actual data of the tons of E-Waste being dumped about the world is also present on the home screen.</li>
            <li className={styles.list}>Know Your Waste Page, Card Updating: This page has a module that will update the category, device chosen and data depending on the electronic device whose information the user selects to be searched for. On selecting different devices, the category info, device and its e-waste related information gets updated, clearing the previous data, therefore updating the card on every device the user searches.</li>
            <li className={styles.list}>Impact of E-Waste Page, Infographics (On Scroll Animations): With every scroll, new infographic images appear on the screen. Each infographic image has a different animation like fade in/out, slide from left/right or zoom in/out. This module shares alarming e-waste data with the users, scrolling from top to down. The last few infographic suggest solutions to e-waste.</li>
            <li className={styles.list}>Google My Maps API: This module has the use of the Google My Maps API where we added 150+ real locations E-Waste Recyclers in India to help users contact one nearest to their location</li>
          </ul>
          </div>
      </Layout>
    </div>
  )
}
