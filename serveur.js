// on demande express 
const express = require("express");

const app = express();


app.set('view engine', 'ejs');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));


app.get(['/', '/index'], function(req, res) {
    var obj = {
        nom: "c0ca",
        age: 49
    }
    res.render('index', obj);
});

app.get('/personnages', function(req, res) {
    res.render('personnages');
})

app.post(['/', '/index'], function(req, res) {
    nomRecu = req.body.nom;
    res.render('index', { nom: nomRecu })
})




// on ecoute sur le port 9090
app.listen(9090, function() {
    console.log("Mon serveur écoute sur le port 9090 !")
})