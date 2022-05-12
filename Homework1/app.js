const express = require("express")
const bodyParser = require('body-parser');
const app = express();


app.use(express.static("public"))
app.use(bodyParser.json());
// set the view engine to ejs
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
    res.status(200);
});
app.get('/contact', (req, res) => {
    res.render('contact');
    res.status(200);
});
app.get('/skill', (req, res) => {
    res.render('skill');
    res.status(200);
});
app.listen(3000, () => {
    console.log('server started on port 3000!');
});
