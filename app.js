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
app.get("/api/:date", async function (req, res) {
    let date = new Date;
    let param = isNaN(req.params.date) ? req.params.date : Number(req.params.date);

    date = new Date(param);

    let isValid = false;
    let obj = {};

    if (Object.prototype.toString.call(date) === "[object Date]") {
        if (isNaN(date)) {
            isValid = false;
        } else {
            isValid = true;
        }
    } else {
        isValid = false;
    }

    if (isValid) {
        obj.unix = date.getTime();
        obj.utc = date.toUTCString();
    } else {
        obj.error = "Invalid Date";
    }

    return res.send(obj)
});

module.exports = app;
