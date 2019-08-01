// THis file is where we create redux store
// where we pass in middleware to redux
// pass in reducer functions ()
// where we export our redux store so that we can pass to Provider component
​
// IMPORTS:
// combineReducers: it takes all reducer functions and puts hte output of those
// applyMiddleware: this is a function that takes in any amt of middleware and allows Redux app to use them
// createStore: establshes redux store that holds app state
// createLogger: it allows you to see in your browser console, the action that was dispatched
// thunkMiddleware: reducer function only accepts objects, cannot accept Promises or any other data type/structure -- so thunkMiddleware will hijack and intercept any action that is dispatched to the redux store and type check if the value is an object (which the thunkMiddleware will permit to go through to the redux store) or if it is a function it will invoke that function and then dispatch that result
// thunkMiddleware part 2: allows us to write action creators, make async calls in thunk action creator and gives us access to dispatch method so we can communicate with/to reducer
​
//TODO: import reducer functions here - TODO:
​
import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
​
// Construct redux store using all imports
// rootReducer: this is sole reducer function you pass to redux store when you create the redux store
// rootReducer part 2: looks like object where keys are names of reducer functions and values are outputs of those reducer functions
// rootReducer part 3: {name of reducerA: value of REducerA, name of reudcerB: valueOfReducerB}
// logger: read description for createlogger above
// store: first arguemnt is your reducers (u can have 1 reducer by not using combinereducers) and second argument passed is middleware that operates in between actions being dispatched and actions arriving at reducer function
// **** with combine reducers, you are allowed to have split up reducer functions that manage a part of state and this function combinereducers will go through each key in the combined reducerobject and invoke each reducer function aka value until all reducer functions are called
// export default store: 1 default export per filed (unless u alias multiple defaults);
​
const rootReducer = combineReducers(/* pass in reducers here later */);
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, logger));
const store = createStore(rootReducer, middleware);
​
// export store by default which will be provded to and injected within entire app component