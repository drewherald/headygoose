const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/test', (req,res)=> {
    res.send('in articles');
});