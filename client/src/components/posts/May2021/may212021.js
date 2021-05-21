import React from 'react';
import { Link } from 'react-router-dom';

const May212021= () => {
    document.title = "Functions with React JS"
    return (
        <main >
        <div className="jumbotron p-4 p-md-2 text-white rounded bg-dark">
            <h1>Looping with React JS</h1>
        </div>
        <div className="row">
                <div className="col">
                </div>
                <div className="col-11">
            <h4 className="authorName"><Link to={"./about"} className="authorName">Mark Litfin</Link></h4>
            <h5 className="blogTitle">May 21, 2021</h5>
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
                    <h4>React JS Continued</h4>
                    It's been a little while since my post on how to get your react application up and running, if you haven't read it I encourage you to check 
                    out <Link to={"./react1"}>Building Your First React Web Application</Link>, if you already know how to start your react application then 
                    disregard that post. This post continues from where that one left off in our "Practice" application.
                    <br></br>
                    <br></br>
                    <h4>Getting Functional</h4>
                    In the JSX code of React JS loops can be so different than what you're used to in a lot of programming languages that I thought it deserved its 
                    own post. One of the most often actions I take while creating applications in React JS is to take an array of objects and loop through them 
                    to add them to a web page as HTML. So we're going to begin by creating a simple array at the top of our Page 2 as shown.
                    <br></br>
                    <br></br>
                    <img src="\assets\images\posts\may21\React_Functions1.PNG" alt="functions" width="500"></img>
                    <br></br>
                    <br></br>
                    We just created a list of available vehicles and added it to an array, next we're going to loop through this array and add it to our webpage in HTML format. 
                    To do this we will be using the "map" command. Since this will be a list enter &lt;ol&gt;&lt;/ol&gt; to begin the lis and then enter some brackets in which 
                    you will be adding your code in between. These brackets are what is needed when creating any functions in JSX code. Enter vehiclesInStock.map&#40;&#40;vehiclesInStock&#41; &#61;&#62; &#40;
                    &lt;li&gt;&lt;/li&gt; key=&#123;vehiclesInStock&#125; className="vehicles"&gt;&#123;vehiclesInStock&#125;&lt;li&gt;&lt;/li&gt;&#41;&#41; in between the brackets as 
                    shown below. Go ahead and change the title to "Current Vehicles Available in Stock!!" while your at it to make this more relevant.
                    <br></br>
                    <br></br>
                    <img src="\assets\images\posts\may21\React_Functions2.PNG" alt="functions"></img>
                    <br></br>
                    <br></br>
                    If you did this right you can now launch your application locally using NPM start in the console. Your webpage should look similar to how it is 
                    shown below.
                    <br></br>
                    <br></br>
                    <img src="\assets\images\posts\may21\React_Functions3.PNG" alt="functions"></img>
                    <br></br>
                    <br></br>
                    Now what if rather than having individual elements in your array you had an entire object. A lot of times you'll have various descriptions or 
                    identifiers for each element so we're going to go back to our array and turn each one into an object as shown.
                    <br></br>
                    <br></br>
                    <img src="\assets\images\posts\may21\React_Functions4.PNG" alt="functions"></img>
                    <br></br>
                    <br></br>
                    Now we can use the same loop to create our list with the description of what type of vehicle it is as shown below.
                    <br></br>
                    <br></br>
                    <img src="\assets\images\posts\may21\React_Functions5.PNG" alt="functions"></img>
                    <br></br>
                    <br></br>
                    It's that simple to take an array and add the information to your webpage without needing to individually type everything out. If done right 
                    your webpage should look like this.
                    <br></br>
                    <br></br>
                    <img src="\assets\images\posts\may21\React_Functions6.PNG" alt="functions"></img>
                    <br></br>
                    <br></br>
                    Keep up to date with my future posts to find out more of what you can do with react. There are so many additional tools react offers which will open up many new 
                    opportunities in your web development journey.
                </p>
                </div>
                <div className="col">
                </div>
            </div>
        </main>
    )
}
export default May212021;