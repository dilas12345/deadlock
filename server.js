// Serves static files, except instead of 404s it sends index.html

var express = require('express');
var path = require('path');

var app = express()

var publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath));
app.use(function no_file_fallback(req, res, next) {
    res.sendFile(path.join(publicPath, 'index.html'))
})
app.listen(process.env.PORT || 5000)
