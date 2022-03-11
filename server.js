
const apiRouters = require('./routes/apiroutes')
const express = require('express');
const htmlRoute = require('./routes/htmlroutes')

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'));
app.use(apiRouters);
app.use(htmlRoute);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));