import { combineReducers } from 'redux';
import system from './system';
import setup from './setup';

export default combineReducers({
    system,
    setup
})