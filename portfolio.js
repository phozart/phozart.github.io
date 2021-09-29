const footer = "© 2021 Peter Hardy";
var counter = "1";
var sum = 0;
const nav = ["Home", "About", "Projects", "Contact"];
var selectedMenuItem = "";
const imgLoc = "images/image.jpg";
const right = document.getElementById("right-column");
const left = document.getElementById("left-column");
const cards = [
  ["PacMen", "A PacMen exercise!", "loadPacMen()", " Show now!"],
  ["Moving eyes", "These eyes are following you!", "movingEyes()", "Show now!"],
  ["Bus stops", "Showing bus stops on map", "busProject()", "Show now!"],
  [
    "JS skills review",
    "A page full of JS functions",
    "showProject()",
    "Go to page",
  ],
  [
    "Use of grids",
    "Displays a grid within the page",
    "loadGridProject(20)",
    "Show now!",
  ],
];
const socialMedia = [
  ["LinkedIn", "https://www.linkedin.com/in/peter-hardy-2512175/"],
  ["WhatsApp", "https://api.whatsapp.com/send?phone=32493630115"],
  ["E-mail", "mailto:peter.hardy@hazerco.be"],
  ["Github", "https://github.com/phozart"],
  ["Facebook", "https://www.facebook.com/P3terHardy/"],
  ["Instagram", "http://instagram.com/phozart.music"],
];

loadMainScreen();

function loadMainScreen() {
  loadHome();
  setNavBar();
  setFooter();
}

function setNavBar() {
  let navBar = document.getElementById("header");
  navBar.className = "container rounded fixed-top text-uppercase bg-dark ";
  let menuHTML =
    "<div class= 'position-relative w-100 text-sm-center text-center bg-dark  border-bottom rounded border-white'><h1 class='text-light'>Peter Hardy</h1>";
  menuHTML += " <p class='text-light'>A developer's portfolio </p></div>";
  menuHTML +=
    "<nav><ul class='nav nav-pills justify-content-center  bg-gradient-dark'>";
  for (i = 0; i < nav.length; i++) {
    let menuItem = nav[i];
    menuHTML +=
      "<li class='nav-item'><button onclick = 'navigate(\u0022" +
      menuItem +
      "\u0022)' id=" +
      menuItem +
      " class='nav-link text-uppercase text-light'>" +
      menuItem +
      "</button></li>";
  }
  menuHTML += "</ul></nav>";

  navBar.innerHTML += menuHTML;
  setSelectedMenuItem(nav[0]);
  return;
}
function navigate(tab) {
  setSelectedMenuItem(tab);
  switch (tab) {
    case "Home":
      loadHome();
      break;
    case "About":
      loadAbout();
      break;
    case "Projects":
      loadProjects();
      break;
    case "Contact":
      loadContact();
      break;
    default:
      loadHome();
  }
}

function setSelectedMenuItem(menuItem) {
  if (selectedMenuItem != "") {
    let elementToRemove = document.getElementById(selectedMenuItem);
    elementToRemove.classList.remove("active");
  }
  selectedMenuItem = menuItem;
  let element = document.getElementById(selectedMenuItem);
  element.classList.add("active");
  return;
}

function setFooter() {
  let footerDiv = document.getElementById("footer");
  footerDiv.className = "text-lg-start bg-dark text-muted  fixed-bottom ";
  footerDiv.innerHTML = "<p class='text-center mt-2'>" + footer + "</p>";
  return;
}

// This section describes the "Main" div content
//========================================

