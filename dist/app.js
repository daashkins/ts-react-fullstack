"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express';
const express = require("express");
const controllers_1 = require("./controllers");
const app = express();
app.get('/api/test', (_req, res) => {
    return res.status(200).json({ test: 'is working as it should' });
});
app.get('/api/puppies', (req, res) => {
    const data = controllers_1.getPuppies();
    console.log(data);
    return res.status(200).json({ test: 'is working as it should' });
});
exports.default = app;
