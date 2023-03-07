$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });
});
//

var bpSD = 6600;
var bpHMM = 1700;
var bpUH = 2900;
var bpEXPLO = 5200;
var bpMF = 2000;
var bpBigMF = 17000;
var huntingBolt = 5;
var huntingArrow = 4; 
var piercingArrow = 12;
var smallExplosiveRune = 50;

var gastosEK = document.querySelector('#totalGastosEK span');
var gastosRP = document.querySelector('#totalGastosRP span');

function totalEK() {
    let wasteUH = document.querySelector('#ek-uh').value;
    let wasteEXPLO = document.querySelector('#ek-explo').value;
    let wasteMF = document.querySelector('#ek-mf').value;
    let wasteHMM = document.querySelector('#ek-hmm').value;
    //
    gastosEK.innerText = ( 
            (wasteUH * bpUH) + (wasteEXPLO * bpEXPLO) + 
            (wasteHMM * bpHMM) + (wasteMF * bpMF)  + ' gps' 
        );
}

function totalRP() {
    let wasteSD = document.querySelector('#rp-sd').value;
    let wasteEXPLO = document.querySelector('#rp-explo').value;
    let wasteHMM = document.querySelector('#rp-hmm').value;
    let wasteUH = document.querySelector('#rp-uh').value;
    let wasteBigMF = document.querySelector('#rp-mf').value;
    let wasteHuntingBolt = document.querySelector('#rp-huntingBolt').value;
    let wasteHuntingArrow = document.querySelector('#rp-huntingArrow').value;
    let wastePiercingArrow = document.querySelector('#rp-piercingArrow').value;
    let wasteSmallExplosive = document.querySelector('#mage-small-explosive').value;
    //
    gastosRP.innerText = ( 
        (wasteSD * bpSD) + (wasteEXPLO * bpEXPLO) + 
        (wasteUH * bpUH) + (wasteBigMF * bpBigMF) + 
        (wasteHuntingBolt * huntingBolt) + (wasteHuntingArrow * huntingArrow) +
        (wastePiercingArrow * piercingArrow) + (wasteHMM * bpHMM) + (wasteSmallExplosive * smallExplosiveRune) + ' gps'
    );
}