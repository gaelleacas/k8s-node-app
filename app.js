const express = require('express');
const app = express();

// Route / => display "hello world"
app.get('/', (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h1>Welcome to Google Kubernetes Engine!</h1>");
});

// healthcheck
app.get('/healthcheck', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).json({status:'gke is up'});
});

// starts an http server on the $PORT environment variable
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});