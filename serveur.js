// on demande express 
const express = require("express");
const app = express();


app.set('view engine', 'ejs')


app.get(['/', '/index'], function(req, res) {
    var obj = {
        nom: "c0ca",
        age: 49
    }
    res.render('index', obj);
})

app.get('/personnages', function(req, res) {
    res.render('personnages');
})

// on ecoute sur le port 9090
app.listen(9090, function() {
    console.log("Mon serveur écoute sur le port 9090 !")
})