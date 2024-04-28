import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'
import Gallery from '../components/gallery';
import z1 from '../images/art/01.jpg'
import z2 from '../images/art/02.jpg'
import z3 from '../images/art/03.jpg'
import z4 from '../images/art/04.jpg'
import z5 from '../images/art/05.jpg'
import z6 from '../images/art/06.jpg'
import z7 from '../images/art/07.jpg'
import z8 from '../images/art/08.jpg'
import z9 from '../images/art/09.jpeg'
import z10 from '../images/art/10.jpeg'
import apj from '../images/apj.png'
import nmims from '../images/nmims.png'
import marys from '../images/marys.png'
import b1 from '../images/books/b1.jpg'
import b2 from '../images/books/b2.jpg'
import b3 from '../images/books/b3.jpg'
import { Helmet } from 'react-helmet'

export default function About() {
  return (
    <div>
      <Layout>
        <Helmet title=" About " defer={false} />
        <div className={styles.title}>
          <p>About</p>
        </div>
        <div className={styles.header}>
          <h1>Education</h1>
        </div>
        <div>
          <ul className={styles.listbox}>
            <li className={styles.listing}>
              <img className={styles.logo} src={nmims} alt="NMIMS" />
              <h2 className={styles.schoolname}>
                Mukesh Patel School of Technology &amp; Management (MPSTME)
              </h2>
              <p className={styles.schoolinfo}>
                B.Tech Computer Engineering
                <br></br><b>3.65/4 CGPA</b>
              </p>
              <p className={styles.schoolinfo}>
                Mumbai | 2018-2022
              </p>
            </li>
          </ul>
        </div>

        <hr className={styles.line} />

        <h1 className={styles.quote}>
          "Art is a poem without words."{" "}
          <span className={styles.name}>- Horace</span>
        </h1>

        <Gallery
          img1={z1}
          title1="Moonlight"
          img2={z2}
          title2="White Blanket"
          img3={z3}
          title3="Lighthouse"
          img9={z4}
          title9="Sea Spectrum"
          img5={z5}
          title5="Jungle Knights"
          img10={z6}
          title10="Universe within the Eye"
          img7={z7}
          title7="Milo and Garry"
          img4={z8}
          title4="Spring Days"
          img8={z9}
          title8="Faith"
          img6={z10}
          title6="Shipwreck Cove"
        />

        <hr className={styles.line} />

        <div className={styles.certi}>
          <h1 className={styles.certih1}>Publications</h1>
          <br />
          <ul className={styles.certinfo}>
            <li className={styles.inks}>
              <a
                target="_blank"
                className={styles.links}
                href="https://pubs.aip.org/aip/acp/article-abstract/2705/1/040004/2897035/A-comprehensive-survey-on-AIoT-integrated-smart?redirectedFrom=fulltext"
                rel="noreferrer"
              >
                A Comprehensive Survey On AIoT Integrated Smart Health Cities.
              </a>
            </li>
            <li className={styles.inks}>
              <a
                target="_blank"
                className={styles.links}
                href="https://annalsofdentalspecialty.net.in/article/role-of-various-stakeholders-in-application-of-artificial-intelligence-to-forensic-odontology-a-pot-bdso2dkvssoeqgv"
                rel="noreferrer"
              >
              Role Of Various Stakeholders in Application of Artificial Intelligence to Forensic Odontology A Potential Perspective.
              </a>
            </li>
          </ul>
        </div>

        <hr className={styles.line} />

        <div className={styles.certi}>
          <h1 className={styles.certih1}>Certificates</h1>
          <br />
          <ul className={styles.certinfo}>
            <li className={styles.inks}>
              <a
                target="_blank"
                className={styles.links}
                href="https://www.coursera.org/account/accomplishments/certificate/6AR2HDQKLXU4"
                rel="noreferrer"
              >
                Introduction to HTML 5
              </a>
            </li>
            <li className={styles.inks}>
              <a
                target="_blank"
                className={styles.links}
                href="https://www.coursera.org/account/accomplishments/certificate/WR8JW3DPWQAH"
                rel="noreferrer"
              >
                Introduction to CSS, Coursera
              </a>
            </li>
            <li className={styles.inks}>
              <a
                target="_blank"
                className={styles.links}
                href="https://www.coursera.org/account/accomplishments/certificate/9M94M74VKS97"
                rel="noreferrer"
              >
                Interactivity with JavaScript, Coursera
              </a>
            </li>
            <li className={styles.inks}>
              <a
                target="_blank"
                className={styles.links}
                href="https://www.coursera.org/account/accomplishments/certificate/YK82WH4XKRUX"
                rel="noreferrer"
              >
                Advanced Styling with Responsive Design, Coursera
              </a>
            </li>
            <li className={styles.inks}>
              <a
                target="_blank"
                className={styles.links}
                href="https://www.coursera.org/account/accomplishments/certificate/H6Y67VPX7BLR"
                rel="noreferrer"
              >
                Web Design for Everybody Capstone, Coursera
              </a>
            </li>
            <li className={styles.inks}>
              <a
                target="_blank"
                className={styles.links}
                href="https://www.coursera.org/account/accomplishments/certificate/NTP8KPFC5WW4"
                rel="noreferrer"
              >
                Front-End Web UI Frameworks and Tools, Coursera: Bootstrap 4
              </a>
            </li>
            <li className={styles.inks}>
              Letter of Recommendation from Colludera Innovations
            </li>
          </ul>
        </div>

        <hr className={styles.line} />

        <div className={styles.books}>
          <h1 className={styles.certih1}>Top 3 Books</h1>
          <br />
          <div className={styles.gridbook}>
            <img src={b1} alt="Sapiens" className={styles.imgbook} />
            <img src={b3} alt="Rich Dad Poor Dad" className={styles.imgbook} />
            <img
              src={b2}
              alt="Pyschology of Money"
              className={styles.imgbook}
            />
          </div>
        </div>
      </Layout>
    </div>
  )
}
