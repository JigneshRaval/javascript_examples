const path = require('path'),
    express = require('express'),
    app = express(),
    router = express.Router(),
    port = process.env.PORT || 3001;
const fs = require('fs');


// This will help to load other included files in index.html
app.use(express.static(path.resolve(__dirname)));

console.log('__dirname :: ', __dirname);
console.log('__dirname 2 :: ', path.resolve(__dirname, './systemjs-typescript.html'));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './systemjs-typescript.html'));
});

// Handle 404 Error
app.use(function (req, res) {
    res.status(400).send({ error: '404: File Not Found', message: "Plese Go Back to Home page." });
});

// Handle 500 Error
app.use(function (error, req, res, next) {
    res.status(500).send({ error: '500: Internal Server Error', message: error });
});

app.listen(port, () => { console.log(`App is listening on port http://localhost:${port}`) });

