import React from 'react';
import { NavLink } from 'react-router-dom';


function Success(props) {

    const OrderSuccessful = () => {
        return (
            <>
                <div className="col-12 d-flex flex-column justify-content-center align-item-center">
                    <span className="display-5 text-center text-success my-4"> Payment Accepted</span>
                    <NavLink to={"/products"} className="btn btn-outline-dark ms-3">Continue purchasing here <i class="fa fa-sign-in"></i> </NavLink>
                </div>
            </>

        )
    }

    return (
        <div className="container py-4 my-4">
            <div className="hero">
                 <OrderSuccessful />
            </div>

        </div>
    );
}

export default Success;