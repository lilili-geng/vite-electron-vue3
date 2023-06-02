// Modules to control application life and create native browser window
import { app, BrowserWindow, Menu, globalShortcut } from "electron";
const path = require("path");
import { join } from "path";
console.log(path);
//这里的配置手动写的，也可以使用cross-env插件配置
const mode = process.env.NODE_ENV;
console.log("electron打印当前环境=>", mode);
/*隐藏electron创听的菜单栏*/
Menu.setApplicationMenu(null);

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true /*是否展示顶部导航  去掉关闭按钮  最大化最小化按钮*/,
    webPreferences: {
      // preload: join(__dirname, "./preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // and load the index.html of the app.
  // mainWindow.loadFile('index.html')  修改成如下
  // http://localhost:5173对应的是你要启动的vite项目的地址
  mainWindow.loadURL(
    mode === "development"
      ? "http://localhost:5173"
      : `file://${path.join(__dirname, "../dist/index.html")}`
  );

  // Open the DevTools.
  if (mode === "development") {
    mainWindow.webContents.openDevTools();
  }
  // 设置打开控制台的快捷键
  // electron新增全局快捷键操作 （alt + commend/control + i)
  globalShortcut.register("Alt+CommandOrControl+I", () => {
    mainWindow.webContents.openDevTools();
    console.log("打开控制台 open devTools");
  });
  mainWindow.on('close', (event) => {
    console.log(`窗口即将销毁`);
  });
  mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
