"use strict";

const express = require('express'),
  router = express.Router(),
    upload = require('../config/multer').upload;

/* GET home page. */
router.post('/', upload.single('keyFile'), async (req, res, next) => {
        console.log(req.file);
        res.status(200).json({
            message: "regOK",
            name: req.file.originalname
        })
    });

module.exports = router;

