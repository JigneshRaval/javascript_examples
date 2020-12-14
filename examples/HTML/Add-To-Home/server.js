var http = require('http');
var fs = require('fs');
var path = require('path');
var cp = require('child_process');
var cliArguments = process.argv.slice(2);

var fileName, port = '3000', browser = 'chrome',
    browserPath = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";

if (cliArguments && cliArguments.length > 0) {
    cliArguments.forEach(function (arg) {
        console.log('ARG == ', arg, arg.indexOf('file'), arg.indexOf('port'));
        if (arg.indexOf('file') > -1) {
            fileName = arg.split('=')[1];
        }
        if (arg.indexOf('port') > -1) {
            port = arg.split('=')[1];
        }
        if (arg.indexOf('browser') > -1) {
            browser = arg.split('=')[1];
            if (browser === 'firefox') {
                browserPath = "c:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe";
            }
            if (browser === 'ie') {
                browserPath = "C:\\Program Files\\Internet Explorer\\iexplore.exe";
            }
        }
    });
}

console.log("PORTS --> ", fileName, port);
var url_to_open = `http://localhost:${port}/`;

http.createServer(function (request, response) {

    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = fileName || './index.html';

    var extname = path.extname(filePath);

    var contentType = 'text/html';

    switch (extname) {
        case '.js':
        case '.mjs':
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
        case '.svg':
            contentType = 'image/svg+xml';
            break;
        case '.xht':
            contentType = 'application/xhtml+xml';
            break;
        case '.xhtml':
            contentType = 'application/xhtml+xml';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
        case '.pdf':
            contentType = 'application/pdf';
            break;
        case '.doc':
            contentType = 'application/msword';
            break;
        case '.eot':
            contentType = 'appliaction/vnd.ms-fontobject';
            break;
        case '.ttf':
            contentType = 'aplication/font-sfnt';
            break;
        case '.woff':
            contentType = 'font/woff';
            break;
        case '.woff2':
            contentType = 'font/woff2';
            break;
        case '.svg':
            contentType = 'image/svg+xml';
            break;
    }

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

}).listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running at http://localhost:${port}/`);
        // https://stackoverflow.com/questions/8085474/can-node-js-invoke-chrome
        cp.spawn(browserPath, ['-new-tab', url_to_open]);
    }
});

/* cp.exec(`start "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe" http://localhost:${port}/`, function (err) {
    if (err) {
        //process error
    } else {
        console.log("success open")
}}) */
