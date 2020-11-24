import { combineReducers} from 'redux';
import inforeducer from './inforeducer'
const rootReducer = combineReducers({
    inforeducer:inforeducer,
});

export default rootReducer;