function loadHome() {
  left.innerHTML = "";
  // left.innerHTML += "<h1 class='text-center m-5'>Peter Hardy</h1>";

  left.innerHTML +=
    "<div id='rightText' class='bg-white' style='border-radius:50px;'><p class='m-4 '>This box guides you through the portfolio site. This page displays an introduction video.</p></div>";

  left.innerHTML +=
    "<img id='portImage' onclick='flipImage()' class='border  border-light' style= 'bottom: 0;  display:block;' width='100% height=100%' src=" +
    imgLoc +
    "></img>";

  right.innerHTML = "";
  right.innerHTML +=
    '<div class="row justify-content-center d-flex"> <h1>Introduction page</h1></div><div class="row"><div class="d-flex justify-content-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/ICS5iEYFaN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>';
  if (socialMedia.length > 0) {
    var socials =
      "<div class = 'container border rounded bg-light'><div class = 'row justify-content-center'>";
    for (let i = 0; i < socialMedia.length; i++) {
      switch (socialMedia[i][0]) {
        case "Facebook":
          socials +=
            "<div class='col-sm-3'><a href='" +
            socialMedia[i][1] +
            "' class='fa fa-facebook text-decoration-none' target='_blank']> </a></div>";
          break;
        case "LinkedIn":
          socials +=
            "<div class=' col-sm-3'><a href='" +
            socialMedia[i][1] +
            "' class='fa fa-linkedin  text-decoration-none' target='_blank'> </a></div>";
          break;
        case "Instagram":
          socials +=
            "<div class=' col-sm-3'><a href='" +
            socialMedia[i][1] +
            "' class='fa fa-instagram  text-decoration-none' target='_blank'> </a></div>";
          break;
        case "WhatsApp":
          socials +=
            "<div class=' col-sm-3'><a href='" +
            socialMedia[i][1] +
            "' class='fa fa-whatsapp  text-decoration-none' target='_blank'> </a></div>";
          break;
        case "E-mail":
          socials +=
            "<div class=' col-sm-3'><a href='" +
            socialMedia[i][1] +
            "' class='fa fa-envelope  text-decoration-none' target='_blank'> </a></div>";
          break;
        case "Github":
          socials +=
            "<div class=' col-sm-3'><a href='" +
            socialMedia[i][1] +
            "' class='fa fa-github  text-decoration-none' target='_blank'> </a></div>";
          break;
        default:
      }
    }
    socials += "</div></div>";
  }
  left.innerHTML += socials;
}

function flipImage() {
  let element = document.getElementById("portImage");
  sum += 180;
  if (sum === 360) sum = 0;
  element.style.transform = "rotate(" + sum + "deg)";
}

function loadAbout() {
  right.innerHTML = "";
  right.innerHTML +=
    "<div><strong>Hi! Welcome to my portfolio page.</strong> <p>I’m Peter Hardy, " +
    calculateAge() +
    " years old and I’m from Belgium, married and have 2 kids. " +
    "I built this portfolio as an assignment for the MIT x-pro Full stack developer course.</p>" +
    "<p>Throughout my career I’ve been working for several IT companies in logistics, support analysis, incident management as well as team management in Belgium and abroad.</p>" +
    "<p>Since 2014 I’m a small business owner, providing consultancy services in IT management and business analysis. Beside these core business activities I’m a photographer, Dj and music producer. In my little free time I’m an amateur astronomer. " +
    "And on top of these activities I’m continuously studying to gain new knowledge.</p>" +
    "<p>Some of the key skills I've developed and used over the past years are SQL query writing, object oriented thinking, service management and agile project management to name just a few.</p>" +
    "<p>This is the key information about me, if you want to learn more, you can check my socials listed on this page, send me an e-mail or sent me a direct message on whatsapp.</p><p>Thank you for visiting this page!</p><p>P.S. If you watched the video, to find the answer to the final question, click my image.</p>" +
    "<p>Visit my <a href='https://github.com/phozart' target='_blank' >GITHUB (username: phozart)</a> to find out more about the projects. </p><p>visit my <a href='https://www.linkedin.com/in/peter-hardy-2512175' target='_blank' > Linked in page </a>to find more information about my work experiences</p></div> ";

  let element = document.getElementById("rightText");
  element.innerHTML =
    "<p class='m-5 '>Find my short biography on this page.</p>";
}
function calculateAge(birthday) {
  // birthday is a date
  var bd = new Date("06/16/1986");
  var monthDiff = Date.now() - bd.getTime();
  var ageDt = new Date(monthDiff);
  var year = ageDt.getUTCFullYear();
  var age = Math.abs(year - 1970);
  return age;
}

