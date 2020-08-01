window.onscroll = function() {myMenuFunction()};

var menubar = document.getElementById("menubar");
var stickymenu = menubar.offsetTop;

function myMenuFunction() {
  if (window.pageYOffset >= stickymenu) {
    menubar.classList.add("stickymenu");
  } else {
    menubar.classList.remove("stickymenu");
  }
}

function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function openCity(evt, cityName, id, tab) {
  var i, x, tablinks, tabid;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  if (tab == "tab") { // call from tab, not from other link
    if (evt == "click") {tablinks[0].className += " w3-red";} 
	else {evt.currentTarget.className += " w3-red";}
  }
  // for call from other button on the page
  tabid = document.getElementById(id);
  if (tabid.className.indexOf("w3-red") == -1) {tabid.className += " w3-red";}
}

function showAnswer(id, displayTxt) {
  var x = document.getElementById(id);
  if (x.innerHTML === "") {
	 x.innerHTML = displayTxt;
  } else {
	 x.innerHTML = "";
  }
}

function showObserve(id, displayColor) {
  var match = document.getElementsByClassName(id);
  for (var i=0; i < match.length; i++) {
	if (match[i].style.color === displayColor) {
		match[i].style.color = "black";
		match[i].style.border = "none";
	} else {
		match[i].style.color = displayColor;
		match[i].style.border = "thick solid gray";
	}
  }
}

function clearObserve(id) {
  var match = document.getElementsByClassName(id);
  for (var i=0; i < match.length; i++) {
    match[i].style.color = "black";
	match[i].style.border = "none";
  }
}

function showHighlight(id, displayColor) {
  var marker = document.getElementById(id);
  if (marker.className.indexOf("w3-") == -1) {
	marker.className += " w3-" + displayColor;
  } else {
    marker.className = "";
  }
}

function clearAnswer(id) {
  var x = document.getElementById(id);
  x.innerHTML = "";
}
