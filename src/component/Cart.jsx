import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCart, delCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import Products from './Products';

function Cart(props) {
    const state = useSelector((state) => state.handleCart);
    const dispatcher = useDispatch();

    let totalAmount = 0;

    for (let product of state) {
        totalAmount += product.price * product.qts;
    }


    const checkout = async () => {
        const result = await fetch("https://StripePaymentMarcoECommerce.marcoperson.repl.co/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({state : state})
        })
        const url = await result.json()
        window.location = url["url"]
    }

    const NoItem = () => {
        return (
            <>
                <div className="col-12 d-flex flex-column justify-content-center align-item-center">
                    <span className="display-5 text-center my-4"> No Item on the Cart</span>
                    <NavLink to={"/products"} className="btn btn-outline-dark ms-3">Purchase Here <i class="fa fa-sign-in"></i> </NavLink>
                </div>
            </>

        )
    }

    const ShowCarts = () => {
        return (
            state.map((product) => {
                return (
                    <div className="d-flex py-5 px-5 mb-3 shadow flex-wrap">
                        <div className="pe-5" style={{width:300}}>
                            <img src={product.image} alt={product.title} height={200} width={200} />
                        </div>
                        <div className="d-flex col-8 justify-content-center align-item-center flex-column" width="auto">

                            <div className="display-5 py-3">{product.title}</div>
                            <div className="lead fw-bolder pb-3">Quantity ({product.qts}) * Price (${product.price}) = ${product.qts * product.price}</div>
                            <div className="buttons">
                                <button className='btn btn-outline-dark' onClick={() => dispatcher(delCart(product))}><i className="fa fa-minus"></i></button>
                                <button className='btn btn-outline-dark ms-3' onClick={() => dispatcher(addCart(product))}><i className="fa fa-plus"></i></button>
                            </div>

                        </div>
                    </div>
                )
            })

        )
    }

    const TotalAmount = () => {
        return (
            <>
                <div className="text-center text-uppercase fw-bolder fs-1 py-4">Total Amount : ${totalAmount.toFixed(2)}</div>
                <button onClick={checkout} className="btn btn-outline-success py-2 px-4 fs-2">Go to Payment</button>
            </>

        )
    }

    return (
        <div className="container py-4 my-4">
            <div className="hero">
                {(state.length === 0) ? <NoItem /> : <ShowCarts />}
            </div>
            {(state.length === 0) ? "" : <TotalAmount />}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Products />
        </div>
    );
}

export default Cart;