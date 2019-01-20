import { combineReducers, createStore } from 'redux';
import {reducers} from '../reducers/reducers';

export const store = createStore(
    combineReducers({
        state: reducers
    })
);