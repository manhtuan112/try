import {createStore} from 'redux';
import rootReducer from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools());//tạo store
export default store