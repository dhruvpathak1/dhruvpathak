import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from '../../styles/template.module.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'
import z1 from '../../images/blogs/object/z1.png'
import z2 from '../../images/blogs/object/z2.jpeg'
import z3 from '../../images/blogs/object/z3.jpeg'
import z4 from '../../images/blogs/object/z4.jpeg'
import z5 from '../../images/blogs/object/z5.png'
import z6 from '../../images/blogs/object/z6.png'
import z7 from '../../images/blogs/object/z7.png'
import z8 from '../../images/blogs/object/z8.jpeg'
import z9 from '../../images/blogs/object/z9.png'
import z10 from '../../images/blogs/object/z10.jpeg'
import z11 from '../../images/blogs/object/z11.png'
import z12 from '../../images/blogs/object/z12.jpeg'
import z13 from '../../images/blogs/object/z13.jpeg'
import z14 from '../../images/blogs/object/z14.jpeg'
import z15 from '../../images/blogs/object/z15.jpeg'

export default function Tesla() {
  return (
    <div>
      <Layout>
        <div className={styles.title}>
          <p>Python (OpenCV)</p>         
        </div>  
        <div className={styles.header}>
          <Link to="/blog"><button className={styles.jobbutton}><AiOutlineArrowLeft /> Back</button></Link><br /><br />
          <h1>Image Processing in Autonomous Cars - PART II</h1>
        </div>
        <div className={styles.matter}>
          <p><strong>Object Detection (YOLO) Algorithm</strong></p>
          <p>YOLO stands for You Only Look Once. It is one of the faster object detection algorithms out there. Though it is not the most accurate object detection algorithm, but it is a very good choice when we need real-time detection, without loss of too much accuracy.</p>
          <p>YOLO not only predict class labels but detects locations of the objects as well. So, it not only classifies the image into a category, but it can also detect multiple Objects within an Image. This Algorithm applies a single Neural Network to the Full Image. It means that this network divides the image into regions and predicts bounding boxes and probabilities for each region. These bounding boxes are weighted by the predicted probabilities.</p>
          <hr />
          <p>Author:<a href="https://www.linkedin.com/in/vrushit-patel/" target="_blank" rel="noreferrer"><strong> Vrushit Patel </strong></a></p>
          <hr />
          <p>Programming Language: Python</p>
          <p>Predefined Implementation: DarkNet</p>
          <p>Libraries: OpenCV, Numpy</p>
          <p><a href="https://github.com/Vrushit7506/Object_Detection_YOLO)">GitHub: [Vrushit7506/Object_Detection_YOLO]</a></p>
          <hr />
          <p><strong>Why YOLO ?</strong></p>
          <p>Earlier detection frameworks looked at different parts of the image multiple times at different scales and repurposed image classification technique to detect objects. This approach is slow and inefficient. YOLO takes entirely different approach. It looks at the entire image only once and goes through the network once and detects all objects. It is very fast.</p>
          <p><img src={z1} alt="Intro" /></p>
          <p><strong>Prerequisites from OpenCV website :</strong></p>
          <p><strong>a. yolov3.weights b. yolov3.cfg c. coco.names</strong></p>
          <p>The &#39;yolov3.weights&#39; has the deep learning code written in DarkNet which has several functions that helps us to use Deep Learning Functions using only OpenCV and Python.</p>
          <p>The &#39;yolov3.cfg&#39; has the configuration file content of the &#39;yolov3.weights&#39; which helps to detect the objects in the frame.</p>
          <p>The &#39;coco.names&#39; stores the list of all the Objects names.</p>
          <p><img src={z2} alt="Intro 2" /></p>
          <p><strong>Step 1</strong></p>
          <p>net = cv2.dnn.readNet(&#39;yolov3.weights&#39;, &#39;yolov3.cfg&#39;)</p>
          <p>This is the function for loading Deep Learning network into system (memory). It automatically detected configuration and framework based on file name specified. It returns an object.</p>
          <p><img src={z3} alt="Step1" /></p>
          <p>classes = []</p>
          <p>with open(&#39;coco.names&#39;, &#39;r&#39;) as name_file:</p>
          <p>. classes = name_file.read().splitlines()</p>
          <p>Now, we make a list of all class names stored in the file. So we open the file and read the file and store every object name in the list.</p>
          <p><strong>Step 2</strong></p>
          <p>while True:</p>
          <p>try:</p>
          <p>game_video = np.array(ImageGrab.grab(bbox=(2, 40, 800, 620)))</p>
          <p>cap = cv2.cvtColor(game_video, cv2.COLOR_BGR2RGB)</p>
          <p>Run the while loop till it is True. Using ‘ImageGrab.grab’; its an OpenCV function to capture the contents of the screen. The ‘bbox’ parameter is to tell the function what content to copy, the default value is entire screen. The frame captured in the game_video is BGR format i.e. BLUE GREEN RED but we usually see the image in OpenCV as RGB format i.e. RED GREEN BLUE.</p>
          <p><img src={z4} alt="step2" /></p>
          <p>img = cap</p>
          <p>height, width, _ = img.shape</p>
          <p>blob = cv2.dnn.blobFromImage(img, 1 / 255, (416, 416), (0, 0, 0), swapRB=True, crop=False)</p>
          <p>Now we store the captured frame in ‘img’ variable and store its height and width in the respective variables.</p>
          <p>‘cv2.dnn.blobFromImage’</p>
          <p>This function is used to return a BLOB – Binary Large OBject, it needs many parameters: 1. The input image 2. By what factor we want to multiply the image 3. The new size of the output image 4. If we want to subtract some colour from the image 5. To swap the R and B components i.e. from RGB to BGR, which takes Boolean values. 6. It also takes the Boolean value if we want the image to be cropped. In our function we first pass the image, then for normalizing the image we multiply the image by 1/255. We resize the image to 416x416, smaller the size better the frame rate. We need not to change any colour contrast; we have to change RGB to BGR because the DarkNet algorithm takes only BGR format. And for cropping we pass ‘False’. This BLOB is used to have detailed feature of every frame it creates a 4-Dimensional blob from image. This is the format in which the deep learning understands the input image.</p>
          <p><img src={z5} alt="Blob0" /><img src={z6} alt="Blob1" /><img src={z7} alt="Blob2" /></p>
          <p><strong>Step 3</strong></p>
          <p>net.setInput(blob) output_layers_names = net.getUnconnectedOutLayersNames()</p>
          <p>layerOutputs = net.forward(output_layers_names)</p>
          <p>Earlier we have set our variable net so in that we have a function to set the input i.e. setInput() so we pass our each blob in it. The 2nd line returns the names of layers which are unconnected layer outputs. Generally in a sequential CNN network there will be only one output layer at the end. In the YOLO v3 architecture we are assuming there are multiple output layers giving out predictions. Last 2 Lines gives the names of the output layers which are unconnected. We get only unconnected layer because an output layer is not connected to any other next layer. ‘net.forward’ passes each layer in the variable ‘layerOutputs’.</p>
          <p><strong>Step 4</strong></p>
          <p># Initialise the lists</p>
          <p>boxes = []</p>
          <p># Create boxes list to extract their bounding boxes</p>
          <p>confidences = []</p>
          <p># confidences list for storing the confidence</p>
          <p>class_ids = []</p>
          <p># class_id list to store the class IDs which represent the predicted classes</p>
          <p>for output in layerOutputs:</p>
          <p>for detection in output:</p>
          <p>scores = detection[5:]</p>
          <p>class_id = np.argmax(scores)</p>
          <p>confidence = scores[class_id]</p>
          <p>‘layerOutputs’ contains all the object detected by YOLO. So first for loop iterate output in layerOutputs and each output is also an list so we iterate detection in output.</p>
          <p><strong>‘detection’ of output</strong></p>
          <p>For each ‘detection’ in each ‘output’ of ‘layerOutputs’ it should contain 4 hunting box offset, one box confidence, and 80 class prediction. Therefore for each detection it is a list of 85 elements First 4 are location of the bounding boxes and 5th is the box confidence, which indicate how accurate is the bounding box. So the last 80 contains the class of predictions the probability of that class.</p>
          <p>The box confidence score (5th position) reflects how likely the box contains an object (objectness) and how accurate is the boundary box.</p>
          <p>scores = detection[5:]</p>
          <p>class_id = np.argmax(scores)</p>
          <p>In the above statement we store all the values from 6th position i.e. 5 (since index starts from 0) till last.</p>
          <p>Then by using the inbuilt function to store index position of the maximum number. This shows us which class object is more confident to be in the bounding box. Then we store the value of confidence in a variable.</p>
          <p><img src={z8} alt="step4" /></p>
          <p>if confidence &gt; 0.5:</p>
          <p>center_x = int(detection[0] \ width)</p>
          <p>center_y = int(detection[1] \ height)</p>
          <p>w = int(detection[2] \ width)</p>
          <p>h = int(detection[3] \ height)</p>
          <p>x = int(center_x - w / 2)</p>
          <p>y = int(center_y - h / 2)</p>
          <p>Now we have to check that highest prediction which is stored in the ‘confidence’ is above 0.5 so we are sure that it is predicted correctly.</p>
          <p>First 4 values of detection are X, Y, W and H.</p>
          <p>‘center_x’ &amp; ‘center_y’ are the centre coordinates of the object, since YOLO detect by the centre of the bounding box. And the size of the bounding is the width and height i.e. W &amp; H. For calculating ‘center_x’, ‘center_y’, w, and h we multiply them by width or height because earlier while making the blob we normalised the image so to make it respective to the original image we multiply.</p>
          <p><img src={z9} alt="step4 3" /></p>
          <p>‘x’ and ‘y’ contains the coordinates of the upper left corner.</p>
          <p>boxes.append([x, y, w, h])</p>
          <p>confidences.append(float(confidence))</p>
          <p>class_ids.append(class_id)</p>
          <p><img src={z10} alt="step4 2" /></p>
          <p>So now we have all the information about the bounding boxes, confidence and predicted class ID. So we add them to the final list.</p>
          <p><strong>Step 5</strong></p>
          <p>indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)</p>
          <p>While detecting the image frame YOLO detects many bounding boxes around the same object and all these boxes and almost same. So we use the above code to remove the redundant boxes.</p>
          <p>In this we will write non maximum suppression i.e. to reduce no. of redundant boxes. Above, NMS means Non Maximum Suppression so we perform non maximum suppression on the given boxes and corresponding scores in the list.</p>
          <p>1st parameter --&gt; a set of bounding boxes to apply NMS.</p>
          <p>2nd parameter --&gt; a set of corresponding confidences.</p>
          <p>3rd parameter --&gt; a threshold used to filter boxes by score usually our 0.5 used in above &#39;if&#39;.</p>
          <p>4th parameter --&gt; a threshold used in non-maximum suppression which has a default value = 0.4. Which is a ratio defined by the area of the current smallest region divided by the area of current bounding box.</p>
          <p>Now only one bounding box is left for one object.</p>
          <p><strong>Step 6</strong></p>
          <p>font = cv2.FONT_HERSHEY_PLAIN</p>
          <p>colors = (0, 0, 255</p>
          <p>Assign the font style and colour of the box to these variables.</p>
          <p>for i in indexes.flatten():</p>
          <p>x, y, w, h = boxes[i]</p>
          <p>label = str(classes[class_ids[i]])</p>
          <p>confidence = str(round(confidences[i] \ 100, 2))</p>
          <p>flatten() is a function which is used to get a copy of an given array collapsed into one dimension. So know we iterate each ‘i’ of the indexes which are the object points given by the YOLO algorithm. So as we stored all are box coordinates earlier in ‘boxes’ list we will just extract them now i.e. x, y are upper left’s coordinates and w &amp; h are the height of the object. ‘label’ stores the object name and the confidence stores the confidence of the particular object.</p>
          <p>cv2.rectangle(img, (x, y), (x + w, y + h), color, 2)</p>
          <p>cv2.putText(img, label + &quot; &quot; + confidence, (x, y + 20), font, 1, colors, 1)</p>
          <p>So finally we know print the text and draw a rectangle. For making a rectangle we pass some parameters in the function:</p>
          <p><img src={z11} alt="step6" /></p>
          <p>• 1st parameter =&gt; Image to put on rectangle.</p>
          <p>• 2nd parameter =&gt; Coordinates of the rectangle.</p>
          <p>• 3rd parameter =&gt; Size of the rectangle.</p>
          <p>• 4th parameter =&gt; Colour of the rectangle.</p>
          <p>• 5th parameter =&gt; Thickness of the rectangle. And for now putting the text in the rectangle</p>
          <p>• 1st parameter =&gt; Image to put on rectangle.</p>
          <p>• 2nd parameter =&gt; what text to put so label + confidence.</p>
          <p>• 3rd parameter =&gt; Coordinates of the text.</p>
          <p>• 4th parameter =&gt; Font of the text.</p>
          <p>• 5th parameter =&gt; Size of the font.</p>
          <p>• 6th parameter =&gt; Colour of the font.</p>
          <p>• 7th parameter =&gt; Thickness of the font.</p>
          <p><img src={z12} alt="step6 2" /></p>
          <p><strong>Step 7</strong></p>
          <p>cv2.imshow(&quot;Test Image&quot;, img)</p>
          <p>key = cv2.waitKey(1)if key == 27:</p>
          <p>break</p>
          <p>Now finally displaying the image and if we press ‘esc’ then it exits the program. Since ASCII value of ‘esc’ is 27 so we put a break statement to exit from the while loop.</p>
          <p><strong>Conclusion</strong></p>
          <p>After completion of Object Detection Algorithm and successfully obtaining the correct outputs in each frame of the video, we tested it in different areas which were not able to give 100% correct outputs. In some test cases we were getting too less FPS. Sometimes it was also not so accurate and misunderstands the object. The faster the FPS we need lesser the accuracy we get. YOLO is used only for OpenCV to give a taste at self-driving and not applying in Deep Learning or Tensor Flow files, since it’s from a DarkNet file.</p>
          <p><strong>Running Lane and Object Detection in GTA V</strong></p>
          <p>After successfully detecting lanes and objects in test case videos and pictures, we decided to try and implement our code combined, on the closest real life simulation game, GTA V.</p>
          <p>After successfully combining our code, we were able to have lanes and objects detected in our test case videos. To implement the same on GTA V, we grabbed frames from the game window as shown below.</p>
          <p>game_video = np.array(ImageGrab.grab(bbox=(2, 40, 800, 620)))</p>
          <p>cap = cv2.cvtColor(game_video, cv2.COLOR_BGR2RGB)</p>
          <p># cap are the frames captured from the screen</p>
          <p>This code lets us capture anything running in the &quot;bbox&quot; dimension, which currently from the above values depicts the top left corner of the screen. Therefore, we ran the game on the top left corner of our desktop (Resolution: 800 x 600). Next, we just had to run our code and driving our bikes through the virtual streets of GTA V.</p>
          <p>The output window is generated. It captures the window of the game and displays a separate output window where lanes and objects are detected as the vehicle in the game drives. This shows a comparison between what the camera fetches to the processor of a self driving car and how after applying multiple algorithms, the processor is able to detect lanes and object to be acted upon with appropriate steps.</p>
          <p><strong>Gaming Window (Camera View)</strong></p>
          <p><img src={z13} alt="camera" /></p>
          <p><strong>Output View</strong></p>
          <p><img src={z14} alt="output" /></p>
          <p><strong>Program Run Through Window</strong></p>
          <p><img src={z15} alt="run through" /></p>
          <hr />
          <p><a href="https://github.com/dhruvpathak1/image_processing_algos_from_self_driving_cars"><strong>Github Link: [GTA V Lane and Object Detection]</strong></a></p>

        </div>
      </Layout>
    </div>
  )
}
