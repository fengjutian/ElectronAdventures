let { app, BrowserWindow } = require("electron")

function createWindow() {
  let win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      // preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      preload: `${__dirname}/preload.js`,
    },
  })
  win.maximize()
  win.loadFile("index.html")
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
  app.quit()
})