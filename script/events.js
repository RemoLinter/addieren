/**
 * Created by remol on 18.02.2017.
 */
$(document).ready(function() {
    // Eingabefelder in Variable stecken
    var $inputA = $('#a');
    var $inputB = $('#b');

    // Button in Variable stecken
    var $buttonGo = $('#go');

    // Wenn Button geklickt wird.
    $buttonGo.on("click", function() {
        // Gib Ergebnis der Addition aus
        ausgabeAddition($inputA, $inputB);
    });
});