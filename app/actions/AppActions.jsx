const ActionTypes = require('../constants/ActionTypes');
const Parser = require('../parsing/LeeParser');

const Actions = {
    onEditorStateChange: function(code){
        // Another async action using the Redux-thunk syntax
        return function(dispatch,getState){
            dispatch({type:ActionTypes.UPDATE_CODE,code:code});   
            setTimeout(function(){                
                dispatch({type:ActionTypes.UPDATE_PARSE_CODE, parsedCode:Parser.codeToScreen(code, getState())});
            },50);         
        };
    },
    onRefreshScreen: function(screen){
            return function(dispatch,getState){
                 
                setTimeout(function(){                
                    dispatch({type:ActionTypes.UPDATE_PARSE_CODE, code:Parser.screenToCode(screen,getState())});
                },50);    
        };
    },

    onRefreshKonvaGraph: function(shape){
        dispatch({type:ActionTypes.REFRESH_KONVA_GRAPH, konvaGraphState:shape});
    }
};

module.exports = Actions;