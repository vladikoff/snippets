
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
        res.writeHead(200, {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'});
        res.end('{"status":"success", "message":"Saved to '+filename+'"}\n');
    }
    
   // jsonBody(req, res, send)
    
    
    if(req.url == '/save/file'){
        
        anyBody(req, res, {}, send);

    }else{
        res.writeHead(200, {'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/plain'});
        var msg=[
            '// You want to do this:',
            
        ];
        res.end(msg.join('\n') + '\n');
    }
    
}).listen(1337, 'cdn.localhost');

console.log('Server running at cdn.localhost');
