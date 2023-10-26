const {app, BrowserWindow} = require('electron');  
const url = require('url');
const path = require('path');   
	
function onReady () {     
	win = new BrowserWindow()    
	win.loadURL(url.format({      
		pathname: path.join(
			__dirname,
			'dist/synopsys-angular-electron/index.html'),       
		protocol: 'file:',      
		slashes: true     
	}))   
} 

app.on('ready', onReady);