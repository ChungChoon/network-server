"use strict";

const express = require('express'),
  router = express.Router(),
    upload = require('../config/multer').upload,
    fs = require('fs');


router.post('/', upload.single('keyData'), async (req, res, next) => {
    const json = (JSON.stringify(req.file.buffer.toString('utf8')));
    console.log('hello');
    fs.writeFile(`bc_network/data/dd/keystore/${req.file.originalname}`, JSON.parse(json), 'utf8', (err, result) => {

        if(err) {
            res.json({
                message: "error"
            });
            return;
        }
        res.json({
            "message": "ok",
            result
        });
    });
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

