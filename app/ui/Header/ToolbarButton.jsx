const React = require('react');


module.exports = class ToolbarButton extends React.Component {
    render() {
        return <div className="btn-group">
                            <button className="btn btn-default">
                                <span className={'icon icon-' + this.props.type}></span>
                            </button>
                        </div>
    }
};