
const React = require('react');

const ReactKonva = require('react-konva');

import {connect} from 'react-redux';
var actions = require("../../actions/AppActions");

import  ReduxKonvaShapeContainer from './ReduxKonvaShapeContainer';

class Screen extends React.Component {

    propTypes :{
        parsedCode : React.PropTypes.object.isRequired,
        onRefreshScreen : React.PropTypes.func.isRequired
    }

   constructor(props) {
    super(props);

        this.state = { height : 0, width: 0 }
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this));
        this.updateDimensions();
    }

    updateDimensions() {
        if(this.refs.screen){
            const height = this.refs.screen.clientHeight;
            const width = this.refs.screen.clientWidth;
            this.setState({width: width, height: height});
            if(this.props.onRefreshScreen){
                //this.props.onRefreshScreen('[["block",["unstyled","9ag35",[["inline",[[],"rect 10 10 > 4 "]]],{}]]]');
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    componentWillMount() {
        this.updateDimensions();
    }

    
getShape(shape) {
        // Correct! JSX type can be a capitalized variable.
        shape.x =  shape.x ? shape.x : 10;
        shape.y =  shape.y ? shape.y : 10;
        shape.key = 'component' + shape.key;

        const ReactShape = ReactKonva[shape.type];
        return <ReactShape         
            ref= {shape.key} 
            key={shape.key}
            x={shape.x} 
            y={shape.y} 
            width={50} height={50}
            draggable="true"
            fill={Konva.Util.getRandomColor()}
            shadowBlur={10}
        />;
    }
    renderComponent(){
        let components = null
        if (this.props.parsedCode && this.props.parsedCode.length > 0) {
           components = [];
            for(var i=0; i < this.props.parsedCode.length; i++){
                var c = this.props.parsedCode[i];
                if(typeof(ReactKonva[c.name]) != 'undefined'){
                   var shape = {key: i, type : c.name, x: c.x, y: c.y};
                   components.push(this.getShape(shape));
                }
            }
        } else {
           
        }
        return components;
    }

    render() {

        return <div className="pane" style={{background:'#d8d0d0'}} ref="screen">

        <ReduxKonvaShapeContainer height={this.state.height - 20} width={this.state.width - 20} style={{margin: '5px'}}/>
         

         <div style={{float:'right', bottom: '0px'}}>
             <b>width: {this.state.width}px; height: {this.state.height}</b>
         </div>
        </div>
    }
};

var mapStateToProps = function(state){   
    return {parsedCode:state.parsedCode};
};

var mapDispatchToProps = function(dispatch){
    return {
        onRefreshScreen: function(screen){ dispatch(actions.onRefreshScreen(screen)); }
    }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Screen);