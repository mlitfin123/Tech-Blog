import React from 'react';
import { Link } from 'react-router-dom';

const Jan272021 = () => {
    document.title = "Building Your First React Web Application"
    return (
        <main >
        <div className="jumbotron p-4 p-md-2 text-white rounded bg-dark">
            <h1>Building Your First React Web Application</h1>
        </div>
        <div className="row">
                <div className="col">
                </div>
                <div className="col-11">
            <h4 className="authorName"><Link to={"./about"} className="authorName">Mark Litfin</Link></h4>
            <h5 className="blogTitle">January 27, 2021</h5>
        </div>
                <div className="col">
                </div>
            </div>
        <hr/>
            <div className="row">
                <div className="col">
                </div>
                <div className="col-11">
                <p className="blogBody">
                    <h4>Introduction</h4>
                    When I first started using React.Js I had no idea what it was, it was confusing to me but I knew if I typed certain code 
                    and performed certain actions I could easily get a server running locally and a web page displayed on my computer. 
                    It worked with so much more ease than I was used to in coding that it turned into my go-to method of creating webpages and web applications. 
                    So what is React.Js? According to the React.Js website it is nothing more than a JavaScript library for building user interfaces. This essentially 
                    means you can use React to make performing and compiling normal JavaScript, HTML, and CSS simpler and since your web page is compiled using scripts rather 
                    than static HTML navigation should be quicker for the end-user.<br></br><br></br>
                    <h4>Getting started with Node.Js and React</h4>
                    We're going to be creating our first React application using Node.Js. I'm not going to go into much detail on Node but if you don't know what it is 
                    it's website states that Node.Js is an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside the web browser. 
                    We will want to start by downloading Node from <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">https://nodejs.org/</a> and following the directions to get it up and running. 
                    Pull up your favorite code editor, I use Visual Studio, but it shouldn't make any difference, and enter npx create-react-app practice-app into the terminal. You can rename "practice-app" 
                    with whatever you want to name your application. It will take a few minutes while all the libraries are downloading and the application is being created, but once finished you can 
                    go to the react folder that was created in the terminal and type npm start. After pressing Enter this will trigger the "react-scripts start" command and your React web application will pop-up 
                    and display in your favorite browser on the localhost. If there are any errors then verify you have the most recent version of node installed. You will notice there were multiple folders and files automatically created, we will get into these next.
                    <br></br>
                    <br></br>
                    <img src="\assets\images\posts\jan27\React_Web_Browser.PNG" alt="screenshot" width="900"></img>
                    <br></br>
                    <br></br>
                    <h4>Public Folder and Index.html</h4>
                    React is interesting as in it will create a single index.html file inside of the public folder which is then used to compile all the code that is added to the application. You can treat this file as your normal HTML file 
                    if you choose to. This is where you can add the title and various CDN's you might need to run your code such as bootstrap or JQuery. You can even add normal HTML or javascript here, however you will need 
                    to be aware that this will show up on each page of your application. The best practice is to not touch the body of this file. The rest of the Public folder can contain anything additional you want to be public 
                    such as images, gifs, pdf files, sitemaps, etc.
                    <br></br>
                    <br></br>
                    <h4>App.js and Index.js</h4>
                    Outside of the public folder in the src folder you see the App.js and index.js files. If you open them up and view them you can see how they are connected and work together. The index.js renders what we add into the 
                    App.js to the webpage. I know it's a little confusing if you're first starting out, it took me a while to realize how everything worked together in react. We're not going to touch the index.js for this application, 
                    instead we're going to go into the App.js and enter some code. Start off by entering the terminal and typing npm i react-router-dom to install the react router package. Next in App.js at the top of the window enter what is shown in the screenshot below 
                    and replace everything after return with the router JSX code as shown. We'll get back to the purpose of adding this code in a few.
                    <br></br><br></br>
                    <img src="\assets\images\posts\jan27\App.js_start.PNG" alt="screenshot"></img>
                    <br></br><br></br>
                    <h4>Components</h4>
                    To add new features and pages the best practice for your react application will be to add a "components" folder in the "src" folder. It will be in this location that you can add anything from a header, footer, graph, navigation bar, home page, etc. as it's own 
                    component.
                    <br></br><br></br>
                    <img src="\assets\images\posts\jan27\components_add.PNG" alt="screenshot"></img>
                    <br></br><br></br>
                    In the components folder you just created create a javascript file and call it Home.js. I've found it is best to name each component with a capital letter to avoid possible conflict later on. Next add the following code as shown in the screenshot below:
                    <br></br>
                    <br></br>
                    <img src="\assets\images\posts\jan27\home.PNG" alt="screenshot" width="1000"></img>
                    <br></br>
                    <br></br>
                    Let's try adding a second page to navigate to. Create a new javascript file in the components folder and call it Page2.js. Open up this file and add the following code shown in the screenshot below: 
                    <br></br>
                    <br></br>
                    <img src="\assets\images\posts\jan27\Page2.PNG" alt="screenshot" width="1000"></img>
                    <br></br>
                    <br></br>
                    To access each component verify you don't forget to export it. In this case we are adding export default Page2 at the bottom of the file.
                    <br></br>
                    <br></br>
                    <h4>Routing</h4>
                    To navigate from page to page you must have routing set up. This will allow you to create a multiple page application and add links from one page to another. Your next step will be to navigate back to the App.js file. 
                    In between the Router start and end points add the following code:
                    <br></br>
                    <br></br>
                    <img src="\assets\images\posts\jan27\App_Routing.PNG" alt="screenshot" width="1000"></img>
                    <br></br>
                    <br></br>
                    After you add this code you can go to your localhost in the web browser and view your pages! Just navigate to http://localhost:3000/ to view your home page and http://localhost:3000/page2 to view your second page.
                    <br></br>
                    <br></br>
                    <h4>Links</h4>
                    My favorite method to easily navigate from page to page is by adding a link to each page. If you hadn't already noticed we already imported the Link from react-router-dom in each component. So what we're going to do is 
                    navigate back to your Home.js file and add the following code shown in the screenshot:
                    <br></br>
                    <br></br>
                    <img src="\assets\images\posts\jan27\HomeLink.PNG" alt="screenshot"></img>
                    <br></br>
                    <br></br>
                    Perform the same action in the Page2.js file.
                    <br></br>
                    <br></br>
                    <img src="\assets\images\posts\jan27\Page2Link.PNG" alt="screenshot"></img>
                    <br></br>
                    <br></br>
                    In your web browser navigate to http://localhost:3000/ if you don't already have it pulled up. You can now see a link to your second page and you can navigate back and forth between both pages without entering the URL.
                    <br></br>
                    <br></br>
                    <img src="\assets\images\posts\jan27\web_link.PNG" alt="screenshot" width="800"></img>
                    <br></br>
                    <br></br>
                    Congratulations!! You now have a simple two page web react application! Keep up to date with my future posts to find out more of what you can do with react. There are so many additional tools react offers which will open up many new 
                    opportunities in your web development journey.
                </p>
                </div>
                <div className="col">
                </div>
            </div>
        </main>
    )
}
export default Jan272021;