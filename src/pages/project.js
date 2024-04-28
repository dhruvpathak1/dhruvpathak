import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import * as styles from '../styles/project.module.css'
import sc from '../images/socialconclave.jpeg'
import cg from '../images/cyberguest.jpg'
import { Helmet } from 'react-helmet'

export default function Projects() {
  return (
    <div>
      <Layout>
        <Helmet title=" Projects " defer={false} />
        <div className={styles.title}>
          <p>Projects &amp; Honors</p>         
        </div>  
        <div className={styles.header}>
          <h1 className={styles.headerh1}>Projects</h1>
        </div>
        <div className={styles.proj}>

            <div>
              <div className={styles.course}>
                <div className={styles.coursepreview}>
                  <h6>Raspberry Pi / Arduino Uno</h6>
                  <h2 className={styles.courseh2}>UNMANNED ROVER</h2>
                </div>
                <div className={styles.courseinfo}>
                  <h2>Python &amp; Firebase</h2>
                  <br /><br />
                  <a href="https://fyprover.netlify.app/" rel="noreferrer" className={styles.btn} target="_blank">Vist Website</a>
                  <Link to='../projectwork/rover' className={styles.btn}>Read More</Link>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.course}>
                <div className={styles.coursepreview}>
                  <h6>Website and App</h6>
                  <h2 className={styles.courseh2}>INTERESTMENT APP</h2>
                </div>
                <div className={styles.courseinfo}>
                  <h2>Bootstrap &amp; Firebase</h2>
                  <br /><br />
                  <a href="https://interestment.netlify.app/" rel="noreferrer" className={styles.btn} target="_blank">Vist Website</a>
                  <Link to='../projectwork/interestment' className={styles.btn}>Read More</Link>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.course}>
                <div className={styles.coursepreview}>
                  <h6>Algorithms</h6>
                  <h2 className={styles.courseh2}>LANE DETECTION</h2>
                </div>
                <div className={styles.courseinfo}>
                  <h2>Python - OpenCV</h2>
                  <br /><br />
                  <Link to='../projectwork/lanedetections' className={styles.btn}>Read More</Link>
                </div>
              </div>
            </div>


            <div>
              <div className={styles.course}>
                <div className={styles.coursepreview}>
                  <h6>API</h6>
                  <h2 className={styles.courseh2}>PUT OPTIONS</h2>
                </div>
                <div className={styles.courseinfo}>
                  <h2>Python - Yahoo Finance API</h2>
                  <br /><br />
                  <Link to='../projectwork/options' className={styles.btn}>Read More</Link>
                </div>
              </div>
            </div>


            <div>
              <div className={styles.course}>
                <div className={styles.coursepreview}>
                  <h6>Website</h6>
                  <h2 className={styles.courseh2}>TECH-E TRASH</h2>
                </div>
                <div className={styles.courseinfo}>
                  <h2>Gatsby JS</h2>
                  <br /><br />
                  <a href="https://tech-e-trash.herokuapp.com/" rel="noreferrer" className={styles.btn} target="_blank">Vist Website</a>
                  <Link to='../projectwork/techetrash' className={styles.btn}>Read More</Link>
                </div>
              </div>
            </div>


            <div>
              <div className={styles.course}>
                <div className={styles.coursepreview}>
                  <h6>Website</h6>
                  <h2 className={styles.courseh2}>DENTAL CLINIC</h2>
                </div>
                <div className={styles.courseinfo}>
                  <h2>Gatsby JS</h2>
                  <br /><br />
                  <a href="https://kunjdental.herokuapp.com/" rel="noreferrer" className={styles.btn} target="_blank">Vist Website</a>
                </div>
              </div>
            </div>


            <div>
              <div className={styles.course}>
                <div className={styles.coursepreview}>
                  <h6>Website</h6>
                  <h2 className={styles.courseh2}>DOCTORS PRESCIPTION PAD</h2>
                </div>
                <div className={styles.courseinfo}>
                  <h2>HTML CSS JS (Real World Project)</h2>
                  <br /><br />
                  <a href="https://presciptiondoc.netlify.app/" rel="noreferrer" className={styles.btn} target="_blank">Vist Website</a>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.course}>
                <div className={styles.coursepreview}>
                  <h6>Software</h6>
                  <h2 className={styles.courseh2}>PHARMACY DBMS</h2>
                </div>
                <div className={styles.courseinfo}>
                  <h2>Python - Tkinter  &amp; MySQL</h2>
                  <br /><br />
                  <Link to='../projectwork/pharma' className={styles.btn}>Read More</Link>
                </div>
              </div>
            </div>     
        </div>

        <hr className={styles.line} />

        <div className={styles.headerdiv}>
          <h1 className={styles.headerh1}>Honors</h1>
        </div>
          <div className={styles.honors}>
            <div className={styles.block}>
            <h2>Guest Speaker, MGM Dental College</h2>
            <p className={styles.blockpara}>Guest lecture on ‘Cybersecurity: Understanding and Methodology’ at MGM Dental College and Hospital, Navi Mumbai. To celebrate the National Cybersecurity Awareness Month (NCSAM) and interact with over 100+ avid listeners.</p>
            <img src={cg} alt="Cyber Guest Lecture" className={styles.blockimg} />
          </div>
          <div className={styles.block}>
            <h2>1st Runner-Up, Social Conclave 2019</h2>
            <p className={styles.blockpara}>An annual event held by NMIMS in collaboration with UNICEF,the event aims not only to spread awareness on social issues but also to act and bring a change in the society. Participants from all over the country compete in groups, in a 3 day competition which tests your report writing, presentation and debating skills.</p>
            <img src={sc} alt="Social Conclave" className={styles.blockimg} />
          </div>
        </div>

      </Layout>
    </div>
  )
}
