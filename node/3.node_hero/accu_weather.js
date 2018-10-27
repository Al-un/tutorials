const express = require('express');
const rp = require('request-promise');
const exphbs = require('express-handlebars');
const path = require('path')

const app = express();

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/:city', (req, res) => {
    console.log('Requesting search for ' + req.params.city);
    rp({
        method: 'GET',
        uri: 'http://dataservice.accuweather.com/locations/v1/cities/search',
        qs: {
            apikey: 'z1ATiRjgGXXVOWHHBktFN83a4dUgjfsy',
            q: req.params.city
        },
        json: true
    })
        .then((data) => {
            res.render('accu_weather_index', { data: JSON.stringify(data) })
        })
        .catch((err) => {
            console.log(err)
            res.render('accu_weather_error', { err: err })
        })
});

app.listen(3000)