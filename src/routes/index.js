const express = require('express');
const router = express.Router();





// routes
router.get('/',(req, res) => {
    res.render('index', {
        title: 'Manuel G'
    })
});

router.get('/contact',(req, res) => {
    res.render('contact', {
        title: 'Manuel G'
    })
});

module.exports = router;
