const electron = require("electron");
const app = electron.app;

const path = require("path");
const url = require("url");

const BrowserWindow = electron.BrowserWindow;
var mainWindow;
app.on('ready', function(){
	mainWindow = new BrowserWindow({width: 1024, height: 800, backgroundColor:'#cccccc'});
	//mainWindow.loadURL("http://localhost:9995/"); load a url
	mainWindow.loadURL(url.format({ // to open specific file
			pathname: path.join(__dirname, 'index.html'),
			protocol: 'file:',
			slashes: true
		}))
});