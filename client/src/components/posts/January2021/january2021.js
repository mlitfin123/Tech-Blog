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
                                <div id="sauce" className="games">
                                <Link to={"./jan112021"}><img src="assets/images/posts/jan11post.jpg" alt="bootcamp" width="300" height="200"></img>
                                    <h4 className="postLabel">Getting Started with Bootcamp</h4><p>January 11, 2021</p></Link>
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