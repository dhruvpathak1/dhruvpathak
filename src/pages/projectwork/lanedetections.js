import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from './styles/projpage.module.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'
import Gallery from '../../components/gallery';
import z1 from '../../images/projects/detection/1.jpeg'
import z2 from '../../images/projects/detection/2.jpeg'
import z3 from '../../images/projects/detection/3.jpeg'
import { Helmet } from 'react-helmet'

export default function Projlane() {
  return (
    <div>
      <Layout>
        <Helmet title=" Projects | Lane Detection " defer={false} />
        <div className={styles.title}>
          <p>Dectection in GTA V</p>       
        </div>  
        <div className={styles.header}>
          <Link to="/project"><button className={styles.jobbutton}><AiOutlineArrowLeft /> Back</button></Link>
          <a className={styles.jobbuttonlink} href="https://github.com/dhruvpathak1/image_processing_algos_from_self_driving_cars" target="_blank" rel="noreferrer"><button className={styles.jobbutton}>View Github</button></a><br /><br />
          <p className={styles.desp}>The aim of the project was to implement image processing algorithms used in self driving cars and to demonstrate how an automated car sees its environment and how it detects the surrounding obstacles and objects. <br />
          In this project we scan the whole frame once and detect lanes and other surrounding objects like car, person, traffic lights, etc. It also shows a heads-up “Warning” if the car is too close to any other object.
          </p>
          <br /><br />
          <p className={styles.desp}>
          We are performing You Only Look Once Algorithm and Hough Transform Algorithm for Object and Lane Detection Respectively. We have performed these algorithms in a game called GTA V, which is the closest real-life experience.
        </p>
        <br /><br />
        <p className={styles.desp}>For some detailed explanation on each of the algorithms visit:</p>
        </div>
        
        <div className={styles.info}>
          <ul className={styles.unlist}>
            <li className={styles.list}><Link to = '../../blogs/detection1'>Lane Detection - Hough Transform</Link></li>
            <li className={styles.list}><Link to = '../../blogs/detection2'>Object Detection - You Look Only Once</Link></li>
          </ul>
          </div>

          <Gallery img1={z1} title1="Gameplay" img2={z2} title2="Execution Setup" img3={z3} title3="Output" />

      </Layout>
    </div>
  )
}
