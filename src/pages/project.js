import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import * as styles from '../styles/project.module.css'

export default function Projects() {
  return (
    <div>
      <Layout>
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
                  <h6>Website and App</h6>
                  <h2 className={styles.courseh2}>INTERESTMENT APP</h2>
                </div>
                <div className={styles.courseinfo}>
                  <h2>Bootstrap &amp; Firebase</h2>
                  <br /><br />
                  <a href="https://interestment.web.app/" rel="noreferrer" className={styles.btn} target="_blank">Vist Website</a>
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
                  <h2 className={styles.courseh2}>MITTAL MOTORS</h2>
                </div>
                <div className={styles.courseinfo}>
                  <h2>Gatsby Js (Real World Project)</h2>
                  <br /><br />
                  <a href="http://mittalmotors.com/" rel="noreferrer" className={styles.btn} target="_blank">Vist Website</a>
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

        <div className={styles.honors}>
          <h1 className={styles.headerh1}>Honors</h1>
        </div>

      </Layout>
    </div>
  )
}
