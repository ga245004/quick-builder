const React = require('react');


module.exports = class Toolbar extends React.Component {
    render() {
        return <header className="toolbar toolbar-header">
                    <h1 className="title">{this.props.title}</h1>
                    {this.props.children}
            </header>
    }
};