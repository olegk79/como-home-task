const express = require("express");
const router = express.Router();
const searchPixabayImages = require("../adapters/pixabay");

router.get('/api/images', (req, res) => {
    searchPixabayImages(req.query.q)
        .then(response => {
            if (response.status === 200) {
                let data = response.data.hits.map(hit => ({
                    previewURL: hit.previewURL,
                    webformatURL: hit.webformatURL
                }));
                res.status(200).send(data);
                //res.send(200, data);
            } else {
                res.status(response.status).send({ data: response.data });
                //res.send(response.status, { data: response.data });
            }  
        });



    
});

module.exports = router;