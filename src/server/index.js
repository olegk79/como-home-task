const express = require('express');
const bodyParser = require("body-parser");

// create uploads folder if needed
const fs = require('fs');
fs.exists('./uploads', (exists) => {
    if (!exists) {
        fs.mkdir('./uploads');
    }
});


/*require routes*/
const routes = require("./routes/index");

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(routes);

app.listen(8080, () => console.log('Listening on port 8080!'));
