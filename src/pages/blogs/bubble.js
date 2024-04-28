import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from '../../styles/template.module.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'
import b1 from '../../images/blogs/bubble/b1.jpeg'
import b2 from '../../images/blogs/bubble/b2.png'
import b3 from '../../images/blogs/bubble/b3.jpeg'
import b4 from '../../images/blogs/bubble/b4.jpeg'
import b5 from '../../images/blogs/bubble/b5.webp'
import { Helmet } from 'react-helmet'


export default function Economic() {
  return (
    <div>
      <Layout>
        <Helmet title=" Blogs | Economic Bubbles " defer={false} />
        <div className={styles.title}>
          <p>Finance</p>         
        </div>  
        <div className={styles.header}>
          <Link to="/blog"><button className={styles.jobbutton}><AiOutlineArrowLeft /> Back</button></Link><br /><br />
          <h1 className={styles.jobtitle}>First Economic Bubble of the World</h1>
        </div>
        <div className={styles.matter}>
            <p><strong>What is a bubble?</strong></p>
            <p>The term &quot;bubble,&quot; in a financial context, generally refers to a situation where the price for something—an individual stock, a financial asset, or even an entire sector or market exceeds its fundamental value by a large margin. Because speculative demand, rather than intrinsic worth, causes the inflated prices, the bubble eventually bursts, and massive sell-offs cause prices to decline, often quite dramatically.</p>
            <p><img src={b1} alt="Bubble" /></p>
            <p><strong>5 stages of a bubble...</strong></p>
            <p>Now that we know what a financial bubble is, let us see how economic markets form these bubbles:</p>
            <p>1. Displacement - Introduction of a new paradigm, when some revolutionary concept is introduced, an idea that changes old beliefs or a new leader visioned with futuristic idea for the company takes charge.</p>
            <p>2. Boom - As the new paradigm catches wind, the market price gains momentum and a surge in pricing can be observed. The fear of missing such great opportunities cause more people to invest in the market.</p>
            <p>3. Euphoria - It is the skyrocketing of prices. No caution is taken and people invest with the &quot;greater fools theory&quot; i.e. someone will always be willing to buy at a price higher than what you paid for.</p>
            <p>4. Profit Taking - As the prices go over the roof, many investors start selling, seeing a good profit being made on their investment. Suddenly the price surge slows down and starts dipping, which triggers a fear in the market.</p>
            <p>5. Panic - The dip in price causes panic in the market and leads to a domino effect. Everyone starts selling, and the bubble bursts! Supply becomes more than demand and people start selling at any price available. The highly priced paradigm value drops down to new lows resulting in a bubble formation that burst.</p>
            <p><img src={b2} alt="bubble1" /></p>
            <p><strong>First known Economic Bubble...</strong></p>
            <p>The first ever economic bubble occurred in Holland, today known as The Netherlands. It is famously known as <strong>&quot;Tulipmania&quot;</strong>. Tulips were introduced to the Dutch in the 16th century from Turkey and have since then been cultivated on large scales till date.</p>
            <p><img src={b3} alt="tulip" /></p>
            <p>In the early 16th century, tulips were part of a cornucopia of new plants to arrive in Europe including potatoes, green and red peppers, tomatoes, Jerusalem artichokes, French beans and runner beans. The beauty of these flowers made the wealthy display them as a symbol of excellence and riches, just like a collection of paintings and artifacts.</p>
            <p>The Netherlands had the first stock company and the first modern stock market of the world. They also had dominance in world trade comprising mainly of sugar and spices in the 17th century. This led to the invention of &quot;middle class&quot; that revolutionized the world; marking it as the <strong>&quot;golden era&quot;</strong> of the Dutch history. The absence of kings led to the rich flaunting their riches by buying expensive painting, vases etc. Also, they bought the latest traded item in the country to show that they were in sync with the trend. This was how the tulips became a novelty in The Netherlands. Favorable conditions for plantation and the flaunting of tulips by the elite made it a symbol of richness.</p>
            <p><strong>Nature of tulips...</strong></p>
            <p>Tulips are single colored and they grow rather slowly; it takes 10 years for them to flower, and they blossom only for a few months i.e. between March and May. The buds however, can be cut and earthed between June and September before being planted again in October, for the flowers to blossom again from March to May, in just 3 years. So, we can see that the sale of tulips which was seasonal led to the introduction of <strong>&quot;Futures&quot;</strong>. A Future in an agreement, in this case for the tulips, bought at an agreed price that are delivered and paid for in the future. This made the sale of tulips possible all over the year.</p>
            <p><strong>Craze over tulips...</strong></p>
            <p>There was a steady increase in the prices of tulips and the frenzy lead to the worth of one flower being as high as 5,200 guilders, equivalent to a house in the posh streets of Holland of the 17th century. The highest priced tulip was the Semper Augustus, they were not monochromatic but had flame patterned petals that was caused due to a virus not known to the tulip-lovers of that time. Futures might have made it easy to trade but the downside of these agreements was - it became a tool used as a source for short term profit making and a quick to riches shortcut.</p>
            <p><img src={b4} alt="flower" /></p>
            <p>For example, the owner of 10 tulips, that costed him 20 guilders, sold the flowers to Buyer A who was willing to pay 25 guilder as futures. This meant that when the plants were in bud condition and could be unearthed, the buyer would pay 25 guilders when the buds would be delivered to him. But, Buyer A would then find a Buyer B, who was willing to pay 30 guilders for the futures contract Buyer A owned. Buyer A sold his futures agreement to Buyer B making a profit. This was how the bubble was formed. People started buying futures with the thought of selling it to others for a greater amount, without knowing what kind of bud was being sold or whether the bud would even blossom. The bubble was caused because of the <strong>&quot;greater fools theory&quot;</strong> i.e. some fool would always be ready to buy your assets for a price greater than what you paid for. The problem arose when people realized that the asked prices for the tulips were extraordinarily high and therefore they refused to buy the flowers at these prices. This tulip craze <strong>dooms day</strong> arrived on 9th February, 1637 when the tulip enthusiasts all refused to bid for the futures at the high prices set by the sellers. Panic ensued when no buyers came forward that day, the sellers were then forced to sell all their future agreements at extremely low prices to minimize their losses. This news spread all over Holland like wild fire! All future owners started selling their future contracts in a fear of losing all their money.</p>
            <p><img src={b5} alt="tulip" /></p>
            <p>The greater fools theory was the main reason behind the tulip craze in The Netherlands and the bubble burst when the buyers denied to pay astronomical prices for just a flower. This was the first ever bubble that occurred, but many more have since destroyed lives time and over again. Still, we are yet to learn that being greedy and shortcuts to money making only disrupts the world.</p>
            <p><strong>Future of tulips...</strong></p>
            <p>Within a few years the tulip market adjusted itself, and since then the flower market has flourished making The Netherlands the largest exporters of flowers all over the world, with over a 52% market share. Semper Augustus, the most expensive tulip of &#39;Tulipmania&#39; does not exist today because the virus causing the unique flames, has been eradicated. Funny enough, we will never be able to see the flower that led to the madness of the first ever economic bubble.</p>

        </div>
      </Layout>
    </div>
  )
}
