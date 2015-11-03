var Bleacon = require('bleacon');

/*
Scan Funktion
*/
function scan(){
Bleacon.startScanning();
}

/*
Sobald ein Becon gefunden wurde...
*/
Bleacon.on('discover', function(bleacon) {
    console.log(bleacon);
});

scan(); // start scanning