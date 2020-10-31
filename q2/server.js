var net = require('net');
const os = require('os');
const fs = require('fs');
var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
      console.log('Received: ' + data);
      r = data.toString();
      console.log(r);
      if (r.substring(0, 4) == "POST") {
        //socket.write("OK");
        socket.write("HTTP/1.1 200 OK\n");
        let json = JSON.stringify(os.cpus());
        socket.write("Content-Length: " + json.length);
        socket.write("\n\n");
        socket.write(json);
      }
      // socket.push(String(angle));
      if (r.substring(0, 5) == "GET /") {
        socket.write("HTTP/1.1 200 OK\n");
        fs.readFile('./index.html', 'utf8', function (contents) {
          let json = JSON.stringify(os.cpus());
          socket.write("Content-Length: " + json.length);
          socket.write("\n\n");
          socket.write(json);
        })
      }
  });
  
  socket.on('close', function() {
      console.log('Connection closed');
  });

  socket.on('end', function() {
      console.log('client disconnected');
   });

  socket.on('error', function() {
      console.log('client disconnected');
   });
});
server.listen(8080, function() { 
  console.log('server is listening on port 8080');
});