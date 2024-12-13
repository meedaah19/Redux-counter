import { createStore } from 'redux';

const redux = require('redux');

const counterReducer = ((state = {counter: 0}, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === 'decrement') {
        return {
            counter : state.counter -1
        }
    }
    return state;
});

const store = redux.createStore(counterReducer);

const counterSubcriber = (()=>{})

const latestState = store.getState();

store.subscribe(counterSubcriber);

export default store;