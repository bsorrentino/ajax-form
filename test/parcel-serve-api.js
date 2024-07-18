"use strict";
// import Bundler = require('@parcel/bundler-default');
var express = require("express");
var path = require("path");
var app = express();
// Inizializzare un nuovo bundle usando un file e le opzioni (per le opzioni e il file vedere la documentazione del bundle)
// const bundler = new Bundler('index.html', { 
//     outDir:'./test'
// });
// Lasciate che express utilizzi il middleware bundler, questo permetterà di gestire ogni richiesta di Parcel sul vostro server express
app
    .post('/api/echo', express.json(), function (req, res) {
    console.log(req.method, req.url, req.query, req.body);
    if (req.query.redirect) {
        res.redirect('/redirect.html');
        return;
    }
    if (req.query.replace) {
        res.sendFile(path.join(process.cwd(), 'test', 'replace.html'));
        return;
    }
    res.status(200).send(req.body);
})
    .get('/api/echo', express.json(), function (req, res) {
    console.log(req.method, req.url, req.body);
    res.status(200).send(req.body);
})
    .put('/api/echo', express.json(), function (req, res) {
    console.log(req.method, req.url, req.body);
    res.status(200).send(req.body);
})
    .delete('/api/echo', express.json(), function (req, res) {
    console.log(req.method, req.url, req.body);
    res.status(200).send(req.body);
})
    .use('/', express.static('dist'))
    .use('/', express.static('test'))
    //.use(bundler.middleware())
    // Inizializza il listen sulla porta 8080
    .listen(8080, function () {
    console.log('ready on http://localhost:8080');
});
