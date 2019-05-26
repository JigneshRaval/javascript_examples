var http = require('http');
var fs = require('fs');
var path = require('path');

const port = process.env.PORT || 3003;

console.log("PORTS --> ", process.env.PORT);

http.createServer(function (request, response) {
    console.log('Request ...: ', __dirname + request.url);

    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './ES6-Modules.html';

    var extname = path.extname(filePath);

    // Rewrite file path with extention if extention is missing in such case like, ES6 Modules imported withour extention name
    // Example : import { Observable } from './internal/Observable'; <- here no file extentio provided
    // so server can not understand what is files MIME type, so we need to provide it by re-writing url with file extentions
    if (!extname) {
        filePath = filePath + '.js';
    }

    // console.log('filePath ==== ',filePath);

    var contentType = 'text/html';
    switch (extname) {
        case '':
            contentType = 'text/javascript';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.ts':
            contentType = 'text/javascript';
            break;
        case 'typescript':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
    }

    console.log(" Type : ", contentType, '====', extname);

    fs.readFile(filePath, function (error, content) {
        if (error) {
            if (error.code == 'ENOENT') {
                fs.readFile('./404.html', function (error, content) {
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });
                    response.end(content, 'utf-8');
                });
            } else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
                response.end();
            }
        } else {
            response.writeHead(200, {
                'Content-Type': contentType
            });
            response.end(content, 'utf-8');
        }
    });

}).listen(port);

console.log(`Server running at http://localhost:${port}/`);
