import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/index.module.css'
import { Helmet } from 'react-helmet'
import profile from '../images/profile.jpg'

export default function Home() {
  return (
    <div>
      <Layout>
        <Helmet title=" Home " defer={false} />
        <div className={styles.title}>
          <h1 className={styles.titlename}>DHRUV PATHAK</h1>
          <h1 className={styles.titledesign}>Computer Engineer</h1>         
        </div>
        <div className={styles.header}>
          <div className={styles.para}>
          <h1 className={styles.headtitle}>About</h1>
          <p className={styles.matter}>I am a driven engineer with strong communication and leadership skills. I have a solid technical foundation as well as experience in digital marketing. I've always been interested in and involved in technology, so I was urged to pursue engineering in Computer Science to broaden my horizons and stay abreast inside the digital bubble. 
          <br />
           I got introduced to coding and algorithms when I was 14 years old. Since then, I've had a burning desire to ask "How?" and "Why?" to everything, and to apply what I've learned in the classroom to real-world circumstances. Curiosity and a drive to know more pushed me into the world of finance and business. All of these questions have helped me develop a business sense and have kept me engaged in the world of finance and business.
          <br />
          I enjoy playing the guitar and sketching cartoons and illustrations in my spare time. I am a person who is motivated by ambition, curiosity, and a desire to learn and succeed in anything I set out to do. </p>
          </div>
          <div className={styles.prof}>
          <img src={profile} className={styles.profimg} alt="Profile" />
          </div>
        </div> 
        <br /><br />
        <div className={styles.info}>
          <h1 className={styles.headtitle}>Personal Information</h1>
          <div className={styles.infobox}>
            <div className={styles.databox}><h3 className={styles.databoxh}>Phone: </h3><p className={styles.data}>9819875816</p></div>
            <div className={styles.databox}><h3 className={styles.databoxh}>Email: </h3><p className={styles.data}>dhruvpathak12@gmail.com</p></div>
            <div className={styles.databox}><h3 className={styles.databoxh}>Skype: </h3><p className={styles.data}>Dhruv Pathak</p></div>
            <div className={styles.databox}><h3 className={styles.databoxh}>Github: </h3><p className={styles.data}>dhruvpathak1</p></div>
            <div className={styles.databox}><h3 className={styles.databoxh}>Linkedin: </h3><p className={styles.data}>Dhruv Pathak</p></div>
            <div className={styles.databox}><h3 className={styles.databoxh}>Instagram: </h3><p className={styles.data}>dhruv_._pathak</p></div>
            <div className={styles.databox}><h3 className={styles.databoxh}>Location: </h3><p className={styles.data}>Navi Mumbai</p></div>
            <div className={styles.databox}><h3 className={styles.databoxh}>Languages: </h3><p className={styles.data}>English, Hindi</p></div>
          </div>
        </div>

      </Layout>
    </div>
  )
}
