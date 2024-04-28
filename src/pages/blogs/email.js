import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from '../../styles/template.module.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'
import e1 from '../../images/blogs/email/e1.jpeg'
import e2 from '../../images/blogs/email/e3.jpeg'
import e3 from '../../images/blogs/email/e5.jpeg'
import e4 from '../../images/blogs/email/e2.png'
import e5 from '../../images/blogs/email/e6.png'
import e6 from '../../images/blogs/email/e4.png'
import { Helmet } from 'react-helmet'

export default function Email() {
  return (
    <div>
      <Layout>
        <Helmet title=" Blogs | History of Email " defer={false} />
        <div className={styles.title}>
          <p>Technology</p>         
        </div>  
        <div className={styles.header}>
          <Link to="/blog"><button className={styles.jobbutton}><AiOutlineArrowLeft /> Back</button></Link><br /><br />
          <h1 className={styles.jobtitle}>Email - How it happened</h1>
        </div>
        <div className={styles.matter}>
          <p><strong>Invention of Email...</strong></p>
          <p>With more than 4.6 billion users today and 270 billion emails sent everyday, it has been over half a century since the first email was sent.</p>
          <p>The concept of email was first introduced in the 1960&#39;s with the idea of &quot;time-sharing operating system&quot;. In 1965, Tom Van Vleck wrote a command for MAIL where each message could be added to a local file with a private mode called the MAILBOX. The actual published source code can be found <a href="https://www.multicians.org/thvv/mail-details.html">here</a>.</p>
          <p>In 1969, the US Department of Defense implemented ARPANET i.e. <strong>A</strong>dvance <strong>R</strong>easearch <strong>P</strong>rojects <strong>A</strong>gency <strong>Net</strong>work, a network connecting numerous computers across the department for the purpose of communication within the organisation. Albeit, Ray Tomlinson invented the electronic mail in 1971. The first email was sent with the message &quot;QWERTYUIOP&quot;.</p>
          <p><img src={e1} alt="ray tomlinson" /></p>
          <p>There rose an issue while sending emails; how would one indicate where the message was supposed to be sent? Well, Ray Tomlinson solved the problem by using &quot;<strong>@</strong>&quot;. Therefore the syntax since then became - username@computers-name. Later it was updated to username@computers-name.domain, when the DNS (Domain Name System) came into existence.</p>
          <p>By the 1980&#39;s, there were many different email hosting sites that came up; they grew widely as it was one of the first practical applications of internet to the world.</p>
          <p><strong>Email in the 1980&#39;s and 1990&#39;s...</strong></p>
          <p>As internet was growing and people were getting used to the whole concept, many companies came up with email sites. As years progressed, email improved with the option of sending attachments with it.</p>
          <p>In the 1990&#39;s, as internet and world wide web grew exponentially, so did it&#39;s users. From 1997 to 1999, the online audience grew from 55 million to 400 million! By this time, there were some major players in the email service space; Hotmail and Yahoo Mail were among the most popular web based emails and were being most widely used.</p>
          <p><img src={e2} alt="hotmail" /></p>
          <p>By 1999, Yahoo Mail had over 30 million users and Hotmail had over 12 million users worldwide. They were the leaders of free web-based email services before <strong>Gmail</strong> came along in 2004.</p>
          <p><strong>Gmail stole the show...</strong></p>
          <p>Gmail was introduced by Google in 2004. It was Paul Buccheit, their 29th employee who started Gmail as a project. Google had a work culture in the late 1990&#39;s where 20% of your work time should be dedicated to a project of personal interest. This was Paul&#39;s 20%. He coded Gmail using JavaScript that made it&#39;s page loading faster and had a better user interaction.</p>
          <p><img src={e3} alt="gmail" /></p>
          <p>Google launched its free web based services on 1st April, April Fools Day, due to which people believed it was a prank. Though eventually it turned out to be true. But what made Gmail so popular in the near future despite Hotmail and Yahoo Mail having mass amount of users?</p>
          <p>Firstly, it was their storage. Gmail offered it&#39;s users 1GB of space whereas other email service providers like Yahoo and Hotmail offered only 4MB! This small storage often led to constant deletion of emails for users, as 4MB was mere nothing. On the other hand, Gmail did not even have a delete button to promote their larger storage and also the concept of- &quot;you never have to delete emails when you use Gmail&quot;. Secondly, it was their search feature. Google basically being a search engine, added a search bar in Gmail for users to easily search through hundreds of emails.</p>
          <p>Till 2007, Gmail was exclusive and worked on invite-only basis, therefore not everyone could be a Gmail user. This was done to cope with the amount of back-end and provide full services to the current users. This worked perfectly for Google, as the exclusivity became a great marketing aspect of the company. In the early 2000&#39;s, having a Gmail account was a luxury.</p>
          <p><img src={e4} alt="invite gmail" /></p>
          <p>By 2012, Google&#39;s email services surpassed Yahoo and Hotmail (upgraded to Outlook by Microsoft) to have the largest user base. The major reasons for such growth was it&#39;s simple user interface and the convenience it provided. Google was already largely being used for searching, online videos (YouTube) etc, and this led to people effortlessly choosing Gmail over others. Today, Gmail has over 1.5 billion users and provides unique features like mail scheduling, view only attachments (to prevent content from being copied or downloaded) etc.</p>
          <p>Gmail today lets their users use Google Drive, Docs, Sheets, Excel on the web through their mails; they integrated most of their apps within Gmail for users to get dependent on these apps and use their applications over other competitors.</p>
          <p><strong>What next for Gmail...</strong></p>
          <p>Google launched G Suite for businesses as paid tools, to provide all free basic Google tools and extra paid features for ease of business. Today, G Suite has about 5 million users as compared to Microsoft&#39;s 200 million! Microsoft has over 87% of this market due to the popularity and user friendly Office 365 tools. This is the next step for Gmail. After leading the race in the common man&#39;s world for choosing email services, Google will now be looking forward to go head to head with the leaders of business world, Microsoft.</p>
          <p><img src={e5} alt="vs" /></p>
          <p><strong>Microsoft Outlook&#39;s hold in the market...</strong></p>
          <p>Hotmail was bought by Microsoft for 400 million in 1997. They continued it as Hotmail for a while before they upgraded all of its users to Outlook. Today, Outlook is the most widely used email service in the business world. This is because it comes with the tools of Office 365, which are convenient and easy to use in businesses.</p>
          <p>Microsoft leads the race in this sector because it provides good security. It also offers various features such as; it lets its users organize mails in a personalized way which is limited in Gmail, provides offline working, exclamation of email marking urgency or importance of work, voting features in mail, integrated MS Office tools etc.</p>
          <p>The business aspect of Outlook that makes it the best are; detailed contact user cards, job details, job titles, department, location, etc. This is always good for employees to know who they are in contact with and whether the person is online or busy to have a conversation. Also, scheduling a meeting on Outlook allows you to send invites, or automatically reply to invites; it also helps the user know whether the resources needed for the meeting he/she is trying to schedule are available for that time or not. These features make office communication and working easy. Microsoft has specialized Outlook for businesses and the ease it brings to work cannot be found in other email services with such precision.</p>
          <p><strong>What next for email...</strong></p>
          <p>Over the past half century, the number of marketers have increased rather than users. Email was started for the purpose of fast communication and content sharing, but has now become a widely used marketing tool. To handle any inbox not filling up with spam, spam filter has come in the picture. They are accurate with less than 0.05% spam emails passing the filters.</p>
          <p>Emails are the go-to web communication method and are here to stay. With behavioral learning, smart compose in Gmail (a feature where AI auto-completes sentences) and content driven emails are all taking shape for the future. With this, the earliest method of communication on the internet will go on to become ever lasting.</p>
          <p><img src={e6} alt="smart compose" /></p>
        </div>
      </Layout>
    </div>
  )
}
