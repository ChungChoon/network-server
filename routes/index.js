"use strict";

const express = require('express'),
  router = express.Router(),
    upload = require('../config/multer').upload;

/* GET home page. */
router.post('/', upload.single('regKeyFile'), async (req, res, next) => {
        console.log(req.file);
        res.status(200).json({
            message: "reg OK",
            name: req.file.originalname
        })
    });

module.exports = router;
