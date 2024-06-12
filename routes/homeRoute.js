const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    await res.render('home');
})

router.get('/about-kcc', async (req, res, next) => {
    await res.render('about-kcc');
})
router.get('/kcc-answer', async (req, res, next) => {
    await res.render('student_help');
})
router.get('/ui', async (req, res, next) => {
    await res.render('course-single');
})
router.get('/login', async (req, res, next) => {
    await res.render('admin/login');
})
module.exports = router;