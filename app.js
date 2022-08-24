var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/:date", function (req, res) {
    try {
        let date = new Date;
        let param = isNaN(req.params.date) ? req.params.date :  Number(req.params.date);

        date = new Date(param);

        return res.send({
            unix: date.getTime(),
            utc: date.toUTCString(),
        })

    } catch (error) {
        return {
            data: 'invalid date',
        }
    }
});

module.exports = app;
