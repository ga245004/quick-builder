const React = require('react');


module.exports = class ToolbarActions extends React.Component {
    render() {
        return  <div className="toolbar-actions">
                       {this.props.children}
                    </div>
    }
};