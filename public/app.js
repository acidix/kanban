$( function() {
    $('#refresh').on('click', function (e) {
         window.location.href = '/refresh';
    })
    document.querySelector("#btn-Personal").onclick = hidePersonal;
})

function actOnClass(cls,func) {
  Array.prototype.forEach.call(document.querySelectorAll("."+cls), func);
}

function hidePersonal() {
  var hide = function(el){ el.style.display = "none" };
  actOnClass("Personal", hide);

  var button = document.querySelector("#btn-Personal");
  button.onclick = showPersonal;
  button.classList.remove("btn-Personal");
  button.classList.add("btn-Personal-inactive");
}
function showPersonal() {
  var hide = function(el){ el.style.display = "" };
  actOnClass("Personal", hide);

  var button = document.querySelector("#btn-Personal");
  button.onclick = hidePersonal;
  button.classList.remove("btn-Personal-inactive");
  button.classList.add("btn-Personal");
}
