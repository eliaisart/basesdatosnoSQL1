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
/*

function loadDoc2() {
  var xmlhttp = new XMLHttpRequest();
  var resultado = document.getElementById("listaDeUsuarios");
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var xmlDoc = xmlhttp.responseXML;
      var usuarios = "";
      var representante = xmlDoc.getElementsByTagName("representante");
    
      for(var i = 0; i < representante.length; i++){
        usuarios += "<option>" + representante[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue + "</option>";
      }
      resultado.innerHTML = usuarios;
    }
  };
  xmlhttp.open("GET", "catalogrep.xml", true);
  xmlhttp.send();
}

function usuarioSeleccionado(){
  var e = document.getElementById("listaDeUsuarios");
  var usuario = e.insertAdjacentText;
  document.getElementById("info").innerHTML = usuario + " fue seleccionado";
}

*/
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
//taula select
/*

  function loadRep() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunctionRep(this);
      }
    };
    xmlhttp.open("GET", "representante.xml", true);
    xmlhttp.send();
  }
  function myFunctionRep(xhttp: XMLHttpRequest) {
    var i;
    var xmlDoc = xhttp.responseXML;
    var text = "";
    var etiqueta = xmlDoc.getElementsByTagName("TABLA");

    for (i = 0; i < etiqueta.length; i++){
      text = text + etiqueta[i].childNodes[0].nodeValue + "<br />";
    }
    document.getElementById("element_HTML").innerHTML = text;

    */
/*

function loadRepr() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFuncRep(this);
     }
  };
  xmlhttp.open("GET", "representante.xml", true);
  xmlhttp.send();
  }
function myFuncRep(xml: XMLHttpRequest) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Representante</th><th>Localidad</th><th>Telefono</th><th>Comision</th></tr>";
  var x = xmlDoc.getElementsByTagName("IGUALADA");
  for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("REPRESENTANTE")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("LOCALIDAD")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("TELEFONO")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("COMISION")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo2").innerHTML = table;
}

*/
/*
//desplegable
function muestraRepresentante(str: string) {
  if (str == "") {
    document.getElementById("no_selectciudad").innerHTML = "";
    return;
  }
  else if(str == "IGU"){
    document.getElementById("igualada").innerHTML;
  }
  else if(str == "LLE"){
    document.getElementById("lleida").innerHTML;
  }
  else if(str == "GIR"){
    document.getElementById("girona").innerHTML;
  }
}

*/ 
