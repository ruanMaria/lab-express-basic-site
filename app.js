const express = require('express')
const hbs = require('hbs');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

hbs.registerPartials(__dirname + '/views/partials');



app.get("/about", (request, response) => {
    response.render('about', {title:'About'})
});
app.get("/works", (request, response) => {
    response.render('works', {title:'Works'})
});

app.get("/gallery", (request, response) => {
    response.render('gallery', {title:'Gallery'})
});

app.get("*", (request, response) => {
    console.log('Request received');
    response.render('home', {title:'Home'})

});

app.listen(3000);
