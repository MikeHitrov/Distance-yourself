import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
let analyzer = require('./sentimentAnalyzer.js')

function App() {
  const url = 'http://newsapi.org/v2/everything?' +
    'q=COVID-19&' +
    'from=2020-03-28&' +
    'sortBy=popularity&' +
    'apiKey=a48a4112d55142368f57fbc187014946';
  var req = new Request(url);

  fetch(req)
    .then(function (response) {
      console.log(response.json())
    })

  return (
    <Router>{renderRoutes(routes)}</Router>
  );
}

export default App;
