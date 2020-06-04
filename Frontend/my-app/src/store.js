import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './Redux/Authorization/Reducer';
import getImagesReducer from './Redux/GetImages/Reducer';
import uploadImageReducer from './Redux/UploadImage/Reducer'

const rootReducer = combineReducers({authReducer, getImagesReducer, uploadImageReducer})
const store = createStore(rootReducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))

export default store;