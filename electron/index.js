const path = require("path");
const { app, BrowserWindow } = require("electron");

// 判断环境变量
const isDev = process.env.IS_DEV == "true" ? true : false;

function createWindow() {
  // 创建窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // 预加载
      nodeIntegration: true,
    },
  });

  // 基于环境变量，判断窗口要载入的内容（即要显示的内容）
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000" // 如果是开发环境，则载入vite服务
      : `file://${path.join(__dirname, "../dist/index.html")}` // 如果是正式环境，则载入vite生成的index.html
  );
  // 如果是开发环境，则自动打开Chrome debugger工具
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  console.log(isDev);
  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
