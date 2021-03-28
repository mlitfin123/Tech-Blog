import React from 'react';
import { Link } from 'react-router-dom';

const Mar312021= () => {
    
    return (
        <main >
        <div className="jumbotron p-4 p-md-2 text-white rounded bg-dark">
            <h1>Deploying Your Website Live with Heroku</h1>
        </div>
        <div className="row">
                <div className="col">
                </div>
                <div className="col-11">
            <h4 className="authorName"><Link to={"./about"} className="authorName">Mark Litfin</Link></h4>
            <h5 className="blogTitle">March 31, 2021</h5>
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
export default Mar312021;