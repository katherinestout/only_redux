//import redux- "old "way
//allows us to create store
const {createStore} = require('redux');

//store has state and reducer
const initialState = {
    age: 21
};

const myReducer = (state = initialState, action) => {

}

const store = createStore(myReducer);

/*const store = createStore(myReducer);
this completes our reducer!!
*/

//we need to change the age so we will create an action


