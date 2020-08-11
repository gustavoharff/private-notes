import { app, nativeImage, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

let mainWindow: Electron.BrowserWindow | null;

function createWindow(): void {
  const icon = nativeImage.createFromPath(
    `${app.getAppPath()}/src/assets/icon.png`,
  );

  if (app.dock) {
    app.dock.setIcon(icon);
  }

  mainWindow = new BrowserWindow({
    icon,
    width: 1100,
    height: 700,
    backgroundColor: '#191622',
    webPreferences: {
      nodeIntegration: true,
    },
    resizable: false,
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000');
  } else {
    mainWindow.loadURL('https://my-note-app.netlify.app/#/');
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.allowRendererProcessReuse = true;
