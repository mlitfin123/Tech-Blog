import React from 'react';

const Products = () => {
    return (
        <main>
            <div className="jumbotron p-4 p-md-2 text-white rounded bg-dark">
                <h1>Products</h1>
            </div>
            <div className="card-columns">
                <div className="card bg-light" width="200px">
                    <h2 className="card-title">LitGamers</h2>
                    <img className="rounded mx-auto d-block" src="assets/images/LitGamers_icon.png" alt="litgamers" width="200" height="200"></img>
                    <div className="card-body">
                        <p className="card-text">A collection of simple but challenging games available to play for free or for pay to compete 
                            against other users for an opportunity to win cash.</p>
                        <a href="https://litgamers.org" target="_blank" rel="noreferrer" className="btn btn-primary">View Website</a>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Products;