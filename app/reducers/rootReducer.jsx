import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import {default as thunk} from 'redux-thunk'; // allows us to use asynchronous actions

var editorReducer = require("./editor");
var  initialState = require("./initialstate");
var screenReducer = require("./screen");
var konvaReducer = require("./konva");
 

var rootReducer = combineReducers({
    codeState: editorReducer,
    parsedCode: screenReducer,
    konvaGraphState: konvaReducer
});

module.exports = 

 compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)(rootReducer,initialState());

//applyMiddleware(thunk)(createStore)(rootReducer,initialState());