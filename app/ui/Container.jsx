const React = require('react');


module.exports = class Container extends React.Component {
    render() {
        return <div className="window-content">
                    {this.props.children}
            </div>
    }
};