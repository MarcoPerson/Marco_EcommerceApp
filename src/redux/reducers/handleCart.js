const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            const itemA = state.find((x) => x.id === product.id);
            if(itemA){
                return state.map((x) => (x.id === product.id) ? {...x, qts : x.qts + 1} : x);
            }
            else{
                return [...state, {...product, qts : 1}];
            }
        
        case "DELITEM":
            const itemD = state.find((x) => x.id === product.id);
            if(itemD){
                if(itemD.qts === 1){
                    return state.filter((x) => (x.id !== product.id));
                }
                else{
                    return state.map((x) => (x.id === product.id) ? {...x, qts : x.qts - 1} : x);
                }
            }
            else{
                return state;
            }
    
        default:
            return state
    }
}

export default handleCart;