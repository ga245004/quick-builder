const React = require('react');
const Toolbar = require('./Header/Toolbar.jsx');
const ToolbarActions = require('./Header/ToolbarActions.jsx');
const ToolbarButton = require('./Header/ToolbarButton.jsx');
const Container = require('./Container');
const MainPanel = require('./Panels/MainPanel');
const Editor = require('./Components/Editor');
const Screen = require('./Components/Screen');


module.exports = class App extends React.Component {
    render() {

return <div className="window">
       
        <Container>
            <MainPanel>
                <Editor />
                <Screen />
            </MainPanel>
        </Container>
        </div>;
        
        //  <Toolbar title="Quick Api Builder">
        //     <ToolbarActions>
        //         <ToolbarButton type="home"></ToolbarButton>
        //     </ToolbarActions>
        // </Toolbar>
    }
};