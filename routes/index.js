"use strict";

const express = require('express'),
  router = express.Router(),
    upload = require('../config/multer').upload,
    fs = require('fs');


router.post('/', async (req, res, next) => {
    console.log(req.body);
    fs.writeFile("bc_network/data/dd/keystore/test3.json", req.body.keyFile, function(err){
        if (err) throw err;
        console.log("success");
        res.status(200).json({
            message: "regOK",
            // name: req.file.originalname
        })
    });
    // res.status(200).json({
    //     message: "regOK",
    //     // name: req.file.originalname
    // })
});
/* GET home page. */
// router.post('/', upload.single('keyFile'), async (req, res, next) => {
//         console.log(req.body);
//         res.status(200).json({
//             message: "regOK",
//             // name: req.file.originalname
//         })
//     });

module.exports = router;

