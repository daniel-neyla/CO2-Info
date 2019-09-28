

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
    var p_Flugzeug = document.getElementById("proßent_Flugzeuga_Auto.innerText    = (Strecke * Auto_C);
    a_Bahn.innerText    = (Strecke * Bahn_C);
    a_Flugzeug.innerText= (Strecke * Flugzeug_C);
    a_Fahrad.innerText  = (Strecke * Fahrad_C);

    p_Auto.innerText    = ((Strecke * Auto_C)    / Austoß_Woche) * 100;
    p_Bahn.innerText    = ((Strecke * Bahn_C)    / Austoß_Woche) * 100;
    p_Flugzeug.innerText= ((Strecke * Flugzeug_C)/ Austoß_Woche) * 100;
    p_Fahrad.innerText  = ((Strecke * Fahrad_C)  / Austoß_Woche) * 100;


    //var a_Fahrad = document.getElementById("austoß_sol_Fahrad");
    var po_Auto = document.getElementById("proßent_sol_Auto");
    var po_Fahrad = document.getElementById("proßent_sol_Fahrad");
    var po_Bahn = document.getElementById("proßent_sol_Bahn");
    var po_Flugzeug = document.getElementById("proßent_sol_Flugzeug");






    po_Auto.innerText    = ((Strecke * Auto_C)    / Austoß_Woche_Sol) * 100;
    po_Bahn.innerText    = ((Strecke * Bahn_C)    / Austoß_Woche_Sol) * 100;
    po_Flugzeug.innerText= ((Strecke * Flugzeug_C)/ Austoß_Woche_Sol) * 100;
    po_Fahrad.innerText  = ((Strecke * Fahrad_C)  / Austoß_Woche_Sol) * 100;

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

p_Auto.innerText    = ((Strecke * Auto_C)    / Austoß_Woche) * 100;
    p_Bahn.innerText    = ((Strecke * Bahn_C)    / Austoß_Woche) * 100;
    p_Flugzeug.innerText= ((Strecke * Flugzeug_C)/ Austoß_Woche) * 100;
    p_Fahrad.innerText  = ((Strecke * Fahrad_C)  / Austoß_Woche) * 100;

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

    p_Auto.innerText    = ((Strecke * Auto_C)    / Austoß_Woche) * 100;
    p_Bahn.innerText    = ((Strecke * Bahn_C)    / Austoß_Woche) * 100;
    p_Flugzeug.innerText= ((Strecke * Flugzeug_C)/ Austoß_Woche) * 100;
    p_Fahrad.innerText  = ((Strecke * Fahrad_C)  / Austoß_Woche) * 100;


    

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

   p_Auto.innerText    = ((Strecke * Auto_C)    / Austoß_Woche) * 100;
    p_Bahn.innerText    = ((Strecke * Bahn_C)    / Austoß_Woche) * 100;
    p_Flugzeug.innerText= ((Strecke * Flugzeug_C)/ Austoß_Woche) * 100;
    p_Fahrad.innerText  = ((Strecke * Fahrad_C)  / Austoß_Woche) * 100;



}