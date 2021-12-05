import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/index.module.css'

export default function Home() {
  return (
    <div>
      <Layout>
        <div className={styles.title}>
          <h1 className={styles.titlename}>DHRUV PATHAK</h1>
          <h1 className={styles.titledesign}>Computer Engineer</h1>         
        </div>
        <div className={styles.header}>
          <h1 className={styles.headtitle}>About</h1>
          <p className={styles.matter}>I am a motivated engineering student with a knack for communication and leadership. I have a good coding base as well as expertise in digital marketing (Facebook). I've always been interested and active in technology, so I was encouraged to try engineering in Computer Science to expand my interests and keep abreast inside the digital bubble.
          <br />
           As early as the age of 14, I was introduced to coding and algorithms. Since then, I've had that extra spark in me to question How? and Why? to everything, and to apply what I've learned in the classroom to real-world situations. Curiosity and a desire to learn more drew me into the world of finance and business. All of these inquiries have built a business acumen in me, keeping me interested in the world of finance and business.
          <br />
          In my spare time, I like playing the guitar and drawing cartoons and sketches. I am a person who is driven by energy, curiosity, and a desire to learn and excel in whatever I set out to achieve. </p>
        </div> 
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
