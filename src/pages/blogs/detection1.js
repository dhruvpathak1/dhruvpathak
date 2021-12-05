import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from '../../styles/template.module.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'
import q1 from '../../images/blogs/lane/q1.jpeg'
import q2 from '../../images/blogs/lane/q2.jpeg'
import q3 from '../../images/blogs/lane/q3.jpeg'
import q4 from '../../images/blogs/lane/q4.png'
import q5 from '../../images/blogs/lane/q5.png'
import q6 from '../../images/blogs/lane/q6.png'
import q7 from '../../images/blogs/lane/q7.png'
import q8 from '../../images/blogs/lane/q8.png'
import q9 from '../../images/blogs/lane/q9.jpeg'
import q10 from '../../images/blogs/lane/q10.png'
import q11 from '../../images/blogs/lane/q11.png'
import q12 from '../../images/blogs/lane/q12.png'
import q13 from '../../images/blogs/lane/q13.png'
import q14 from '../../images/blogs/lane/q14.png'
import q15 from '../../images/blogs/lane/q15.png'
import q16 from '../../images/blogs/lane/q16.png'
import q17 from '../../images/blogs/lane/q17.png'
import q18 from '../../images/blogs/lane/q18.jpg'
import q19 from '../../images/blogs/lane/q19.jpg'
import q20 from '../../images/blogs/lane/q20.png'
import q21 from '../../images/blogs/lane/q21.png'
import q22 from '../../images/blogs/lane/q22.png'
import q23 from '../../images/blogs/lane/q23.png'
import q24 from '../../images/blogs/lane/q24.png'
import q25 from '../../images/blogs/lane/q25.png'

