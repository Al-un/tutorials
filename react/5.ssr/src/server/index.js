import express from 'express';
import cors from 'cors';

import { renderToString } from 'react-dom/server';
import App from '../shared/App';
import React from 'react';

import serialize from 'serialize-javascript';

const app = express();
app.use(cors());

// Serving public folder built by bundler
app.use(express.static('public'));

import routes from '../shared/routes';
import { StaticRouter, matchPath } from 'react-router-dom';

app.get('*', (req, res, next) => {
  console.log(`[Server] loading URL ${req.url}`);
  const activeRoute = routes.find(route => matchPath(req.url, route)) || {};

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise
    .then(data => {
      const context = { data };
      console.log(`[Server] context: ${context}`);

      //   const markup = renderToString(<App data={data} />);
      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      );

      res.send(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>SSR with RR</title>
              <script src="/bundle.js" defer></script>
              <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
            </head>
    
            <body>
              <div id="app">${markup}</div>
            </body>
          </html>
        `);
    })
    .catch(next);
});

// import { fetchPopularRepos } from '../shared/api';

// app.get('*', (req, res, next) => {
//   fetchPopularRepos().then(data => {
//     const markup = renderToString(<App data={data} />);

//     res.send(`
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <title>SSR with RR</title>
//             <script src="/bundle.js" defer></script>
//             <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
//           </head>

//           <body>
//             <div id="app">${markup}</div>
//           </body>
//         </html>
//       `);
//   });
// });

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