function loadProjects() {
  right.innerHTML = "";
  right.innerHTML += "<div class = 'container'><h2>Portfolio projects<h2></div";
  right.innerHTML += '<div class= "card-group" style= "display: flex;" >';

  for (let i = 0; i < cards.length; i++) {
    right.innerHTML +=
      "<div class='card position-relative' style='width: 16rem; display: inline-block;'> <div class='card-body'>" +
      "<h5 class='card-title'> " +
      cards[i][0] +
      " </h5>" +
      "<p class='card-text'>" +
      cards[i][1] +
      "</p>" +
      "<a onclick=" +
      cards[i][2] +
      " class='btn btn-primary stretched-link'>" +
      cards[i][3] +
      "</a></div> ";
  }
  right.innerHTML += "</div>";
  let element = document.getElementById("rightText");
  element.innerHTML =
    "<p class='m-5 '>These are my projects, click on any of the bootstrap cards!</p>";
}
function loadContact() {
  right.innerHTML = "";
  //following contact form is copied from https://mdbootstrap.com/docs/b4/jquery/forms/contact/#html
  right.innerHTML +=
    '<section class="mb-4">' +
    '<h2 class="h2-responsive font-weight-bold text-left my-4">Contact</h2>' +
    '<div class="row"> <div class="col-md-9 mb-md-0 mb-5">' +
    '<strong>E-mail: <a href="mailto: peter.hardy@hazerco.be"> peter.hardy@hazerco.be</a> for any enquiries. </strong>' +
    '</div><div class="col-md-9 mb-md-0 mb-5">To find out more about my work experiences, please visit my Linked-In page.</div></div></section>';
  let element = document.getElementById("rightText");
  element.innerHTML =
    "<p class='m-5 '>Send me an e-mail if you want to find out more!</p>";
}
var marker = new mapboxgl.Marker();
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];
var counterB = 0;
function busProject() {
  right.innerHTML = "";
  right.innerHTML =
    "<div class='justify-content-center'><h2>Bus stop exercise</h2><div><div class='row'>";
  right.innerHTML +=
    "<div class='col-sm-8 positio-relative'>This project is showing a map with a moving marker. Each marker that appears is a different bus stop between MIT and Harvard. Once it arrives at destination, it will turn around in the other direction. ";
  right.innerHTML += "</div>";
  right.innerHTML +=
    "<div id='map' class = 'col-sm-4 justify-content-center position-relative'> </div></div>";
  let element = document.getElementById("rightText");
  element.innerHTML =
    "<p class='m-5 '>You are looking at the bus project now, <a onclick='loadProjects()' class='btn btn-info'>click here</a> to go back to the projects page or <a href='https://github.com/phozart/BusStops' class='btn position-sticky bg-success' target='_blank'>Go to GITHUB </a></p>";

  mapboxgl.accessToken =
    "pk.eyJ1IjoicGhvemFydCIsImEiOiJja3RsaGY1dGwxdm1yMnpxbnlsMXdzbHdvIn0.hZDbJK32w1AJsD9scMci5A";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-71.104081, 42.365554],
    zoom: 13,
  });
  move();

  marker.setLngLat([-71.092761, 42.357575]);
  marker.addTo(map);
}
// This array contains the coordinates for all bus stops between MIT and Harvard

var b = 0;

function move() {
  setTimeout(() => {
    if (counterB >= busStops.length - 1) b = 1;
    if (counterB === 0) b = 0;
    marker.setLngLat(busStops[counterB]);
    if (b === 0) counterB++;
    if (b === 1) counterB--;

    move();
  }, 500);
}

