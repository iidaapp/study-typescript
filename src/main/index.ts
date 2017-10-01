import {app, BrowserWindow} from 'electron'

class MyApp {
    private window: Electron.BrowserWindow
    private option: {
        width: 800,
        height: 400,
        minWidth: 500,
        minHeight: 200,
        acceptFirstMouse: true,
        titleBarStyle: 'hidden'
    }
    constructor() {
        this.window = new BrowserWindow(this.option)
        this.window.loadURL(`file://${__dirname}/../renderer/top.html`)
    }
}
const myapp = null;
app.on('ready', () => {
    this.myapp = new MyApp();
})
