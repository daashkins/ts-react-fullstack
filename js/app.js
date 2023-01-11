"use strict";
exports.__esModule = true;
var express = require("express");
var db_services_1 = require("./src/services/db.services");
var router_1 = require("./src/routes/router");
var app = express();
app.get('/api/test', function (_req, res) {
    return res.status(200).json({ test: 'is working as it should' });
});
(0, db_services_1.connectToDatabase)()
    .then(function () {
    app.use("/api/puppies", router_1.router);
})["catch"](function (error) {
    console.error("Database connection failed", error);
    process.exit();
});
exports["default"] = app;
