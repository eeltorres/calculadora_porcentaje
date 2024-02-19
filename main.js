const {app, BrowserWindow} = require('electron');
const Mousetrap = require('mousetrap');


function createWindow(){
    const ventana = new BrowserWindow({
        width: 300,
        height: 450
    });
    ventana.loadFile('index.html')
}



app.whenReady().then(createWindow)