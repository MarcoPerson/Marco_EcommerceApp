// For Add Item to Cart
export const addCart = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

// For Remove Item from Cart

export const delCart = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}