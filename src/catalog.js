"use strict";
function loadDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xmlhttp.open("GET", "catalog.xml", true);
    xmlhttp.send();
}
function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Artist</th><th>Title</th><th>Country</th><th>Company</th><th>Price</th><th>Year</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}
//table igu
function loadTableIgu() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFuncTableIgu(this);
        }
    };
    xmlhttp.open("GET", "catalogrep.xml", true);
    xmlhttp.send();
}
function myFuncTableIgu(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Representante</th><th>Localiad</th><th>Telefono</th><th>Comision</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo2").innerHTML = table;
}
//table lleida
function loadTableLle() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFuncTableIgu(this);
        }
    };
    xmlhttp.open("GET", "catalogrep2.xml", true);
    xmlhttp.send();
}
function myFuncTableLle(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Representante</th><th>Localiad</th><th>Telefono</th><th>Comision</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo3").innerHTML = table;
}
//table girona
function loadTableGir() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFuncTableIgu(this);
        }
    };
    xmlhttp.open("GET", "catalogrep3.xml", true);
    xmlhttp.send();
}
function myFuncTableGir(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Representante</th><th>Localiad</th><th>Telefono</th><th>Comision</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo4").innerHTML = table;
}
