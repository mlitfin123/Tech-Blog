import React from 'react';
import { Link } from 'react-router-dom';

const Tem2021= () => {
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
                                <Link to={"./mar192021"}><h4 className="postLabel">Creating Your First Loop with JavaScript</h4>
                                <img src="\assets\images\posts\jan27post.jpg" alt="React" width="300" height="200"></img>
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
export default Tem2021;