

//Fahrzeug CO2 Austoß (in Gramm / por Km)
var Auto_C = 110;
var Fahrad_C = 0;
var Bahn_C = 60;
var Flugzeug_C = 200;

var Austoß_Woche = (11 * 1000000) / 365;//3.650
var Austoß_Woche_Sol = (2.7 * 1000000) / 365;


var Hanauer_Landstr_bis_Riedberg =   13;
var Frankfurt_bis_Berlin =          560;
var Frankfurt_bis_Lisabon =         1983;
var Frankfurt_bis_Kapstadt =        11282;

function onBottumClickA() {
    //console.log("onBottumClick: " + Austoß_Woche);
    var Strecke = Hanauer_Landstr_bis_Riedberg;
    document.getElementById("Auswahl").innerText = "Hanauer Landstr. bis Riedberg";
    document.getElementById("km").innerText = Strecke;
    
    var a_Auto = document.getElementById("austoß_Auto");
    var a_Flugzeug = document.getElementById("austoß_Flugzeug");
    var a_Bahn = document.getElementById("austoß_Bahn");
    var a_Fahrad = document.getElementById("austoß_Fahrad");

    var a_Fahrad = document.getElementById("austoß_Fahrad");
    var p_Auto = document.getElementById("proßent_Auto");
    var p_Fahrad = document.getElementById("proßent_Fahrad");
    var p_Bahn = document.getElementById("proßent_Bahn");
    var p_Flugzeug = document.getElementById("proßent_Flugzeug");
    
    a_Auto.innerText    = (Strecke * Auto_C);
    a_Bahn.innerText    = (Strecke * Bahn_C);
    a_Flugzeug.innerText= (Strecke * Flugzeug_C);
    a_Fahrad.innerText  = (Strecke * Fahrad_C);

    p_Auto.innerText    = (Strecke * Auto_C)    / Austoß_Woche;
    p_Bahn.innerText    = (Strecke * Bahn_C)    / Austoß_Woche;
    p_Flugzeug.innerText= (Strecke * Flugzeug_C)/ Austoß_Woche;
    p_Fahrad.innerText  = (Strecke * Fahrad_C)  / Austoß_Woche;
}

function onBottumClickB() {
    //console.log("onBottumClick");
    var Strecke = Frankfurt_bis_Berlin;
    document.getElementById("Auswahl").innerText = "Frankfurt bis Berlin";
    document.getElementById("km").innerText = Strecke;
    
    var a_Auto = document.getElementById("austoß_Auto");
    var a_Flugzeug = document.getElementById("austoß_Flugzeug");
    var a_Bahn = document.getElementById("austoß_Bahn");
    var a_Fahrad = document.getElementById("austoß_Fahrad");

    var a_Fahrad = document.getElementById("austoß_Fahrad");
    var p_Auto = document.getElementById("proßent_Auto");
    var p_Fahrad = document.getElementById("proßent_Fahrad");
    var p_Bahn = document.getElementById("proßent_Bahn");
    var p_Flugzeug = document.getElementById("proßent_Flugzeug");
    
    a_Auto.innerText    = (Strecke * Auto_C);
    a_Bahn.innerText    = (Strecke * Bahn_C);
    a_Flugzeug.innerText= (Strecke * Flugzeug_C);
    a_Fahrad.innerText  = (Strecke * Fahrad_C);

    p_Auto.innerText    = (Strecke * Auto_C)    / Austoß_Woche;
    p_Bahn.innerText    = (Strecke * Bahn_C)    / Austoß_Woche;
    p_Flugzeug.innerText= (Strecke * Flugzeug_C)/ Austoß_Woche;
    p_Fahrad.innerText  = (Strecke * Fahrad_C)  / Austoß_Woche;
}

function onBottumClickC() {
    //console.log("onBottumClick");

    var Strecke = Frankfurt_bis_Lisabon;
    document.getElementById("Auswahl").innerText = "Frankfurt bis Lisabon";
    document.getElementById("km").innerText = Strecke;
    
    var a_Auto = document.getElementById("austoß_Auto");
    var a_Flugzeug = document.getElementById("austoß_Flugzeug");
    var a_Bahn = document.getElementById("austoß_Bahn");
    var a_Fahrad = document.getElementById("austoß_Fahrad");

    var a_Fahrad = document.getElementById("austoß_Fahrad");
    var p_Auto = document.getElementById("proßent_Auto");
    var p_Fahrad = document.getElementById("proßent_Fahrad");
    var p_Bahn = document.getElementById("proßent_Bahn");
    var p_Flugzeug = document.getElementById("proßent_Flugzeug");
    
    a_Auto.innerText    = (Strecke * Auto_C);
    a_Bahn.innerText    = (Strecke * Bahn_C);
    a_Flugzeug.innerText= (Strecke * Flugzeug_C);
    a_Fahrad.innerText  = (Strecke * Fahrad_C);

    p_Auto.innerText    = (Strecke * Auto_C)    / Austoß_Woche;
    p_Bahn.innerText    = (Strecke * Bahn_C)    / Austoß_Woche;
    p_Flugzeug.innerText= (Strecke * Flugzeug_C)/ Austoß_Woche;
    p_Fahrad.innerText  = (Strecke * Fahrad_C)  / Austoß_Woche;

    

}

function onBottumClickD() {
    //console.log("onBottumClick");
    var Strecke = Frankfurt_bis_Kapstadt;
    document.getElementById("Auswahl").innerText = "Frankfurt bis Kapstadt";
    document.getElementById("km").innerText = Strecke;
    
    var a_Auto = document.getElementById("austoß_Auto");
    var a_Flugzeug = document.getElementById("austoß_Flugzeug");
    var a_Bahn = document.getElementById("austoß_Bahn");
    var a_Fahrad = document.getElementById("austoß_Fahrad");

    var a_Fahrad = document.getElementById("austoß_Fahrad");
    var p_Auto = document.getElementById("proßent_Auto");
    var p_Fahrad = document.getElementById("proßent_Fahrad");
    var p_Bahn = document.getElementById("proßent_Bahn");
    var p_Flugzeug = document.getElementById("proßent_Flugzeug");
    
    a_Auto.innerText    = (Strecke * Auto_C);
    a_Bahn.innerText    = (Strecke * Bahn_C);
    a_Flugzeug.innerText= (Strecke * Flugzeug_C);
    a_Fahrad.innerText  = (Strecke * Fahrad_C);

    p_Auto.innerText    = (Strecke * Auto_C)    / Austoß_Woche;
    p_Bahn.innerText    = (Strecke * Bahn_C)    / Austoß_Woche;
    p_Flugzeug.innerText= (Strecke * Flugzeug_C)/ Austoß_Woche;
    p_Fahrad.innerText  = (Strecke * Fahrad_C)  / Austoß_Woche;
}