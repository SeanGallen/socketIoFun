let app = require('express')();
let http = require('http').createServer(app);

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

http.listen(3000, function(){
  console.log('listening on *:3000');
});

