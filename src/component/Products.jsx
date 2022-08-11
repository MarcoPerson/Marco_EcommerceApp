import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

function Products(props) {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }

            return () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                componentMounted = false;
            }

        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {

        return (
            <>
                <div className="buttons d-flex justify-content-center pb-5 mb-5">
                    <div className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>Marco's All</div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Marco's Men</div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Marco's Women</div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Marco's Jewelries</div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Marco's Electronics</div>
                </div>

                {filter.map((product) => {
                    return (
                        <div key={product.id} className="col-md-3 mb-3">
                            <div className="card h-100 text-center p-4">
                                <img src={product.image} height="250px" className="card-img-top" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                    <p className="card-text fw-bolder lead">${product.price}</p>
                                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>

        )

    }


    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">
                            Latest Products
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center d-flex">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
}

export default Products;