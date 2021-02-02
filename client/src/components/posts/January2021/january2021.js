import React from 'react';
import { Link } from 'react-router-dom';

const Jan2021= () => {
    return (
            <main>
                <div class="jumbotron p-4 p-md-2 text-white rounded bg-dark">
                    <h1>January 2021</h1>
                </div>
                <table class="table">
                    <tbody>
                        <tr>
                        <td>
                            <div>
                                <Link to={"./jan272021"}><h4 className="postLabel">Building Your First React Web Application</h4>
                                <img src="\assets\images\posts\jan27post.jpg" alt="React" width="300" height="200"></img>
                                <p>January 27, 2021</p></Link>
                            </div>
                            <div>
                                <Link to={"./jan112021"}><h4 className="postLabel">Getting Started with Bootcamp</h4>
                                <img src="assets/images/posts/jan11post.jpg" alt="Bootcamp" width="300" height="200"></img>
                                <p>January 11, 2021</p></Link>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        </tr>
                    </tbody>
                </table>
            </main>

    )
}
export default Jan2021;