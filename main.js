// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu, dialog } = require('electron')

//const app = electron.app;

app.setName('Centruy Fin Corp.');

var template = [
  {
    label: 'CUSTOMERS',
    accelerator: 'Command+Q',
    click: function() { 
      dialog.showOpenDialog("Cus");
      //app.quit(); 
    }
  },
  {
    label: 'ADD-CUSTOMER',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'Command+Z',
        selector: 'undo:'
      },
      {
        label: 'Redo',
        accelerator: 'Shift+Command+Z',
        selector: 'redo:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Cut',
        accelerator: 'Command+X',
        selector: 'cut:'
      },
      {
        label: 'Copy',
        accelerator: 'Command+C',
        selector: 'copy:'
      },
      {
        label: 'Paste',
        accelerator: 'Command+V',
        selector: 'paste:'
      },
      {
        label: 'Select All',
        accelerator: 'Command+A',
        selector: 'selectAll:'
      },
    ]
  },
  {
    label: 'DAILY-COLLECTION',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'Command+R',
        click: function() { BrowserWindow.getFocusedWindow().reloadIgnoringCache(); }
      },
      {
        label: 'Toggle DevTools',
        accelerator: 'Alt+Command+I',
        click: function() { BrowserWindow.getFocusedWindow().toggleDevTools(); }
      },
    ]
  },
  {
    label: 'INHAND-DETAILS',
    submenu: [
      {
        label: 'Minimize',
        accelerator: 'Command+M',
        selector: 'performMiniaturize:'
      },
      {
        label: 'Close',
        accelerator: 'Command+W',
        selector: 'performClose:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Bring All to Front',
        selector: 'arrangeInFront:'
      },
    ]
  },
  {
    label: 'GENERAL-REPORT',
    submenu: []
  },
  ,
  {
    label: 'DYNAMIC-REPORT',
    submenu: []
  },
  ,
  {
    label: 'DATA-CHECK-REPORT',
    submenu: []
  },
  ,
  {
    label: 'CREDIT-REPORT',
    submenu: []
  },
  ,
  {
    label: 'BATCH-JOBS',
    submenu: []
  },
  ,
  {
    label: 'OUTSTANDING',
    submenu: []
  },
  ,
  {
    label: 'HEALTH',
    submenu: []
  },
  ,
  {
    label: 'POLITICS',
    submenu: []
  },
];






// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

 
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow();
  menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu); // Must be called within app.on('ready', function(){ ... });
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
