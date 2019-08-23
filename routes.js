const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if(url === '/users') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>')
      res.write('<head><title>My first server</title></head>');
      res.write('<body><ul><li>First</li><li>Second</li></ul></body>');
      res.write('</html>');
      return res.end();
    }
  if(url === '/create-users', method === 'POST') {
      const body = [];
      req.on('data', chunk => {
          body.push(chunk);
      });

      return req.on('end', () => {
          const data = Buffer.concat(body).toString();
          const message = data.split('=')[1];
          res.setHeader('Location', '/');
          res.statusCode = 302;
          console.log(message);
          return res.end();
      })
  }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My first assigment</title></head>');
    res.write('<body><form action="/create-users" method="POST"><input type="text" name="username" /><button>Submit</button></form></body>');
    res.write('</html>');
    res.end();

};

module.exports = requestHandler;