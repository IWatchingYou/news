const express = require('express');
const router = express.Router();

router.get('/news', (req, res)=>{
  res.status(200).json({
    message: 'Handling GET requests to /news'
  })
});

router.post('/news', (req, res)=>{
  res.status(200).json({
    message: 'Handling POST requests to /news'
  })
});

module.exports = router;