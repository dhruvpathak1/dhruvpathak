import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from './styles/projpage.module.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'
import Gallery from '../../components/gallery';
import z1 from '../../images/projects/pharma/1.png'
import z2 from '../../images/projects/pharma/2.png'
import z3 from '../../images/projects/pharma/3.png'
import z4 from '../../images/projects/pharma/4.png'
import z5 from '../../images/projects/pharma/5.png'
import z6 from '../../images/projects/pharma/6.png'
import z7 from '../../images/projects/pharma/7.png'
import z8 from '../../images/projects/pharma/12.png'
import z9 from '../../images/projects/pharma/11.png'
import z10 from '../../images/projects/pharma/10.png'

export default function Pharmacy() {
  return (
    <div>
      <Layout>
        <div className={styles.title}>
          <p>Pharmacy Software</p>       
        </div>  
        <div className={styles.header}>
          <Link to="/project"><button className={styles.jobbutton}><AiOutlineArrowLeft /> Back</button></Link>
          <a className={styles.jobbuttonlink} href="https://github.com/dhruvpathak1/pharmacy_database_python_mysql" target="_blank" rel="noreferrer"><button className={styles.jobbutton}>View Github</button></a><br /><br />
          <p className={styles.desp}>I aimed to create a Pharmacy Management System using MySQL for the back-end database purposes and Python (TKinter Module) for the front-end user interface.</p>
          <br /><br />
          <p className={styles.desp}>The system has the following functionalities:</p>
        </div>
        <div className={styles.info}>
          <ul className={styles.unlist}>
            <li className={styles.list}>The pharmacist uses this software to get the details and the reference of customers and hospitals which they provide services to.</li>
            <li className={styles.list}>It is even used to keep a track of medical items such as medicines, sanitation items, etc.</li>
            <li className={styles.list}>The status of all the medicines can be easily obtained through this software, i.e., if the medicine is in stock or not, the shelf number, whether it is in stock or not, if it is expired or not, etc.</li>
            <li className={styles.list}>It is used to keep a record of the purchased medicine and the respective amount.</li>
            <li className={styles.list}>Further, the customer/hospital will be able to keep a track of their order and pay.</li>
            <li className={styles.list}>The log-in section at the first will allow the customer/hospital to enter the pharmacy system and place its order. If an account doesn’t exist, the system even allows to create a new account with all the detail.</li>
          </ul>
          </div>

          <Gallery img1={z1} title1="" img2={z2} title2="" img3={z3} title3="" img4={z4} title4="" img5={z5} title5="" img6={z6} title6="" img7={z7} title7="" img8={z8} title8="" img9={z9} title9="" img10={z10} title10="" />

      </Layout>
    </div>
  )
}
