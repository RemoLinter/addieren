/**
 * Created by remol on 18.02.2017.
 */
var ausgeben = function (wert) {
    // In Konsole ausgeben
    ausgabeLog(wert);

    // Im HTML ausgeben
    ausgabeDOM(wert);

    // Als Alert ausgeben
    ausgabeAlert(wert);
};

var addiereTextfelder = function ($inputA, $inputB) {
    // Ausgabe berechnen
    var ausgabe = addieren($inputA.val(), $inputB.val());

    // Wenn das Erbebnis keine Nummer ist
    if (isNaN(ausgabe)) {
        // Fehlermeldung in Ausgabe schreiben
        ausgabe = "fehlerhafte Eingabe";
    }

    return ausgabe;
};

