import React from 'react';
import Products from './Products';

function Home(props) {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="/assets/bg.png" className="card-img" alt="BackGround" height="600px" />
                <div className="container">
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <h5 className="card-title display-3 text-whitw fw-bolder mb-0">NEW MARCO PRODUCTS</h5>
                        <p className="card-text fs-2 lead">Check it Out</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    );
}

export default Home;