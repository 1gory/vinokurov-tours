import bodyParser from 'body-parser';
import React from 'react';
import express from 'express';
import compression from 'compression';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'unstated';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import fs from 'fs';
import path from 'path';
import './ignore-styles';
import App from '../src/App';

const app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, '..', 'build')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html');
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      // logger.error('read err', err);
      return res.status(404).end();
    }

    const { url } = req;

    const sheet = new ServerStyleSheet();
    const context = {};
    const markup = renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={url} context={context}>
          <Provider>
            <App />
          </Provider>
        </StaticRouter>
      </StyleSheetManager>,
    );

    const styleTags = sheet.getStyleTags();

    const RenderedApp = process.env.NODE_ENV === 'development' ? htmlData : htmlData
      .replace('<style id="serverStyleTags"></style>', styleTags)
      .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);

    return res.send(RenderedApp);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

app.on('error', (error) => {
  throw error;
});
