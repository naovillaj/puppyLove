const express = require('express');
const app = express();
app.use('/',express.static('assets'));

app.listen(process.env.PORT || 3000, () => {
    console.log("Iniciando en puerto 3000");
});