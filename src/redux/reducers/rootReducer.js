
import {combineReducers} from 'redux';

import restaurantReducer from './restaurant';
import menuReducer from './menu';

export default combineReducers({
    restaurant : restaurantReducer,
    menu : menuReducer
});

// const rootReducer = (state = initialState,action) => {
//     switch (action.type) {
//         default : 
//             return state;
//     }
// }

// export default rootReducer;