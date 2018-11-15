"use strict";

const express = require('express'),
    router = express.Router(),
    upload = require('../config/multer').upload,
    fs = require('fs');


router.post('/', async (req, res, next) => {
    console.log(req.body.key);
    let key_data = req.body.key;
    let key_name = req.body.mail;
    fs.writeFile(`bc_network/data/dd/keystore/${key_name}.json`, key_data, 'utf8', (err, result) => {
        if (err) {
            res.json({
                message: "error"
            });
            return;
        } else {
            res.json({
                "message": "ok"
            });
        }
    })
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