//https://www.youtube.com/watch?v=NyVnNsimfsY&list=PLEE74DyIkwEksyUvM69PP9sOvYWOFLp3Z&index=2

const {app,BrowserWindow} = require('electron')
const url=require('url')
const path=require('path')

let win
function createWindow() {
    win=new BrowserWindow({with:800,height:600})
    win.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocal:'file',
        slashes:true
    }))
}    
app.on('ready',createWindow)