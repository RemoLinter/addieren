/**
 * Created by remol on 18.02.2017.
 */
var ausgabeAddition = function ($inputA, $inputB) {
    // Ausgabe berechnen
    var ausgabe = addieren($inputA.val(), $inputB.val());

    // Wenn das Erbebnis keine Nummer ist
    if (isNaN(ausgabe)) {
        // Fehlermeldung in Ausgabe schreiben
        ausgabe = "fehlerhafte Eingabe";
    }

    // In Konsole ausgeben
    ausgabeLog(ausgabe);

    // Im HTML ausgeben
    ausgabeDOM(ausgabe);

    // Als Alert ausgeben
    ausgabeAlert(ausgabe);

};