import React from 'react';
import { Link } from 'react-router-dom';

const May2021= () => {
    document.title = "May Posts"
    return (
            <main>
                <div class="jumbotron p-4 p-md-2 text-white rounded bg-dark">
                    <h1>May 2021</h1>
                </div>
                <table class="table">
                    <tbody>
                        <tr>
                        <td>
                            <div>
                                <Link to={"./reactloops"}><h4 className="postLabel">Looping with React JS</h4>
                                <img src="\assets\images\posts\may21\florian-olivo-4hbJ-eymZ1o-unsplash.jpg" alt="React" width="300" height="200"></img>
                                <p>May 21, 2021</p></Link>
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
export default May2021;