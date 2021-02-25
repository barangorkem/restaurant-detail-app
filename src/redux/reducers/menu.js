import {GET_MENU_DATA,ADD_PRODUCT_BASKET,DELETE_PRODUCT_BASKET} from '../types/menu';

import menuData from '../../data/menuData.json';

const initialState = {
    menuInfo: [],
    basket : []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MENU_DATA:
            {
                let menuInfo = [...menuData.d.ResultSet]
                return {
                    ...state,
                    menuInfo : menuInfo
                }
            }
        case ADD_PRODUCT_BASKET:
            {
                let newBasket = [...state.basket];

                const isFoundProduct = newBasket.find(x=>x.product.ProductId == action.value.product.ProductId);
                if(isFoundProduct) {
                    isFoundProduct.product = action.value.product;
                    isFoundProduct.pieces = parseInt(action.value.pieces);
                }
                else {
                    newBasket.push({
                        product : action.value.product,
                        pieces : parseInt(action.value.pieces)
                    });
                }
                return {
                    ...state,
                    basket : newBasket
                }
            }
        case DELETE_PRODUCT_BASKET:
            {
                let newBasket = [...state.basket];

                const isFoundProduct = newBasket.find(x=>x.product.ProductId == action.value);
                if(isFoundProduct) {
                    newBasket = newBasket.filter(x=>x.product.ProductId != action.value);
                }
                return {
                    ...state,
                    basket : newBasket
                }
            }
        default:
            return state;
    }
}

export default reducer;
