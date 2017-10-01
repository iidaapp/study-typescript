"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
class MyApp {
    constructor() {
        this.window = new electron_1.BrowserWindow(this.option);
        this.window.loadURL(`file://${__dirname}/../renderer/top.html`);
    }
}
const myapp = null;
electron_1.app.on('ready', () => {
    this.myapp = new MyApp();
});
//# sourceMappingURL=index.js.map