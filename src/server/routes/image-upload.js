const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require('fs');

const getColors = require('get-image-colors');

router.post('/api/image_upload', (req, res) => {
    const json = {
        success: true
    };
    handleUpload(req, res,json)
        .then((success) => {
            if (success) {
                getColors(req.file.path)
                    .then(colors => {       
                        json.colors = colors.map(color => color.hex());
                        deleteFile(req);
                        res.status(200).send(json);
                    });
                
            } else {
                json.success = false;
                res.status(500).send(json);
            }
        })
        .catch(e => {
            json.success = false;
            json.error = e.message;
            res.status(500).send(json);

            

        });



});

// delete temp file
const deleteFile = (req) => {  
    fs.unlink(req.file.path, (err) => {
        if (err) {
            console.log(err.message);
        }
        
    });
};



const handleUpload = (req, res, json) => {
    return new Promise(resolve => {
        upload(req, res, function (err) {
            if (err) {
                // An error occurred when uploading 
                json.status = 500;
                json.error = "Error: " + err.message;
                deleteFile(req);
                resolve(false);
            }
            // Everything went fine 
            /** Multer gives us file info in req.file object */
            if (!req.file) {
                json.status = "error";
                json.error = "no file passed";
                deleteFile(req);
                resolve(false);        
            }
            resolve(true);

        })
    })
}

// TEMP storage used
const storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
    }
});

// upload multer
const upload = multer({ //multer settings
    storage: storage
}).single('file');



module.exports = router;