/**
 * Created by remol on 18.02.2017.
 */
$(document).ready(function() {
    // Wenn Button geklickt wird.
    $('#go').on("click", function() {
        // Eingabefelder in Variable stecken
        var $inputA = $('#a');
        var $inputB = $('#b');
        
        // Gib Ergebnis der Addition aus
        ausgabeAddition($inputA, $inputB);
    });
});