function showProject() {
  right.innerHTML = "";
  right.innerHTML =
    "<div class='justify-content-center'><h2>A page showing JS functions and exercises</h2><div><p>This page displays different buttons, each representing a different Javascript function. Try them all out!</p><div class='row'>";
  right.innerHTML +=
    "<div id='head' class='col col-sm-8 position-relative' > </div><div id='output' class='position-sticky mt-1'></div><div id = 'comment' class='position-sticky'> </div></div>";
  let element = document.getElementById("rightText");
  element.innerHTML =
    "<p class='m-5 '>You are looking at a project that I made to show JS functions. <a onclick='loadProjects()' class='btn btn-info'>Click here</a> to go back to the projects pageor <a href='https://github.com/phozart/jshowproject' class='btn position-sticky bg-success' target='_blank'>Go to GITHUB </a></p>";
  starter();
}

function movingEyes() {
  right.innerHTML = "";
  right.innerHTML =
    "<div class='justify-content-center'><h2>Moving eyes! </h2><p>Move your cursor around the eyes to make it move. the eye will follow the direction of the cursor.</p><div>";

  right.innerHTML +=
    '<div class="eyes"><div class="eye"><div class="ballE"></div></div><div class="eye">' +
    '<div class="ballE"></div></div></div>';
  moveTheEyes();
  let element = document.getElementById("rightText");
  element.innerHTML =
    "<p class='m-5 '>This is an MIT project that we had to finalise. <a onclick='loadProjects()' class='btn btn-info'>Click here</a> to go back to the projects page or <a href='https://github.com/phozart/movingEyes' class='btn position-sticky bg-success' target='_blank'>Go to GITHUB </a></p>";
}
function moveTheEyes() {
  var ballsE = document.getElementsByClassName("ballE");
  
  document.onmousemove = () => {
    var x = (event.clientX * 100) / window.innerWidth + "%";
    var y = (event.clientY * 100) / window.innerHeight + "%";
    
    for (let i = 0; i < 2; i++) {
      ballsE[i].style.left = x;
      ballsE[i].style.top = y;
      ballsE[i].transfoorm = "translate(-" + x + ",-" + y + ")";
      }
    
  };
  
}

function loadPacMen() {
  right.innerHTML = "";
  right.innerHTML =
    "<div class='justify-content-center'><h2>This project lets Pacman move!</h2>";

  right.innerHTML +=
    "<p>Press the buttons within the innerframe to create a new pacman. You can create multiple pacmen if you like. This project is using an iframe to not interfere with the portfolio content</p>" +
    "<iframe class='embed-responsive-item' style='height:300px;width=400px;' src='pac.html'></iframe><div>";
  let element = document.getElementById("rightText");
  element.innerHTML =
    "<p class='m-5 '>Running Pacmen, catch him if you can <a onclick='loadProjects()' class='btn btn-info'>Click here</a> to go back to the projects page or <a href='https://github.com/phozart/pacmen-exercise' class='btn position-sticky bg-success' target='_blank'>Go to GITHUB </a></p>";
}

function loadGridProject(gridsize) {
  right.innerHTML = "";
  right.innerHTML =
    "<h1> Grid project</h1><p>This project displays the use of grids on a page. it dynamically creates the number of divs provided as an arguement when the function is called.</p><main class='grid-content' id='target'> </main>";

  let pos = 1;

  const main = document.getElementById("target");
  for (let i = 1; i <= gridsize; i++) {
    var div = document.createElement("div");
    div.innerText = i;
    div.className = "grid-div";
    main.appendChild(div);
  }
  let element = document.getElementById("rightText");
  element.innerHTML =
    "<p class='m-5 '>This project is showing a grid of divs. <a onclick='loadProjects()' class='btn btn-info'>Click here</a> to go back to the projects page or <a href='https://github.com/phozart/gridexercise' class='btn position-sticky bg-success' target='_blank'>Go to GITHUB </a></p>";
}
