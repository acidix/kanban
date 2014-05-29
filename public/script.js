function actOnClass(cls,func) {
  Array.prototype.forEach.call(document.querySelectorAll("."+cls), func);
}

function hideInactive() {
  var hide = function(el){ el.style.display = "none" };
  actOnClass("deferred", hide);
  actOnClass("waiting-on", hide);
  actOnClass("hanging", hide);
  actOnClass("hideable", hide);

  var button = document.querySelector(".toggle-hanging");
  button.classList.remove("typcn-folder-delete");
  button.classList.add("typcn-folder-add");
  button.onclick = showInactive;
}

function showInactive() {
  var show = function(el){  el.style.display = "" };
  actOnClass("deferred", show);
  actOnClass("waiting-on", show);
  actOnClass("hanging", show);
  actOnClass("hideable", show);

  var button = document.querySelector(".toggle-hanging");
  button.classList.remove("typcn-folder-add");
  button.classList.add("typcn-folder-delete");
  button.onclick = hideInactive;
}
// Personal
function hidePersonal() {
  var hide = function(el){ el.style.display = "none" };
  actOnClass("P", hide);

  var button = document.querySelector(".toggle-personal");
  button.onclick = showPersonal;
  button.classList.remove("toggle-on");
  button.classList.add("toggle");
}
function showPersonal() {
  var hide = function(el){ el.style.display = "" };
  actOnClass("P", hide);

  var button = document.querySelector(".toggle-personal");
  button.onclick = hidePersonal;
  button.classList.remove("toggle");
  button.classList.add("toggle-on");
}
//SAP
function hideSAP() {
  var hide = function(el){ el.style.display = "none" };
  actOnClass("S", hide);

  var button = document.querySelector(".toggle-sap");
  button.onclick = showSAP;
  button.classList.remove("toggle-on");
  button.classList.add("toggle");
}
function showSAP() {
  var hide = function(el){ el.style.display = "" };
  actOnClass("S", hide);

  var button = document.querySelector(".toggle-sap");
  button.onclick = hideSAP;
  button.classList.remove("toggle");
  button.classList.add("toggle-on");
}
//HPI
function hideHPI() {
  var hide = function(el){ el.style.display = "none" };
  actOnClass("H", hide);

  var button = document.querySelector(".toggle-hpi");
  button.onclick = showHPI;
  button.classList.remove("toggle-on");
  button.classList.add("toggle");
}
function showHPI() {
  var hide = function(el){ el.style.display = "" };
  actOnClass("H", hide);

  var button = document.querySelector(".toggle-hpi");
  button.onclick = hideHPI;
  button.classList.remove("toggle");
  button.classList.add("toggle-on");
}

document.addEventListener("DOMContentLoaded", function(){
  document.querySelector(".toggle-hanging").onclick = hideInactive;
  document.querySelector(".toggle-personal").onclick = hidePersonal;
  document.querySelector(".toggle-hpi").onclick = hideHPI;
  document.querySelector(".toggle-sap").onclick = hideSAP;
})
