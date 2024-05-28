const express = require('express');
const app = express();
const port = 8080;

app.use(express.static("public"));
// app.get('/', (req, res) => res.send(' THIS IS CSC314 CLOUD COMPUTING DEVOPS;CI-CD PIPELINE CREATED WITH AWS.THIS PAGE INDICATES SUCCESS NAME: IKOKOH DIVINE PRINCE  MATRIC NUMBER: VUG/CSC/21/6051'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
