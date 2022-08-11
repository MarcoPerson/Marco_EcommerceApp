import React from 'react';
import { NavLink } from 'react-router-dom';


function Cancel(props) {

    const OrderCanceled = () => {
        return (
            <>
                <div className="col-12 d-flex flex-column justify-content-center align-item-center">
                    <span className="display-5 text-center text-warning my-4"> Your order have been canceled</span>
                    <NavLink to={"/products"} className="btn btn-outline-dark ms-3">Continue purchasing here <i class="fa fa-sign-in"></i> </NavLink>
                </div>
            </>

        )
    }

    return (
        <div className="container py-4 my-4">
            <div className="hero">
                 <OrderCanceled />
            </div>

        </div>
    );
}

export default Cancel;