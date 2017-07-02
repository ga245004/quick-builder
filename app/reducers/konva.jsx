var Types = require("../constants/ActionTypes"),
    initialState = require("./initialstate");

module.exports = function(state, action){
    var newstate = Object.assign({},state); // sloppily copying the old state here, so we never mutate it
    switch(action.type){
        case Types.REFRESH_KONVA_GRAPH:



            newstate = action.konvaGraphState;



            return newstate;
        default: return state || initialState().konvaGraphState;
    }
};