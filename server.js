const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const fs = require("fs");
const addHTMLRoutes = require("./app/routing/htmlRoutes.js");
const addAPIRoutes = require("./app/routing/apiRoutes.js");
const friends = require("./app/data/friends.js");

const app = express();
const PORT = process.ENV.PORT || 3000;

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

addAPIRoutes(app, friends, addHTMLRoutes);

app.listen(PORT, function() {
    console.log("listening");
});