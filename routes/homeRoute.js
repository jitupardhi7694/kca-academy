const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    res.render('home');
})

router.get('/ui', async (req, res, next) => {
    res.render('course-single');
})
router.get('/ub', async (req, res, next) => {
    res.render('index');
})
module.exports = router;