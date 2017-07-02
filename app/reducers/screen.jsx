var Types = require("../constants/ActionTypes"),
    initialState = require("./initialstate");

module.exports = function(state,action){
    var newstate = Object.assign({},state); // sloppily copying the old state here, so we never mutate it
    switch(action.type){
        case Types.UPDATE_PARSE_CODE:
            newstate = action.parsedCode;
            return newstate;
        default: return state || initialState().parsedCode;
    }
};