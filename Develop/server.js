
const express = require('express');
const path = require('path');
const notes = require('./db/db.json')

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => res.send('public'));

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);



app.listen(PORT, () => console.log(`App listening on port ${PORT}`));