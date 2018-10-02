//import redux- "old "way
//allows us to create store
const {createStore} = require('redux');

//store has state and reducer
const initialState = {
    age: 21
};

const myReducer = (state = initialState, action) => {
        //this is a copy of the state in a new state
        const newState = {...state};

        //if the action is ADD then add one
        if(action.type === 'ADD'){
            newState.age += 1;
        }

        return newState;
}

const store = createStore(myReducer);

/*const store = createStore(myReducer);
this completes our reducer!!
*/

//we need to change the age so we will create an ACTION (a command)
store.dispatch({type: 'ADD'});
//this line ^ dispatches ONE action called ADD
//dispatch 

console.log(store.getState());
//run node reduxtest.js

