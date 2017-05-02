let http = require('http'),
    fs = require('fs'),
    express = require('express'),
    //set an instance of exress
    app = express(),
    // Body parser
    bodyParser = require('body-parser'),
    // contentDisposition
    contentDisposition = require('content-disposition'),
    //require the path nodejs module
    path = require("path");

//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//tell express that www is the root of our public web folder
app.use(express.static(path.join(__dirname, 'www')));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//tell express what to do when the /about route is requested
app.post('/file', function(req, res) {

    res.setHeader('Content-Type', 'html/text');

    //mimic a slow network connection
    setTimeout(function() {
        res.send(JSON.stringify({
            filename: req.body.filename || null,
            content: req.body.content || null
        }));

    }, 1000);

    //debugging output for the terminal
    fs.writeFile(req.body.filename, '');
    fs.appendFile(req.body.filename, req.body.content);

    res.setHeader('Content-Disposition', contentDisposition('file.nasl'));
});

//wait for a connection
app.listen(3000, function () {
    console.log('Server is running. Point your browser to: http://localhost:3000');
});