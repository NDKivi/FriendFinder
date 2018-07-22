const fs = require("fs");

function addHTMLRoutes(app) {
    app.get("/survey", function (req, res) {
        fs.readFile("./app/public/survey.html", function(err, data) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    });

    app.get("*", function (req, res) {
        fs.readFile("./app/public/home.html", function(err, data) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    });

    console.log("HTML Routes added");
}

module.exports = addHTMLRoutes;