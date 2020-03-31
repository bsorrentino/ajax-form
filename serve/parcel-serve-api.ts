import Bundler = require('parcel-bundler');
import express = require('express');
import bodyparser = require('body-parser')
import path = require('path')

const app = express()
// Inizializzare un nuovo bundle usando un file e le opzioni (per le opzioni e il file vedere la documentazione del bundle)
const bundler = new Bundler('index.html', { 
    outDir:'./test'
});

// Lasciate che express utilizzi il middleware bundler, questo permetterà di gestire ogni richiesta di Parcel sul vostro server express
app
.use('/static', express.static('serve'))
.post( '/api/echo', bodyparser.json(), (req, res) => {
    console.log( req.method, req.url, req.query, req.body )

    if( req.query.redirect ) {
        res.redirect('/static/redirect.html')
        return 
    }
    if( req.query.replace ) {
        res.sendFile(  path.join(process.cwd(), 'serve',  'replace.html' ))
        return 
    }

    res.status(200).send( req.body )
})
.put( '/api/echo', bodyparser.json(), (req, res) => {

    console.log( req.method, req.url, req.body )

    res.status(200).send( req.body )
})
.delete( '/api/echo', bodyparser.json(), (req, res) => {

    console.log( req.method, req.url, req.body )

    res.status(200).send( req.body )
})
.use(bundler.middleware())
// Inizializza il listen sulla porta 8080
.listen(8080, () => {
    console.log('ready on http://localhost:8080')
});