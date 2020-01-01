let app = require('express')();
let http = require('http').createServer(app);

app.get('/', (req, res) => res.send('<h1>Hello world</h1>'));

http.listen(3000, function(){
  console.log('listening on *:3000');
});

