const express = require('express'); // importing a CommonJS module
const server = express();

server.get('/', (req, res, next) => {
    res.send(`
      <h2>Hello</h2>
      <p>World</p>
      `);
  });

module.exports = server;
