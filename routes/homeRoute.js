const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    res.render('home');
})

router.get('/about-kcc', async (req, res, next) => {
    res.render('about-kcc');
})
router.get('/ui', async (req, res, next) => {
    res.render('course-single');
})
router.get('/ub', async (req, res, next) => {
    res.render('index');
})
module.exports = router;