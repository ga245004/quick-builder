const React = require('react');


module.exports = class MainPanel extends React.Component {
    render() {
        return <div className="pane-group">
                    
                    {this.props.children}
            </div>
    }
};