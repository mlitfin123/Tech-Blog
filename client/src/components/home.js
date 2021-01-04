import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import post from '../data/posts.json';

const Blog = () => {
    
    const [postState, setPostState] = useState([]);

    useEffect(() => {
    setPostState(post[0].title);
    }, []);


    return (
        <div>
        <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
            <div class="col-md-6 px-0">
                <h1 class="display-4 font-italic">Getting Started with Bootcamp</h1>
                <p class="lead my-3">####</p>
                <p class="lead mb-0"><span class="text-white font-weight-bold"><Link to={"./nov112020"}>Continue reading...</Link></span></p>
            </div>
            </div>    
            <main role="main" class="container">
            <div class="row">
            <div class="col-md-8 blog-main">
                <h3 class="pb-4 mb-4 font-italic border-bottom">
                Earlier this Month
                </h3>
            
                <div class="blog-post">
                <h2 class="blog-post-title"><Link to={"./nov112020"}>Getting Started with Bootcamp</Link></h2>
                <p class="blog-post-meta">November 20, 2020 by <Link to={"./about"}>Mark</Link></p>
                </div>
                <p>
        </p>
                <nav class="blog-pagination">
                <span class="btn btn-outline-primary">Older</span>
                <span class="btn btn-outline-secondary disabled" tabindex="-1" aria-disabled="true">Newer</span>
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
                    <li><Link to={"./nov2020"}>November 2020</Link></li>
                </ol>
            </div>
        
            <div class="p-4">
                <h4 class="font-italic">Elsewhere</h4>
                <ol class="list-unstyled">
                    <li><a href="https://github.com/mlitfin123" target="_blank">GitHub</a></li>
                    <li><a href="https://www.instagram.com/marklifting/" target="_blank">Instagram</a></li>
                    <li><a href="https://www.facebook.com/mark.litfin5" target="_blank">Facebook</a></li>
                    <li><a href="https://www.linkedin.com/in/mark-litfin-b132bb67/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://marksfolio.herokuapp.com/" target="_blank">Portfolio</a></li>
                </ol>
                </div>
            </aside>
        </div>
        </main>
        </div>
    )
}

export default Blog;