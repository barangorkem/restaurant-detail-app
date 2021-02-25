import {GET_RESTAURANT_DATA} from '../types/restaurant';

import restaurantData from '../../data/restoranData.json';

const initialState = {
    restaurantInfo: {}
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESTAURANT_DATA:
            {
                let restaurantInfo = {
                    Oid: restaurantData.d.ResultSet.Oid,
                    DisplayName :  restaurantData.d.ResultSet.DisplayName,
                    DeliveryArea : restaurantData.d.ResultSet.DeliveryAreas[0],
                    Serving : restaurantData.d.ResultSet.Serving,
                    Speed : restaurantData.d.ResultSet.Speed,
                    Flavour : restaurantData.d.ResultSet.Flavour
                }
                return {
                    ...state,
                    restaurantInfo : restaurantInfo
                }
            }
        default:
            return state;
    }
}

export default reducer;
