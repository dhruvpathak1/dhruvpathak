import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from './styles/workexp.module.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'
import Gallery from '../../components/gallery'
import i1 from '../../images/pboplus/1.jpg'
import i2 from '../../images/pboplus/2.jpg'
import i3 from '../../images/pboplus/3.jpg'
import i4 from '../../images/pboplus/4.jpg'
import i5 from '../../images/pboplus/5.jpg'
import i6 from '../../images/pboplus/6.jpg'
import i7 from '../../images/pboplus/7.jpg'
import i8 from '../../images/pboplus/8.jpg'
import i9 from '../../images/pboplus/9.jpg'
import i10 from '../../images/pboplus/10.jpg'

export default function Pboplus() {
  return (
    <div>
      <Layout>
        <div className={styles.title}>
          <p>PBOPlus</p>         
        </div>  
        <div className={styles.header}>
          <Link to="/exp"><button className={styles.jobbutton}><AiOutlineArrowLeft /> Back</button></Link>
          <a className={styles.jobbuttonlink} href="https://github.com/dhruvpathak1/raspberry_pi_mini_projects" target="_blank" rel="noreferrer"><button className={styles.jobbutton}>View Github</button></a><br /><br />
          <h1 className={styles.exptitle}>Experience</h1>
          <ul className={styles.unlist}>
            <li className={styles.list}><b>LED Control Panel:</b><br /> The aim of this project is to connect the LEDs in a circuit and program a connected GUI using Tkinter library in Python is such a way that the LEDs perform certain tasks based on the different buttons. The circuit consists of 2 LEDs (red and green) that can be switch on or off from buttons on the GUI. These LEDs can also be made to blink and fade in and out. For this mini project the materials required are breadboard, LEDs, jumper cables and the Raspberry Pi.</li>
            <li className={styles.list}><b>Face Detection:</b> <br /> The aim of this project is to connect the camera module to capture pictures and detect the no. of faces. The execution is done using Haar Cascade methodology. Paul Viola and Michael Jones presented the Haar Cascade classifier as an effective object identification technique in their article “Rapid Object Detection with a Boosted Cascade of Simple Features” in 2001. Using the haarcascade_frontalface_default.xml, we will attempt to detect the faces of persons in this use-case.</li>
            <li className={styles.list}><b>Motion Detection:</b> <br /> With the help of a camera module and a PIR motion sensor connected to a Raspberry Pi, it is possible to capture images when motion is detected. This project was aimed to capture a picture or video when PIR sensor detects a differential change in the two IR sensors to detect motion.</li>
            <li className={styles.list}><b>Coordinate System:</b> <br /> The MPU6050 is a Micro Electro-Mechanical Systems (MEMS) with a three-axis accelerometer and three-axis gyroscope. This allows us to measure a system's or object's acceleration, velocity, direction, displacement etc. The sensor also helps in detecting the temperature of the environment. This project aims to access the temperature, and the accelaration and gyroscope values in the X,Y and Z coordinate.</li>          
            </ul>
        </div>

        <Gallery img1={i1} title1="Raspberry Pi" img2={i2} title2="LED Control" img3={i3} title3=""
        img4={i4} title4="" img5={i5} title5="Face Detection" img6={i6} title6=""  img7={i7} title7="Motion Detection" img8={i8} title8="" img9={i9} title9="Coordinate System" img10={i10} title10="" />

      </Layout>
    </div>
  )
}
