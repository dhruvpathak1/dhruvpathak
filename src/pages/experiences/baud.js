import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from './styles/workexp.module.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'
import Gallery from '../../components/gallery';
import i1 from '../../images/baud/1.png'
import i2 from '../../images/baud/2.png'
import i3 from '../../images/baud/3.png'
import i4 from '../../images/baud/4.png'
import i5 from '../../images/baud/5.png'
import i6 from '../../images/baud/6.png'
import i7 from '../../images/baud/7.png'
import i8 from '../../images/baud/8.png'
import { Helmet } from 'react-helmet'

export default function Baud() {

  return (
    <div>
      <Layout>
        <Helmet title=" Work | Baud Resources " defer={false} />
        <div className={styles.title}>
          <p>Baud Resources</p>         
        </div>  
        <div className={styles.header}>
          <Link to="/exp"><button className={styles.jobbutton}><AiOutlineArrowLeft /> Back</button></Link> <br /><br />

          <h1 className={styles.exptitle}>Experience</h1>
          <ul className={styles.unlist}>
            <li className={styles.list}>Learnt Enterprise Resource Planning (ERP) software development and its features.</li>
            <li className={styles.list}>Used App Script to automate and integrate 3rd party use of Google Sheets.</li>
            <li className={styles.list}>Executed the ERP software requirements, wire-frames, data flow and design for the organization.</li>
            <li className={styles.list}>Created a warehouse interface to add, edit, search and view data stored in Google Sheets.</li>
            <li className={styles.list}>Understood financial modeling and the dependence of different factors in pricing.</li>
            <li className={styles.list}>Implemented the financial model GUI.</li>
          </ul>
        </div>

        <Gallery img1={i3} title1="" img2={i2} title2="" img3={i1} title3="" img4={i4} title4="" img5={i5} title5="" img6={i6} title6="" img7={i8} title7="LCOS Sheet" img8={i7} title8="Warehouse Data Sheet"/>

      </Layout>
    </div>
  )
}
