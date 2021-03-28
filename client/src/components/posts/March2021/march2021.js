import React from 'react';
import { Link } from 'react-router-dom';

const Mar2021= () => {
    document.title = "March Posts"
    return (
            <main>
                <div class="jumbotron p-4 p-md-2 text-white rounded bg-dark">
                    <h1>March 2021</h1>
                </div>
                <table class="table">
                    <tbody>
                        <tr>
                        <td>
                            <div>
                                <Link to={"./firebase"}><h4 className="postLabel">Deploying Your Website Live with Firebase</h4>
                                <img src="\assets\images\posts\mar29post.jpg" alt="Firebase" width="300" height="200"></img>
                                <p>March 29, 2021</p></Link>
                            </div>
                            <div>
                                <Link to={"./loops"}><h4 className="postLabel">Creating Your First Loop with JavaScript</h4>
                                <img src="\assets\images\posts\mar19post.jpg" alt="Loops" width="300" height="200"></img>
                                <p>March 19, 2021</p></Link>
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
export default Mar2021;