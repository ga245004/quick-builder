const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const DevtoolsInstaller = require('electron-devtools-installer');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });

    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.maximize();
    mainWindow.openDevTools();
    mainWindow.on('closed', function() {
        mainWindow = null;
    });

    DevtoolsInstaller.default(DevtoolsInstaller.REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));

    DevtoolsInstaller.default(DevtoolsInstaller.REDUX_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function() {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});