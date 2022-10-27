const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json');


app.get('/', (req, res) => {
    res.send('API Running');
});

app.get('/online-courses', (req, res) => {
    res.send(courses)
});

app.listen(port, () => {
    console.log('Server running on port', port);
});