const React = require('react');
const ReduxDevTools = require('redux-devtools');
var LogMonitor  = require('redux-devtools-log-monitor');
var DockMonitor  = require('redux-devtools-dock-monitor');




var DevTool = ReduxDevTools.createDevTools(
  <DockMonitor
    toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-q'
    defaultIsVisible={true}
  >
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
);

module.exports = DevTool;