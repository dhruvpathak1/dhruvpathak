import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from '../../styles/template.module.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'
import m1 from '../../images/blogs/options/o1.webp'
import m2 from '../../images/blogs/options/o2.png'
import m3 from '../../images/blogs/options/o3.png'
import m4 from '../../images/blogs/options/o4.png'
import m5 from '../../images/blogs/options/o5.png'
import m6 from '../../images/blogs/options/o6.png'
import m7 from '../../images/blogs/options/o7.png'
import m8 from '../../images/blogs/options/o8.png'
import m9 from '../../images/blogs/options/o9.png'
import m10 from '../../images/blogs/options/o10.png'
import m11 from '../../images/blogs/options/o11.png'
import m12 from '../../images/blogs/options/o12.png'
import m13 from '../../images/blogs/options/o13.png'
import m14 from '../../images/blogs/options/o14.png'
import m15 from '../../images/blogs/options/o15.png'
import m16 from '../../images/blogs/options/o16.png'
import m17 from '../../images/blogs/options/o17.png'
import m18 from '../../images/blogs/options/o18.png'
import { Helmet } from 'react-helmet'

export default function Options() {
  return (
    <div>
      <Layout>
        <Helmet title=" Blogs | Put Options " defer={false} />
        <div className={styles.title}>
          <p>Python (Yahoo API)</p>         
        </div>  
        <div className={styles.header}>
          <Link to="/blog"><button className={styles.jobbutton}><AiOutlineArrowLeft /> Back</button></Link><br /><br />
          <h1 className={styles.jobtitle}>Options Trading &amp; Put Options Code</h1>
        </div>
        <div className={styles.matter}>
          <p><strong>What are Stocks?</strong></p>
          <p>Stocks of a cooperation or a company are pieces of a company that can be owned by general public. Ownership of these stocks entitle the owner to dividends and assets equal to the percentage of stocks owned. Units of stocks is called shares.</p>
          <p>A stock market is referred to as a <strong>bull market</strong> if it is rising in value. For a declining stock market, the term used is <strong>bear</strong>.</p>
          <p><img src={m1} alt="1" /></p>
          <p><strong>What is a Stock Exchange?</strong></p>
          <p>A stock exchange is a central location where the shares of publicly traded companies are bought and sold. Examples of Stock Exchanges are New York Stock Exchange (NYSE), Tokyo Stock Exchange (JPX), London Stock Exchange (LSE), Shanghai Stock Exchange (SSE) ,Bombay Stock Exchange (BSE) etc.</p>
          <p><strong>What is a Stock Index?</strong></p>
          <p>A stock market index or stock index is an index that measures the whole stock market or a portion of the market.</p>
          <p>Example of indexes representing the whole market are :-</p>
          <ul>
          <li><strong>NIFTY 50</strong> is the stock index including 50 largest companies listed in the Nation Stock Exchange in India.</li>
          <li><strong>S&amp;P 500</strong> is the stock index including 500 largest companies in the United States of America.</li>
          </ul>
          <p>Examples of indexes specific to an industry or a subset of the market are:</p>
          <ul>
          <li><strong>NIFTY AUTO</strong> is designed to reflect the behavior and performance of the Automobiles sector which includes manufacturers of cars &amp; motorcycles, heavy vehicles etc.</li>
          <li><strong>DJUSPR</strong> (Dow Jones US Pharmaceuticals) is designed to represent 11 companies involved in various phases of the development, production, and marketing of pharmaceuticals.</li>
          </ul>
          <p><strong>What are Stock Options?</strong></p>
          <p>Options in a stock market is a contract that gives the buyer a right to buy or sell stocks at a fixed predetermined price before a certain date is reached.</p>
          <p>There are several terminologies used in Options trading as explained below :</p>
          <ul>
          <li><strong>Contract</strong> means the no. of options a person buys. 1 contract consists of a 100 shares of a stock.</li>
          <li><strong>Expiration Date</strong> is a fixed date the trader expects the stock price to rise or fall. This helps in determining the value on an option as expiration dates at a time value to it.</li>
          <li><strong>Premium</strong> is the amount one pays to buy an options contract. This premium depends on the intrinsic value of the stock and the time value.</li>
          <li><strong>Strike Price</strong> is that particular price a trader expects the stock to be bought or sold at went the options are activated or exercised upon.</li>
          </ul>
          <p>The two types of Options are :</p>
          <ul>
          <li><strong>Puts,</strong> which is a bet that a stock will fall</li>
          <li><strong>Calls,</strong> which is a bet that a stock will rise. </li>
          </ul>
          <p><strong>Call Options...</strong></p>
          <p>When you buy a call option, you’re buying the right to purchase from the seller of that option 100 shares of a particular stock at a strike price. You have to exercise your call by a certain date or it expires. To purchase a call option, you pay the seller of the call a fee (premium). When you hold a call option, you hope the market price of the stock associated with it will increase in the near future. Why? If the stock price increases enough to exceed the strike price, you can exercise your call and buy that stock from the call’s seller at the strike price, or in other words, at a price below the stock’s market value. Then you can either keep the shares (which you obtained at a bargain price) or sell them for a profit. But what happens if the price of the stock goes down, rather than up? You let the call option expire and your loss is limited to the cost of the premium. [1]</p>
          <p><strong>Put Options...</strong></p>
          <p>When you buy a put option, you’re buying the right to force the person who sells you the put to purchase 100 shares of a particular stock from you at the strike price. When you hold put options, you want the stock price to drop below the strike price. If it does, the seller of the put will have to buy shares from you at the strike price, which will be higher than the market price. Because you can force the seller of the option to buy your shares at a price above market value, the put option is like an insurance policy against your shares losing too much value. If the market price instead goes up rather than down, your shares will have increased in value and you can simply let the option expire because all you’ll lose is the cost of the premium you paid for the put. [2]</p>
          <hr />
          <p>Programming Language: Python</p>
          <p>Libraries: Pprint, Datetime, Json, Math, Time, Schedule, Urllib, ToastNotifier</p>
          <p><b><a href="https://github.com/dhruvpathak1/options_api">GitHub: dhruvpathak1/put_options_code</a></b></p>
          <hr />
          <p>This individual project aims to use Yahoo Finance API and filter out the required PUT Options that fit a validation criteria. A scheduler is added that will execute the code periodically after every hour.</p>
          <p>(The following output is for AAPL (Apple) stock, on 26th Nov, 2020)</p>
          <p><strong>Step 1 (Scheduler)</strong></p>
          <p><img src={m2} alt="a" /></p>
          <p>The code snippet above schedules to run any particular function after every hour. The scheduler will call the options_api() function here.</p>
          <p><strong>Step 2 (API Call)</strong></p>
          <p><img src={m3} alt="c1" /></p>
          <p>The list stock[] can have multiple companies to be run in a for loop to fetch the Yahoo Finance API call. The JSON data is read and printed in pretty print format as shown below:</p>
          <p><img src={m4} alt="1" /><img src={m5} alt="2" /><img src={m6} alt="3" /><img src={m7} alt="4" /></p>
          <p>Each company in the stock[] list will have a separate API call to fetch the stock data of that particular company.</p>
          <p><strong>Step 3 (Expiration Date Calculation)</strong></p>
          <p>The dates_within_range() function is called to calculate the epoch time of days that are 35 to 50 days ahead of the current epoch time.</p>
          <p>This is done to find Put Options values with expiration dates that are a month or 2 ahead from the current date. <strong>(Criteria 1).</strong></p>
          <p><img src={m8} alt="t1" /></p>
          <p>All expiration dates within the conditional range are stored in a list req_dates[]. The epoch time and the expiration date satisfying the criteria for AAPL is shown below:</p>
          <p><img src={m9} alt="t2" /></p>
          <p><strong>Step 4 (Second API Call)</strong></p>
          <p>A second API call is made for each expiration dates stored in the req_dates[] list in a loop. For each iteration, put_options_for_req_dates() function is called.</p>
          <p><img src={m10} alt="z" /></p>
          <p><strong>Step 5 (Finding 70% of Current Stock Price &lt; Strike Price &lt; 110% of Current Stock Price)</strong></p>
          <p>A lower and upper range is calculated that is 70% and 110% of the current stock price <strong>(Criteria 2).</strong> All the strike prices are then compared. Data for those strike prices that fall within the lower and upper range are stored in key, values pairs.</p>
          <p>The second API data is used, not the first because it fetches stock data of companies only satisfying Criteria 1., making it easy to handle data.</p>
          <p><img src={m11} alt="y1" /></p>
          <p>Strike price, bid, ask and implied volatility is then printed on the console after the unwanted data is popped out.</p>
          <p><img src={m12} alt="y2" /></p>
          <p><strong>Step 6 (Sending Notification)</strong></p>
          <p>After the data satisfying both the criteria is displayed, a notification is sent to the user.</p>
          <p><img src={m13} alt="c2" /><img src={m14} alt="y3" /></p>
          <hr />
          <p><strong>Sample 1:</strong></p>
          <p><img src={m15} alt="s1" /><img src={m16} alt="s2" /><img src={m17} alt="s3" /><img src={m18} alt="s4" /></p>
          <hr />
          <p>References:</p>
          <p><a href="https://www.stockmarketloss.com/practice/options/#:~:text=An%20option%20is%20a%20contract,of%20the%20particular%20underlying%20asset\).)">[1] and [2] [Stock Market Loss]</a></p>
        </div>
      </Layout>
    </div>
  )
}
