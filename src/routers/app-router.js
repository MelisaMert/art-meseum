const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
   res.json({nessage: "Welcome to Art Meseum App"});
});

module.exports = router;