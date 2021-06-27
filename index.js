

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    if (req.url === '/') {
        fs.readFile('index.html', function(err, data){
            if(err) throw err;
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(data);
            return res.end();
        })
    } else if (req.url === '/About-Us') {
        fs.readFile('About_Us.html', function(err, data){
        if(err) throw err;
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
        })
    } else if (req.url === '/contact-us') {
        fs.readFile('contact_us.html', function(err, data){
        if(err) throw err;
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
        })
    } else{
        fs.readFile('404_error.html', function(err, data){
        if(err) throw err;
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
        })
    }
}).listen(8080);