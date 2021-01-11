const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/index');

// Settings
const port = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// Routes
app.use(router);

//static Files
app.use(express.static(path.join(__dirname, 'public')))

// server listen
app.listen(port, (req, res) => {
    console.log(`Server on port: ${port}`);
});