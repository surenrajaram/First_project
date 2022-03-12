var express = require('express');
var app = express();
const PORT = process.env.PORT || 5051;

const { locations } = require('./util/handlers/locations')
const { addlocation } = require('./util/handlers/addlocation')
const { getAddress } = require('./util/handlers/getaddress')

app.get('/locations', locations)
app.get('/addlocation', addlocation);
app.get('/getAddress', getAddress);

app.get('/get-coordinates', (req, res) => {
    res.send('Save-Humanity API Project');
});

app.listen(PORT, function() {
    console.log('Save Humanity Running at: ${PORT}');
});

