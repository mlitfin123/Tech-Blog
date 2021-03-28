import React from 'react';
import { Link } from 'react-router-dom';

const Tem192021= () => {
    
    return (
        <main >
        <div className="jumbotron p-4 p-md-2 text-white rounded bg-dark">
            <h1>Creating Your First Loop with JavaScript</h1>
        </div>
        <div className="row">
                <div className="col">
                </div>
                <div className="col-11">
            <h4 className="authorName"><Link to={"./about"} className="authorName">Mark Litfin</Link></h4>
            <h5 className="blogTitle">March 19, 2021</h5>
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

                </p>
                </div>
                <div className="col">
                </div>
            </div>
        </main>
    )
}
export default Tem192021;