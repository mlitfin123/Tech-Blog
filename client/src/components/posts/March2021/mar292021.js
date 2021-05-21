import React from 'react';
import { Link } from 'react-router-dom';

const Mar292021= () => {
    
    return (
        <main >
        <div className="jumbotron p-4 p-md-2 text-white rounded bg-dark">
            <h1>Deploying Your Website Live with Firebase and NodeJS</h1>
        </div>
        <div className="row">
                <div className="col">
                </div>
                <div className="col-11">
            <h4 className="authorName"><Link to={"./about"} className="authorName">Mark Litfin</Link></h4>
            <h5 className="blogTitle">March 29, 2021</h5>
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
                    <h2 className="blog-headers">What is Firebase?</h2>
                    In short Firebase is a platform developed and controlled by Google that allows an easy method for building, releasing, maintaining, 
                    and monitoring applcations. If you navigate to their <a href="https://firebase.google.com/products-build" target="_blank" rel="noreferrer">products page </a>
                    on their website you can see all the various things you can accomplish using firebase. In this particular article I'm going to explore the hosting services 
                    they offer.
                    <h2 className="blog-headers">Why do I Like Firebase for my Deployments?</h2>
                    Firebase is very simple to use and has been perfect for my smaller applications and deployments. It's free to use up to a certain amount of traffic 
                    to your website which means it's great for while you're scaling up, and I don't see any reason why it wouldn't work as you continue to grow 
                    beyond this also.
                    <h2 className="blog-headers">Getting Started</h2>
                    <h2 className="blog-headers">Creating the Successful Deployment</h2>
                    <h2 className="blog-headers">Issues I Have Run Into and How I Bypassed Them</h2>
                    <h2 className="blog-headers">Adding your Personal Domain Name</h2>
                </p>
                </div>
                <div className="col">
                </div>
            </div>
        </main>
    )
}
export default Mar292021;