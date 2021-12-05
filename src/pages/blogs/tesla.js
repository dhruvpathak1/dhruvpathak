import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from '../../styles/template.module.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'
import m1 from '../../images/blogs/tesla/001.jpeg'
import m2 from '../../images/blogs/tesla/002.jpeg'
import m3 from '../../images/blogs/tesla/003.jpeg'
import m4 from '../../images/blogs/tesla/004.jpeg'
import m5 from '../../images/blogs/tesla/005.png'
import m6 from '../../images/blogs/tesla/006.jpeg'
import m7 from '../../images/blogs/tesla/007.jpeg'
import m8 from '../../images/blogs/tesla/008.png'
import m9 from '../../images/blogs/tesla/009.jpeg'
import m10 from '../../images/blogs/tesla/010.png'
import m11 from '../../images/blogs/tesla/011.png'
import m12 from '../../images/blogs/tesla/012.png'
import m13 from '../../images/blogs/tesla/013.jpeg'
import m14 from '../../images/blogs/tesla/014.png'
import m15 from '../../images/blogs/tesla/015.jpeg'
import m16 from '../../images/blogs/tesla/016.jpeg'
import m17 from '../../images/blogs/tesla/017.png'
import m18 from '../../images/blogs/tesla/018.png'

export default function Tesla() {
  return (
    <div>
      <Layout>
        <div className={styles.title}>
          <p>Science</p>         
        </div>  
        <div className={styles.header}>
          <Link to="/blog"><button className={styles.jobbutton}><AiOutlineArrowLeft /> Back</button></Link><br /><br />
          <h1>Science behind Tesla&#39;s Electric Cars</h1>
        </div>
        <div className={styles.matter}>
          <p><strong>A 192 year history of electric cars...</strong></p>
          <p>Have you ever thought when was the first electric car ever made ? The answer, 1828. Yes ! it was in 1828 when a man named <strong>Anyos Jedlik</strong> invented a car that is now shaping up the future of this 2 trillion dollar industry. In the early 1900’s, electric cars accounted for one-third of the market but, by 1920 it all changed. This was due to gas powered motors having greater mileage, more horsepower and gas as a resource was in abundance. The gas motored market grew for 60 more years before pollution and rising gas prices due to the scarcity of the resources became a concern.</p>
          <p>This is when the evolution of electric vehicles came back in the cycle. After 20 plus years of research and development, companies came out with electric cars that don’t just match the performance of gas cars but better them. The company that leads this evolution is Tesla.</p>
          <p>Therefore today we will be diving deep in the working of Tesla electric cars.</p>
          <p><strong>Working of Tesla Electric Cars...</strong></p>
          <p>There are 4 main parts in a Tesla electric car :-</p>
          <p><strong>1. Induction Motor</strong></p>
          <p><strong>2. Battery Pack or Energy Storage System</strong></p>
          <p><strong>3. Inverter</strong></p>
          <p><strong>4. Gear Box</strong></p>
          <p><img src={m1} alt="Tesla Car Diagram"/></p>
          <p><strong>1.</strong> First, the <strong>induction motor.</strong> In simple words it is the powerhouse of the car that generates the rotating motion.</p>
          <p>The induction motor used was invented by Nikola Tesla in 1887-1888. It has 2 main parts, the <strong>Stator</strong> (stationary part) and the <strong>Rotor</strong> (rotating part). A Stator is made by stacking thin-slotted highly permeable steel lamination. It has a 3 coil winding and three-phase AC power input is given to it. The Rotor sits inside the Stator.</p>
          <p><img src={m2} alt="Induction Motor Diagram"/>
          <img src={m3} alt="Stator"/></p>
          <p>When the three phased AC Current passes through the windings, a rotating magnetic field (RMF) is produced. The Rotor has a flow of current in it because RMF causes a varying magnetic field that generates an electro-motive force (EMF) in the Rotor (Faraday&#39;s Law). As the current is generated, the Lorentz Force Law will cause the Rotor to rotate.</p>
          <p><img src={m4} alt="RMF" /></p>
          <p>The rotational speed of the Rotor is always less than the RMF.</p>
          <p>The speed of the Rotor is directly proportional to the frequency of the AC Current supplied and this makes electric cars easy,reliable and robust as controlling the motor becomes simple.</p>
          <p><strong>Why are induction motors better than combustion engines...</strong></p>
          <p><img src={m5} alt="Gas Cars vs Electric Cars" /></p>
          <p>To understand in more detail visit, <a href="https://youtu.be/AQqyGNOP_3o">Induction Motor</a>.</p>
          <p><strong>2.</strong> Second, the <strong>battery pack.</strong> It provides the power to the motor, called the Energy Storage System (ESS)</p>
          <p>All Tesla cars use batteries that we all use for daily purposes. The only difference here, they use over 7000 of these rechargeable <strong>Lithium ion cells.</strong> They are placed in battery modules in parallel and series connections, there are 16 modules in a car. A computer processor controls each sector for charging and discharging. The gap between the batteries has a metallic tube that passes a Glycol coolant through them. This way, effective cooling is guaranteed which is not possible if one single large battery was used. The coolant is passed through a radiator at the front of the vehicle.</p>
          <p><img src={m6} alt="Tesa Battery" /><img src={m7} alt="ESS"/></p>
          <p>The ESS also has a heating system that helps start the Tesla cars in extreme cold temperatures. This battery design and its working is one of Tesla&#39;s special features. This structure, designing and the idea of using smaller lithium ion batteries is what gives these cars a better battery life and higher range than other competitive cars in the market. Also, due to this structuring, the center of gravity of the whole car is lowered which keeps the car stuck to the road at high speeds,sharp turns or at a steep road.</p>
          <p><strong>3.</strong> Third, the <strong>inverter.</strong> The brain of the electric car.</p>
          <p>The ESS gives direct current or DC and the induction motor needs AC Current. So, to convert the power (DC Current) from the battery pack, an inverter is used.</p>
          <p><img src={m8} alt="DC "/></p>
          <p>A simple inverter has 4 switches that are switched on and off in pairs alternatively. This has to be 120 times in a second and can be achieved by a semiconductor switches MOSFET. Two comparators are used to generate pulses for an average sine wave output. The conversion shown in the graph above is done using Modified Sine Wave Inverters. These sine waves are achieved using <strong>Pulse Width Modulation (PWM).</strong> Most inverters use a technique PWM to turn the DC voltage on and off. The width of each pulse is varied, so that the overall electrical effect is similar to that of a sine wave.  This technique is often applied when powering AC motors.</p>
          <p><img src={m9} alt="PWM" /><img src={m9} alt="Sine Waves" /></p>
          <p>To achieve smoother sine waves, energy storage devices are used that are called passive filters. Inductors and capacitors are used to smoothen the current and voltage respectively.</p>
          <p><img src={m10} alt="Inverter" /></p>
          <p>Tesla uses inverters with multi-leveled voltages to better the output of the sine waves and for high precision. The inverter also controls the AC power frequency and the amplitude of the waves which in turn helps control the speed and the motor power output.</p>
          <p>To understand in more detail visit, <a href="https://www.youtube.com/watch?v=qVeERT4nyz8">Inverters</a>.</p>
          <p><strong>4.</strong> Last, the <strong>gearbox.</strong></p>
          <p>The motor produces rotational motion which is used to rotate the wheels using a gear box. This gearbox sits between the inverter and the motor.</p>
          <p><img src={m11} alt="Machinery" /></p>
          <p>It is a single speed transmission, meaning it uses one or two gears to reduce the RPM of the high speed motor and thereby increasing torque. Tesla uses 2 gears as shown below for this transmission.</p>
          <p><img src={m12} alt="Gear Box" /></p>
          <p>The second part of the gearbox is the Differential gear. It is in automotive mechanics, a gear arrangement that permits power from the engine to be transmitted to a pair of driving wheels, dividing the force equally between them but permitting them to follow paths of different lengths, as when turning a corner or traversing an uneven road.</p>
          <p>Tesla uses an <strong>Open Differential</strong> compared to the complex Limited-slip Differentials used in gas motors. This open differential is made perfect with the use of sensors and algorithms that help determine when power flow cuts are needed in situations like a slippery surface.</p>
          <p><img src={m13} alt="Open Differential Gear" /></p>
          <p>This gear works on the pinion that rotates directly from the rotation by the motor. The pinion rotates the crown wheel which has 2 small gears or spider gears attached to them. The large gears are responsible for rotating the wheel shafts they are connected to.</p>
          <p>On a straight road, the spider gears only rotate with the crown, resulting in both the wheel shafts to turn together as one unit. But, when a car needs to turn, the spider gear starts to spin, causing the outer wheel shaft to have a greater velocity leading to the shaft rotating faster as it needs to cover more distance and the inner wheel shaft with less velocity makes it rotate slower to cover a smaller distance.</p>
          <p><img src={m14} alt="Differential Gearbox" /></p>
          <p>To learn in more detail, <a href="https://www.youtube.com/watch?v=SOgoejxzF8c">Differential Gear</a>.</p>
          <p>Tesla's have about only 17 moving parts in them compared to the conventional 200 in combustion engine vehicles. This practically makes them maintenance free !</p>
          <p>This is how simply a Tesla or any electric car generally works.</p>
          <p><strong>Tesla&#39;s Regenerative Brake System...</strong></p>
          <p>Tesla uniquely uses the energy used up in brakes to charge their battery by changing the kinetic energy of the car into electricity and not waste it in the form of heat.</p>
          <p><img src={m15} alt="Tesla&#39;s Real Car Body" /></p>
          <p>The induction motor acts as a generator here. The Rotor speed is less than the RMF speed but when the brakes are applied, the wheels turn the gears in the gearbox which in turn rotates the Rotor inside the motor. The inverter adjusts the power input to the induction motor for the RMF speed to become slower than the Rotor speed. This makes the motor act as a generator and the coiling in the Stator generates electricity which is used to charge the battery pack and increase the overall efficiency of the electric car.</p>
          <p><strong>What makes Tesla dominate the market...</strong></p>
          <p>Tesla is a tech company, not a car company. They make technology on wheels. That is it, that is the reason they are dominating this space. They use technology to run their cars, the advancement in tech and adding 4 wheels to run on combines to make any Tesla car.</p>
          <p>Tesla is worth over 100 billion dollars in today&#39;s day, more than the combined total of the 2 leading car companies, General Motors and Ford combined ! This shows the shift in the market towards electric cars and the reasons for this is justified.</p>
          <p>Electric cars are faster, lighter, maintenance free, safer, cost per mile is lower than gas, provides more space and the overall performance of the car does not decrease with time. This can be achieved by any electric car right, so why does Tesla currently dominate?</p>
          <p>The answer is the same, technology. Tesla provides high end controls and lets the computers do most of the work for the driver. They provide a large touch screen panel with a smooth user interface that shows in all the details required for driving. No gears make it simpler to drive and their regenerative braking system gives them an edge over others.</p>
          <p><img src={m16} alt="Tesla Interior" /></p>
          <p>But it is not just that, it&#39;s the <strong>auto drive technology and wireless updates</strong> that puts them a mile ahead of any competitors. First lets talk about the wireless updates, currently Tesla is the only company that updates their software. From time to time, after studying the data from their cars on road, they improve their software and provide it to their users. It&#39;s the same as updating an application on your phone, just here, your car gets an upgrade without having to visit a garage for better equipment. The major software updates improve the range over a single charge or the charging of the battery or the self driving mode. This is what keeps the car from losing it&#39;s value over the years as the overall performance only keeps getting better in Tesla cars.</p>
          <p>Now, Tesla&#39;s biggest and most advanced technology in the market currently is the self driving or autopilot. It works using 8 cameras and 12 ultrasonic sensors. Tesla has a 360 degree visibility and 250 meters of range. The general working of these sensors is as follows.</p>
          <p>The Cruise Control is done using the radar and forward-facing cameras that track the position of cars ahead and adjust the Tesla’s speed accordingly. This feature maintains a safe distance between you and the car in front. The distance between the cars depends on the speed both cars are traveling. If a car merges into your lane, the Tesla will monitor its position and reduce speed if necessary. The Tesla will not panic and slam on the brakes if a car merges in your lane and accelerates. The auto-steer function lets the Tesla stay centered in a lane, change lanes, and self-park. To keep the Tesla centered, the cameras around the car track the positioning of road markings and the sensors monitor other cars on the road to keep a safe distance. For the Tesla to change lanes, the driver manually indicates the turn signal, then the sensors prevent the Tesla from merging into other cars. To self-park in parallel and perpendicular positions the car uses both the sensors and cameras to avoid hitting any surroundings.</p>
          <p>(Learn more about <a href="https://btechblogs.herokuapp.com/blog/lanedetection">Lane Detection in Self Driving Cars</a>)</p>
          <p><img src={m17} alt="Tesla Sensors" /><img src={m18} alt="Autopilot" /></p>
          <p><strong>What does this change mean for the future...</strong></p>
          <p>It is estimated by 2040 that the automotive industry will be completely run on electricity. The rising pollution has led to this change but is it really a good change and does it have any positive effect on environment?</p>
          <p>Looking from a buyers point of view, electric cars are convenient and better but the reason the market is shifting is because of the environment. Pollution, the bigger picture. But does this actually solve the issue ?</p>
          <p>15-25% of the pollution comes from the automotive industry and making combustion engines obsolete does reduce the harmful emission of carbon dioxide, sulphur and nitrogenous gases but it leads to a larger dependency on power grids. In countries like the USA and China, 30-40% of their electricity is produced using coal. Seeing the rise in demand of power will lead to more use of coal, leading to higher emission of harmful gases in the environment. Not only is this an issue but also, the manufacturing of lithium-ion batteries. The manufacturing of this product will increase leading to greater mining of the scarcely available minerals and metals used for making these batteries.</p>
          <p>Emission from cars will reduce but the contribution of pollution from electricity production sectors and mining sectors will increase due to the change in demand. So, to actually make electric cars the right step towards the future and to protect the environment, the power grid should be made dependent on renewable resources and slowly reduce the use of coal. Whether the automotive industry actually benefits the environment or do we just use a newer product with lesser effect to the planet and ignore the increase in pollution caused for making and running these products.</p>
          <p>To conclude, it would be safe to say it is a step in the right direction but a rather small one than we make of it. The increasing concerns over the environment is moving us toward renewable energy and that will lead to electric cars actually being a boon to the environment.</p>
        </div>
      </Layout>
    </div>
  )
}
