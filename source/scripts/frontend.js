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

var bpUH = 2900;
var bpEXPLO = 5200;
var bpMF = 2000;
var bpSD = 6600;
var bpBigMF = 17000;
var huntingBolt = 5;
var huntingArrow = 4; 
var piercingArrow = 12;

var gastosEK = document.querySelector('#totalGastosEK span');
var gastosRP = document.querySelector('#totalGastosRP span');

function totalEK() {
    let wasteUH = document.querySelector('#ek-uh').value;
    let wasteEXPLO = document.querySelector('#ek-explo').value;
    let wasteMF = document.querySelector('#ek-mf').value;
    //
    gastosEK.innerText = ( (wasteUH * bpUH) + (wasteEXPLO * bpEXPLO) + (wasteMF * bpMF) );
}

function totalRP() {
    let wasteSD = document.querySelector('#rp-sd').value;
    let wasteEXPLO = document.querySelector('#rp-explo').value;
    let wasteUH = document.querySelector('#rp-uh').value;
    let wasteBigMF = document.querySelector('#rp-mf').value;
    let wasteHuntingBolt = document.querySelector('#rp-huntingBolt').value;
    let wasteHuntingArrow = document.querySelector('#rp-huntingArrow').value;
    let wastePiercingArrow = document.querySelector('#rp-piercingArrow').value;
    //
    gastosRP.innerText = ( 
        (wasteSD * bpSD) + (wasteEXPLO * bpEXPLO) + 
        (wasteUH * bpUH) + (wasteBigMF * bpBigMF) + 
        (wasteHuntingBolt * huntingBolt) + (wasteHuntingArrow * huntingArrow) +
        (wastePiercingArrow * piercingArrow)
    );
}