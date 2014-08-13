
var http = require('http');
require('shelljs/global');
var anyBody = require("body/any")

http.createServer(function (req, res) {
   
     function send(err, o) {
        // console.log(err, body )
         
         console.info("Saved %s by %s" , o.name, o.author);
         
         /*
         console.info(o.js);
         console.info(o.html);
         console.info(o.css);
        */
         var filename = o.name.replace(/[^a-zA-Z0-9]/g,' ');
         filename = filename.replace(/ +/g,'_');
         filename = filename.replace(/_$/,'').toLowerCase() + '.json';
         
         var str = JSON.stringify(o, null, '    ');
         str.to(filename)
         console.info('saved to [%s]',filename);
    }
    
   // jsonBody(req, res, send)
    anyBody(req, res, {}, send)
    console.log(req.url);
    
  res.writeHead(200, {'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/plain'});
    
  res.end('Hello World\n');
    
}).listen(1337, 'cdn.localhost');

console.log('Server running at cdn.localhost');
