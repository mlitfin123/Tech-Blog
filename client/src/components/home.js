import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    document.title = "Fit-to-Tech"

    return (
        <div>
        <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
            <div class="col-md-6 px-0">
                <h1 class="display-4 font-italic">Looping with React JS</h1>
                <p class="lead my-3">In the JSX code of React JS loops can be so different than what you're used to in a lot of programming languages that I thought it deserved its 
                    own post. One of the most often actions I take while creating applications in React JS is to take an array of objects and loop through them 
                    to add them to a web pa</p>
                <p class="lead mb-0"><span class="text-white font-weight-bold"><Link to={"./reactloops"}>Continue reading...</Link></span></p>
            </div>
            </div>    
            <main role="main" className="container">
            <div class="row">
            <div class="col-md-8 blog-main">
                <h3 class="pb-4 mb-4 font-italic border-bottom">
                Earlier this Year
                </h3>
                {/* <div class="blog-post">
                    <Link to={"./firebase"}><h2 class="blog-post-title">Deploying Your Website with Firebase</h2><img src="\assets\images\posts\mar29post.jpg" alt="firebase" width="300" height="200"></img></Link>
                    <p class="blog-post-meta">March 29, 2021 by <Link to={"./about"}>Mark Litfin</Link></p>
                </div> */}
                <div class="blog-post">
                    <Link to={"./reactloops"}><h2 class="blog-post-title">Looping with React JS</h2><img src="\assets\images\posts\may21\florian-olivo-4hbJ-eymZ1o-unsplash.jpg" alt="reactloops" width="300" height="200"></img></Link>
                    <p class="blog-post-meta">May 21, 2021 by <Link to={"./about"}>Mark Litfin</Link></p>
                </div>
                <div class="blog-post">
                    <Link to={"./loops"}><h2 class="blog-post-title">Creating Your First Loop with JavaScript</h2><img src="\assets\images\posts\mar19post.jpg" alt="loops" width="300" height="200"></img></Link>
                    <p class="blog-post-meta">March 19, 2021 by <Link to={"./about"}>Mark Litfin</Link></p>
                </div>
                <div class="blog-post">
                    <Link to={"./react1"}><h2 class="blog-post-title">Building Your First React Web Application</h2><img src="\assets\images\posts\jan27post.jpg" alt="react" width="300" height="200"></img></Link>
                    <p class="blog-post-meta">January 27, 2021 by <Link to={"./about"}>Mark Litfin</Link></p>
                </div>
                <div class="blog-post">
                    <Link to={"./bootcamp"}><h2 class="blog-post-title">Getting Started with Bootcamp</h2><img src="assets/images/posts/jan11post.jpg" alt="bootcamp" width="300" height="200"></img></Link>
                    <p class="blog-post-meta">January 11, 2021 by <Link to={"./about"}>Mark Litfin</Link></p>
                </div>
                <nav class="blog-pagination">
                <span class="btn btn-outline-primary">Older</span>
                <span class="btn btn-outline-secondary disabled" tabindex="-1" aria-disabled="true">Newer</span>
                <br></br>
                <br></br>
                </nav>
            
            </div>
            
            <aside class="col-md-4 blog-sidebar">
                <div class="p-4 mb-3 bg-light rounded">
                <h4 class="font-italic">About</h4>
                <p class="mb-0">This blog was created to document my long journey towards becoming an IT professional and to share the knowledge I have gained along the way.</p>
                </div>
            
                <div class="p-4">
                <h4 class="font-italic">Archives</h4>
                <ol class="list-unstyled mb-0">
                    <li><Link to={"./may2021"}>May 2021</Link></li>
                    <li><Link to={"./mar2021"}>March 2021</Link></li>
                    <li><Link to={"./jan2021"}>January 2021</Link></li>
                </ol>
            </div>
        
            <div class="p-4">
                <h4 class="font-italic">Elsewhere</h4>
                <ol class="list-unstyled">
                    <li><a href="https://litgamers.org/" target="_blank" rel="noreferrer">LitGamers</a></li>
                </ol>
                </div>
            </aside>
        </div>
        </main>
        </div>
    )
}

export default Blog;