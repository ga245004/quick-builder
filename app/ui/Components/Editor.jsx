import React from 'react';

import {connect} from 'react-redux';

import { Editor as DEditor, EditorState as DEditorState } from 'draft-js';
import exporter from 'draft-js-ast-exporter'
import importer from 'draft-js-ast-importer'

var actions = require("../../actions/AppActions");




 class Editor extends React.Component {

    propTypes :{
        codeState : React.PropTypes.object.isRequired,
        onEditorStateChange : React.PropTypes.func.isRequired
    }

    constructor(props) {
    super(props);
    
    const r = '[["block",["unstyled","9ag35",[["inline",[[],"rect 10 10 > 4 "]]],{}]]]';
    
    const ast = JSON.parse(r);
    let editorState;
    if(ast && ast.length > 0){
       const contentState = importer(ast);
       editorState = DEditorState.createWithContent(contentState);
    }
    else{
        editorState = DEditorState.createEmpty();
    } 

    this.state = {editorState: editorState};
        
    }
   
    onChange(editorState) {
        //console.log('processing code..');
        const ast = exporter(editorState);
        //console.log(JSON.stringify(ast));
        this.setState({editorState});
        if(this.props.onEditorStateChange){
           // this.props.onEditorStateChange(ast);
        }
    }
     
    render() {     
        let editorState;
        var ast = this.props.codeState;
        if(ast && ast.length > 0){
                    const contentState = importer(ast);
                    editorState = DEditorState.createWithContent(contentState);
        }
        else{
                editorState = DEditorState.createEmpty();
        } 

        return <div style={{height:'100%', margin: '5px'}} className="pane">
            <DEditor editorState={editorState} onChange={this.onChange.bind(this)}/>
        </div> 
    }
};

var mapStateToProps = function(state){   
    return {codeState:state.codeState};
};

var mapDispatchToProps = function(dispatch){
    return {
        onEditorStateChange: function(code){ dispatch(actions.onEditorStateChange(code)); }
    }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Editor);