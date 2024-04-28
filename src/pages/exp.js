import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import * as styles from '../styles/exp.module.css'
import baud from '../images/baud.jpg'
import pboplus from '../images/pboplus.png'
import bewakoof from '../images/bewakoof.png'
import ash from '../images/ash.png'
import iec from '../images/iec.png'
import { AiOutlineArrowRight} from 'react-icons/ai'
import { Helmet } from 'react-helmet'

export default function Experience() {
  return (
    <div>
      <Layout>
        <Helmet title=" Experience " defer={false} />
        <div className={styles.title}>
          <p>My Portfolio</p>         
        </div>  
        <div className={styles.header}>
        <div className={styles.work}>
        <h1 className={styles.exptitle}>Work Experiences</h1><br />

          <div className={styles.jobbox}>
            <div className={styles.topbox}>
              <h1>KPMG</h1>
              <img src={ash} alt="ash" className={styles.logoimg}/>
              <h3>Cyber Analyst</h3>
            </div>
            <div className={styles.jobinfo}>
              <p className={styles.para}>Ash Initiative is a voice through which high school and university students aspire to contribute their bit towards the upliftment of India. Established in 2020, this organization runs digital campaigns, recycles fabric, gives employment, and aspires to make a change.</p>
              <br />
              <h4>June, 2022 - Present</h4>
              <Link to="../experiences/ash"><button className={styles.jobbutton}>Read More <AiOutlineArrowRight /></button></Link>
            </div>
          </div>

          <hr className={styles.line} /><br />
          <h1 className={styles.exptitle}>Internship Experiences</h1><br />

          <div className={styles.jobbox}>
            <div className={styles.topbox1}>
              <h1>Baud Resources</h1>
              <img src={baud} alt="Baud" className={styles.logoimg1}/>
              <h3>Software Developer Intern</h3>
            </div>
            <div className={styles.jobinfo}>
              <p className={styles.para}>Baud Resources are creating cost-efficient and long-duration energy storage technology, namely Gravity Storage and Wind Turbines. As a software Developer, I was tasked to understand the backend working and data-flow of the company. I created an ERP software with multpile modules integrated with data backups. 
              </p>
              <br />
              <h4>August - November, 2021</h4>
              <Link to="../experiences/baud"><button className={styles.jobbutton1}>Read More <AiOutlineArrowRight /></button></Link>
              <br />
            </div>
          </div>

          <div className={styles.jobbox}>
            <div className={styles.topbox}>
              <h1>PBOPlus</h1>
              <img src={pboplus} alt="pboplus" className={styles.logoimg}/>
              <h3>Automation Intern</h3>
            </div>
            <div className={styles.jobinfo}>
              <p className={styles.para}>PBOPlus, a pioneer consulting firm in the field of business process management, offers services which include Process Consulting, Industrial Automation, Robotics, and IoT etc. Joining their leading Robotics and Automation department helped me gain industry experience and it also gave me a proper introduction to Robotics and Automation.</p>
              <br />
              <h4>May - June, 2021</h4>
              <Link to="../experiences/pboplus"><button className={styles.jobbutton}>Read More <AiOutlineArrowRight /></button></Link>
            </div>
          </div>

          <div className={styles.jobbox}>
            <div className={styles.topbox1}>
              <h1>Bewakoof</h1>
              <img src={bewakoof} alt="bewakoof" className={styles.logoimg1}/>
              <h3>Digital Marketing Intern</h3>
            </div>
            <div className={styles.jobinfo}>
              <p className={styles.para}>Bewakoof is a lifestyle fashion brand that makes creative, distinctive fashion for the trendy, contemporary Indian. Bewakoof generates sales majorly through digital marketing and social media outreach. Therefore, working as a digital marketing intern gave me exposure to the core of the company and helped me learn and grow.</p>
              <br />
              <h4>May - June, 2019</h4>
              <Link to="../experiences/bewakoof"><button className={styles.jobbutton1}>Read More <AiOutlineArrowRight /></button></Link>
            </div>
          </div>

        <hr className={styles.line} /><br />
        <h1 className={styles.exptitle}>Extracurricular and Volunteering Experiences</h1><br />

          <div className={styles.jobbox}>
            <div className={styles.topbox}>
              <h1>Ash Initiative NGO</h1>
              <img src={ash} alt="ash" className={styles.logoimg}/>
              <h3>Volunteer</h3>
            </div>
            <div className={styles.jobinfo}>
              <p className={styles.para}>Ash Initiative is a voice through which high school and university students aspire to contribute their bit towards the upliftment of India. Established in 2020, this organization runs digital campaigns, recycles fabric, gives employment, and aspires to make a change.</p>
              <br />
              <h4>May - August, 2020</h4>
              <Link to="../experiences/ash"><button className={styles.jobbutton}>Read More <AiOutlineArrowRight /></button></Link>
            </div>
          </div>

          <div className={styles.jobbox}>
            <div className={styles.topbox1}>
              <h1>Innovation &amp; Entrepreneurship Cell</h1>
              <img src={iec} alt="iec" className={styles.logoimg1}/>
              <h3>Business Development &amp; Marketing Executive</h3>
            </div>
            <div className={styles.jobinfo}>
              <p className={styles.para}>IEC is a student committee that aimed at encouraging students to become entrepreneurs and helped student start-ups to gain exposure through fests and events. Also, it aimed at helping students learn first hand from entrepreneurs themselves.</p>
              <br />
              <h4>August, 2018 - April, 2019</h4>
              <Link to="../experiences/iec_mpstme"><button className={styles.jobbutton1}>Read More <AiOutlineArrowRight /></button></Link>
            </div>
          </div>
        </div>
        </div>
      </Layout>
    </div>
  )
}