export default function Lane() {
  return (
    <div>
      <Layout>
        <div className={styles.title}>
          <p>Python (OpenCV)</p>         
        </div>  
        <div className={styles.header}>
          <Link to="/blog"><button className={styles.jobbutton}><AiOutlineArrowLeft /> Back</button></Link><br /><br />
          <h1>Image Processing in Autonomous Cars - PART I</h1>
        </div>
        <div className={styles.matter}>
        <p><strong>What are Autonomous cars?</strong></p>
        <p>An autonomous car is a vehicle capable of sensing its environment and operating without human involvement. A human passenger is not required to take control of the vehicle at any time, nor is a human passenger required to be present in the vehicle at all. An autonomous car can go anywhere a traditional car goes and do everything that an experienced human driver does. The Society of Automotive Engineers (SAE) currently defines 6 levels of driving automation ranging from Level 0 (fully manual) to Level 5 (fully autonomous). These levels have been adopted by the U.S. Department of Transportation.  [1]</p>
        <p><img src={q1} alt="levels" /></p>
        <p><strong>How self-driving cars can see?</strong></p>
        <p>Cameras are the eyes of the cars. They play a vital role when it comes to self-driving cars. It is these cameras that help any autonomous car detect lanes, different traffic lights, other cars, humans etc. Sensors like LIDAR, RADAR are added to help the car understand better about its environment in situations like rain, fogs, camera obstruction etc. Any self-driving car will have multiple cameras placed in the front, sides and rear to obtain a 360 degree view. These &quot;eyes&quot; can see the surrounding but not understand it. To process the surroundings a &quot;brain&quot; is needed to run multiple algorithms and understand what the camera can see. Among the multiple algorithms used, 2 widely used algorithms are Lane Detection and Object Detection.</p>
        <p>The detailed explanation of the theory and working of both these image processing algorithms has been done. The code for respective algorithms can be found on the GitHub links mentioned in the introduction of each algorithm.</p>
        <p><strong>Lane Detection (using Hough Transform) Algorithm</strong></p>
        <p>In this study, we present a perception algorithm that is based purely on vision or camera data. We focus on demonstrating an end-to-end lane detection method using contemporary computer vision techniques for self-driving cars. We first present a basic approach based on edge detection and Hough transform which is the baseline approach for detecting only the straight lane lines.</p>
        <p>We will study in detail, detecting lanes in images as any lane detection in videos, is done on individual frames i.e. individual images.</p>
        <hr />
        <p>Programming Language: Python</p>
        <p>Libraries: OpenCV, Numpy, Pyplot from Matplot Lib</p>
        <p>GitHub: [dhruvpathak1/lane_detection](<a href="https://github.com/dhruvpathak1/lane_detection)">https://github.com/dhruvpathak1/lane_detection)</a></p>
        <hr />
        <p><strong>Sample 1:</strong></p>
        <p><img src={q4} alt="original" /></p>
        <p><strong>I. Convert to Grayscale</strong></p>
        <p>A conversion to grayscale is needed as the original image comprises of 3 channels (red, green, blue), meaning each pixel is a combination of 3 intensity values. Grayscale images consists of only 1 channel with each pixel having only 1 intensity value ranging from 0 to 255. This makes processing the image faster and easier.</p>
        <p># (Grayscale) 0 in 2nd parameter makes it black and white</p>
        <p>lane_img = cv2.imread(&quot;lane_pic.jpg&quot;, 0)</p>
        <p># Another way to convert to grayscale</p>
        <p>cv2.cvtColor(lane_img,cv2.COLOR_RGB2GRAY)</p>
        <p><img src={q12} alt="grayscale" /></p>
        <p><strong>II. Reduction of noise</strong></p>
        <p>To detect lanes in an image, it is very important to detect the edges on an image (an edge in an image is a sharp change in intensity or color of neighboring pixels).</p>
        <p>(Intensity 0 = Black, 255 = White)</p>
        <p><img src={q8} alt="gradient" /></p>
        <p>Therefore, before we detect edges, any noise in the image is to be reduced to smoothen the image. This is done to prevent false edges being detected. <strong>Gaussian Blur</strong> is applied for this purpose.</p>
        <p>·  Working of Gaussian Blur with 3x3 kernel</p>
        <p>A matrix of <strong>n x n</strong> is taken (n is always odd), so that there is a single middle pixel <strong>(m).</strong> The Gaussian blur takes a kernel of n x n and runs through all whole image, to change the value of the pixel m, as the average of its neighboring pixel values.</p>
        <p><img src={q5} alt="kernel 1" /><img src={q13} alt="kernel 2" /></p>
        <p>Here cv2.GaussianBlur makes use of a 5x5 kernel to average the noise in the image.</p>
        <p>-       cv2.GaussianBlur(image,(kernel value), deviation)</p>
        <p># Applying Gaussian Blur for noise reduction and smoothening</p>
        <p>blur_image = cv2.GaussianBlur(image, (5, 5), 0)</p>
        <p>cv2.imshow(&quot;Blurred Image&quot;, blur_image)</p>
        <p><img src={q14} alt="blurred" /></p>
        <p><code> </code><strong>III. Edge Detection</strong></p>
        <p><strong>Canny Edge Detection</strong> is used for detecting all the edges of an image. The Canny function applies a derivative to a function of <strong>f(x, y)</strong> where x and y are the pixel values in x and y directions. A high change in pixel values is considered as an edge.</p>
        <p><img src={q6} alt="canny" /></p>
        <p>Here cv2.Canny with a threshold ratio of 1:3 to detect the required edges of the grayscale image.</p>
        <p>-       cv2.Canny(image, lower threshold, higher threshold)</p>
        <p># Detecting edges in the image</p>
        <p>canny_image = cv2.Canny(blur_image, 50, 150)</p>
        <p>cv2.imshow(&quot;Canny Image&quot;, canny_image)</p>
        <p><img src={q15} alt="edge" /></p>
        <p><strong>IV. Region of Interest</strong></p>
        <p>To use the edge detected output, a particular region is to be extracted. The region of interest will be different with respect to different camera angles.</p>
        <p>To find the region of interest, the image is plotted using ‘matplotlib’.</p>
        <p><img src={q10} alt="plot" /></p>
        <p>The triangle depicts the region of interest. This region is first masked on a black image as shown below. This is done to trace only the required region on the edge detected image.</p>
        <p># Creating the region of interest with reference to plotted image</p>
        <p>polygons = np.array([[(150, height), (920, height), (500, 300)]])</p>
        <p># Creating a black image</p>
        <p>mask = np.zeros_like(image)</p>
        <p>cv2.fillPoly(mask, polygons, 255)</p>
        <p><img src={q16} alt="region" /></p>
        <p>A ‘bitwise_and’ operation is applied on the edge detected image and the masked region image. This leads to an image with edges only of the region of interest.</p>
        <p>(A black masked image has value 0 in the unrequired region. A bitwise AND operation always gives 0 if one input is 0, therefore eliminating the edges of the unrequired region)</p>
        <p>masked_img = cv2.bitwise_and(image, mask)</p>
        <p>cv2.imshow(&quot;Masked Image&quot;, masked_img)</p>
        <p><img src={q17} alt="region of interest" /></p>
        <p><code> </code><strong>V. Detecting Straight Lines</strong></p>
        <p>Hough transform plays a major role in detecting the straight lines of the lanes. The basic goal is to detect whether a cluster of pixels (of the edges) are part of a line or not.</p>
        <p>Working of Hough Transform is explained below:-</p>
        <p>After extracting the required edges, you want to know its slope, its intercept, etc. But right now the &quot;edge&quot; is just a sequence of pixels.</p>
        <p>If somehow one can loop through all pixels, and figure out the slope and intercept. But that is one difficult task. Images are never perfect. So you want some mechanism that give more weightage to pixels that are already in a line. This is exactly what the Hough Transform does.</p>
        <p>·      From lines to points</p>
        <p>A lines is a collection of points. And managing a collection of points is tougher than managing a single point. Obviously. So the first thing we learn is how to represent a line as a single point, without losing any information about it. This is done through the <strong>m-c space</strong> <strong>also called the Hough Space.</strong></p>
        <p><img src={q2} alt="hough 1" /></p>
        <p>As shown in the above picture, every line has two quantities associated with it, the slope and the intercept. With these two numbers, you can describe a line completely.</p>
        <p>·      From points to lines</p>
        <p>We know that infinite lines pass through a point. So, for every line passing through (xa, ya), there would be a point in the mc space.</p>
        <p>So, a point in the xy space is equivalent to a line in the mc space.</p>
        <p><img src={q19} alt="hough 2" /></p>
        <p>The Hough transform is all about doing what we just learned: converting points in the xy space to lines in the mc space.</p>
        <p>You take an edge detected image, and for every point that is non-black, you draw lines in the mc place. Obviously, some lines will intersect. These intersections mark are the parameters of the line.</p>
        <p>The following picture will clarify the idea:</p>
        <p><img src={q18} alt="1" /></p>
        <p>Instead of the slope-intercept form of lines, we use the normal form to resolve the issue that the value of m (slope) tends to infinity for vertical lines.</p>
        <p><img src={q3} alt="hough 4" /></p>
        <p>·      Angle and Distance parameters</p>
        <p>In this representation, a line is formed using two parameters - an angle θ and a distance p. p is the length of the normal from the origin (0, 0) onto the line. and θ is the angle this normal makes with the x axis. This is represented my sinusoidal waves in the Hough Space.</p>
        <p><img src={q20} alt="p and radian" /></p>
        <p>Next, to detect lane lines, loop through every pixel of the edge detected image. If a pixel is zero, it is ignored. It&#39;s not an edge, so it can&#39;t be a line. So move on to the next pixel. If a pixel is non-zero, you generate its sinusoidal curve (in the Hough space). So for every non-zero pixel, you&#39;ll get a sinusoidal curve in the Hough space. And you&#39;ll end up with an image similar to the one at the top.</p>
        <p>The Hough Space is then made into a 2D grid as shown above (known as the accumulator). Each bin will have a vote, every point of intersection increases the vote of that bin by 1. The bin with maximum votes is the line that best represents the points for which the Hough space is plotted. This is because a line plotted with these values will pass through maximum pixels of the edge in the image.</p>
        <p>Here cv2.HoughLinesP is used where 2nd and 3rd parameter give the bin size. 4th parameter is the minimum intersections in a bin needed to detect a line. 5th parameter is a placeholder, 6th, indicates that a line should comprise of a minimum of 40 pixels and the last parameter will allow connecting two lines with a gap of less than or equal to 5 pixels.</p>
        <p>- cv2.HoughLinesP( image, distance resolution(pixels), angle resolution(radians), threshold, min. line length, max. line gap )</p>
        <p># Applying Hough Transform</p>
        <p>lines1 = cv2.HoughLinesP(cropped_img,2,np.pi/180, 100, np.array([]), minLineLength=40,maxLineGap=5)</p>
        <p><strong>VI.</strong> <strong>Displaying the detected Lines</strong></p>
        <p>The Hough Transform outputs a 2D array which is converted in to 1D array so that cv2.lines() can be used to print the detected lines on a black image.</p>
        <p>Here cv2.line helps plot the values of the 1D array.</p>
        <p>- cv2.line( image, coordinates X, coordinates Y, colour RGB, thickness )</p>
        <p>if lines is not None:</p>
        <p>for line in lines:</p>
        <p># Reshaping 2D array lines to 1D</p>
        <p>x1, y1, x2, y2 = line.reshape(4)</p>
        <p># Printing each coordinate on a black image with blue color &amp; thickness 10</p>
        <p>cv2.line(lines_img, (x1, y1), (x2, y2), (255, 0, 0), 10)</p>
        <p><img src={q21} alt="lane" /></p>
        <p><strong>VII.</strong> <strong>Averaging the Lines</strong></p>
        <p>As the output shows, there are multiple lines displayed over each image. To print a single line, first, the slope and intercept values are stored in 2 different arrays namely left_fit[] and right_fit[]. This separation is done with respect to its slope values. All negative slope correspond to the left line whereas all positive slopes correspond to the right line (keep in mind an image represents a 2D array so the y axis values “increase” downwards).</p>
        <p># To determine the slope and intercept for a linear function of 1 degree</p>
        <p>parameters = np.polyfit((x1, x2), (y1, y2), 1)</p>
        <p>slope = parameters[0]</p>
        <p>intercept = parameters[1]</p>
        <p>Variable parameters will store the slope and y-intercept values at indexes 0 and 1 respectively which is obtained using ‘np.polyfit’. These values are then averages and its coordinates to be printed in the original image is determined from the ‘coordinates’ function.</p>
        <p>left_fit_avg = np.average(left_fit, axis=0)</p>
        <p>right_fit_avg = np.average(right_fit, axis=0)</p>
        <p>def coordinates(image, line_para):</p>
        <p>slope, intercept = line_para</p>
        <p>y1 = image.shape[0]</p>
        <p># Length of the line</p>
        <p>y2 = int(y1 \ (4 / 6))</p>
        <p># Obtaining values of x1 and x2 from y= mx + c</p>
        <p>x1 = int((y1 - intercept) / slope)</p>
        <p>x2 = int((y2 - intercept) / slope)</p>
        <p>return np.array([x1, y1, x2, y2])</p>
        <p><img src={q22} alt="lane avg" /></p>
        <p><strong>VIII. Displaying the Final Image</strong></p>
        <p>The final image is formed with the lane detected image above is added to the original image using ‘cv2.addWeighted’</p>
        <p>Here cv2.addWeighted adds two images with gamma a value to be added to the sum.</p>
        <p>- cv2.addWeighted( image A, weight A, image B, weight B, gamma)</p>
        <p>(Here the black image has a different use. When this line is to be imprinted in the original image, the pixel values will be added, therefore having a black image will result in adding 0 to the original image. Resulting in no unwanted alteration in the original image)</p>
        <p>combo_image = cv2.addWeighted(org_img, 0.8, line_img, 1, 1)</p>
        <p><img src={q23} alt="final" /></p>
        <p><strong>IX. Lane Detection in Videos</strong></p>
        <p>Videos are inputted using cv2.VideoCapture(). To read the video, read() function is used. It outputs 2 values. First value is a boolean value and the second value is the frame of the video. While is the video is open, each frame is taken into account and the lane detection algorithm is applied to each frame.</p>
        <p># For lane detection in Videos</p>
        <p>vid = cv2.VideoCapture(&quot;test2.mp4&quot;)</p>
        <p>while (vid.isOpened()):</p>
        <p>bool_value, frame = vid.read()</p>
        <p># rest of the steps are same it is followed for a single image...</p>
        <p><strong>X. Conclusion</strong></p>
        <p>A general flow or steps of the Lane Detection Algorithm using Hough Transform is shown below.</p>
        <p><img src={q7} alt="flow" /></p>
        <p>After completion of this algorithm and successfully obtaining the correct outputs in images and also correct detection of lanes in test videos, I would like to conclude by saying that Hough Transform Lane Detection Algorithm is a straightforward method of correctly detecting straight lines and small turns and curves. It has helped detection of lanes in a sure and fast procedure in current self-driving cars.. For detection of roundabouts and sharp curves in lanes or sharp turns, Spatial Convolutional Neutral Networks or SCNN has given effective outputs.</p>
        <hr/>
        <p><strong>Sample 2:</strong></p>
        <p><img src={q9} alt="s2" /><img src={q11} alt="region s2" /><img src={q24} alt="region b/w s2" /><img src={q25} alt="final s2" /></p>

      </div>
      </Layout>
    </div>
  )
}
