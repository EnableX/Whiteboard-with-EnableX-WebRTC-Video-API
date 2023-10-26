# Build 1-to-1 Video Calling with Whiteboard in JavaScript using EnableX Toolkit for Web

JavaScript-Based 1-to-1 Video Calling App with Whiteboard Using EnableX Toolkit for Web 

Explore this JavaScript-based 1-to-1 video calling client application, enriched with a Whiteboard feature, designed to empower developers in implementing video calling capabilities seamlessly into their websites. This web application operates within web browsers (referred to as client endpoints) and leverages the EnableX Web SDK to establish real-time communication sessions via EnableX Video Services. 

The client application efficiently manages the following essential tasks for a smooth RTC (Real-Time Communication) session: 
Token Acquisition: Obtain the necessary token from the application server. 
Room Connection: Establish a connection to the designated room using the acquired token. 
Audio/Video Stream Management: Publish and subscribe to audio/video streams within the room. 
Session Event Handling: Listen to and respond to various session-related events. 

Furthermore, this sample client application showcases a host of valuable features, including: 
Mute/Unmute Video and Audio: Control your video and audio input. 
Session Recording: Capture and store session content. 
Chat: Facilitate text-based communication.     
Whiteboard: Collaborate visually in real time. 
Screen Sharing: Share your screen for enhanced communication. 
Disconnect: Conveniently end the session. 

Empower your web applications with these capabilities, all seamlessly integrated through the EnableX Toolkit for Web. Elevate your web-based communication experiences with ease. 

## 1 Get Started

### 1.1 Pre-Requisites

#### 1.1.1 App Id and App Key

* Create a free account on EnableX  [https://portal.enablex.io/cpaas/trial-sign-up/] 
* Create your Project
* Get the App ID and App Key generated against the Project


#### 1.1.2 Requirement

* Check your browser compatibility with EnableX [https://developer.enablex.io/video/browser-compatibility-of-enablex-video/]
* Download latest copy of Web SDK (EnxRtc.js) [https://developer.enablex.io/wp-content/uploads/EnxRtc.js.v1.9.3.zip?ver=1.9.3] and replace client/js/EnxRtc.js 
* Install all project modules. Run `npm install` 
* Install the project package dependencies. Run `yarn install` 


#### 1.1.3 SSL Certificate 

Use a valid SSL Certificate for your Domain and use it to configure your Web Service to make your domain accessible on HTTPS. 


#### 1.1.4 Sample Application Server

While this GitHub repository provides sample client code, you require an application server to provision video room on EnableX server. Use any of the Repository listed below to setup your application server: 

* Laravel [https://github.com/EnableX/WebRTC-Open-Source-One-To-One-Video-Chat-Application-in-Laravel]
* PHP     [https://github.com/EnableX/One-to-One-Video-Calling-Open-Source-PHP-Application]
* Nodejs  [https://github.com/EnableX/One-to-One-Video-Chat-Sample-Web-Application]
* Python  [https://github.com/EnableX/WebRTC-Python-Open-Source-Application-for-1-to-1-video-chat]
* C#  [https://github.com/EnableX/One-to-One-Video-Calling-C-Sharp-Application]
  
Clone or download repository of your choice and configure the server as per the instructions given in the respective README document.  

To directly try the sample code without having to configure an application server, you can also use the EnableX test server as explained in section 2. However, it is recommended to configure your own application server to build a video calling web app. 


### 1.2 Test 

* Open the web browser and go to https://your-domain-name/path/client/ to load the application.  
* If you don't have a Room ID, then create by clicking on the “Create Room” button. The Room ID will get prefilled in the form. 
* Save the Room ID and share it with others along with the URL to join the Same Room.  
* Enter your Name and choose your role, either as a Moderator or a Participant 
* Allow access to the microphone when prompted. 
* You are now in a video call with others, who have joined the same room. 

Note: This sample application creates a virtual room with limited Participants and 1 Moderator for demonstration purposes.



## 2 Testing Environment

As mentioned in section 1.1.4 above, you have an option to run your client application on **EnableX pre-configured environment** [https://try.enablex.io/] instead of setting up your own application server.  

This allows you to quickly test the performance of EnableX audio calls before getting into the development of your application.  

As the EnableX test server has been configured for demonstration purpose only, it only allows to: 

* Conduct a single session with a duration lesser than 10 minutes. 
* Host a multiparty call with less than 3 participants. 

Refer to the **Demo App Server** [https://www.enablex.io/developer/video/sample-code/#demo-app-server] for more information.   

Once you have successfully tested your application on the test server, you can set up your application server as explained in section 1.1.4 above. 


## 3 Adding a Whiteboard 

EnableX Whiteboard is an Independent Library developed using Open Source Fabric.js that allows you to deploy a Whiteboard with streaming and collaboration among participants of a session. 

To integrate Whiteboard, you need to **download the EnableX Whiteboard library** [https://www.enablex.io/developer/solutions/enablex-whiteboard/] and then you can use the APIs required to create a Whiteboard, implement Whiteboard streaming and collaboration.  

Refer to **EnableX Whiteboard Documentation** for implementation details [https://www.enablex.io/developer/solutions/enablex-whiteboard/].


## 4 Learn more about Client API

The client APIs are called from the EnableX Web SDK (EnxRtc.js) which runs on the client browser. The client APIs are used to communicate with the EnableX video services and monitor the client-side state of the RTC session.  

The client APIs are typically used to: 

* Connect to the desired room using the token received from the application server 
* Manage local audio and video 
* Handle room and stream related events initiated by the user 

The client APIs handle four major entities: 

* **EnableX Room:** It handles room/session related events like connection, local stream publication, and remote stream subscription. 
* **EnableX Stream:** It identifies audio/video/data stream published by the user. 
* **Events:** It represents the events related to the room and the stream. 
* **Player:** It represents the customizable UI element used to render the audio/video stream in the DOM. 

In addition to the features demonstrated in this sample program, the SDK has many helpful APIs available for the developers to utilize like: 

* File sharing 
* Streaming 
* Annotation 
* Canvas 

And many more such exciting features. 

Read **Web Toolkit Documentation** [https://www.enablex.io/developer/video-api/client-api/web-toolkit/]  for more details.  

**Download Web Toolkit** [https://www.enablex.io/developer/video/downloads/] to get the latest version of Web SDK. 



## 5 Support

EnableX provides a library of Documentations, How-to Guides, and Sample Codes to help software developers, interested in embedding RTC in their applications. 

Refer to the **Complete Developer’s Guide** [https://developer.enablex.io/] for more details. 

You may also write to us for additional support at support@enablex.io. 
