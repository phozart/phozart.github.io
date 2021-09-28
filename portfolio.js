const footer = "© 2021 Peter Hardy";
var counter = "1"; 
var sum = 0;
const nav = ["Home", "About", "Projects", "Contact"];
var selectedMenuItem = "";
const imgLoc = "images/image.jpg";
const right = document.getElementById('right-column');
const left = document.getElementById('left-column');
const cards = [
    ["card Title","Card content","Cart link", "Card button"]
    ,["Moving eyes","Card content2","Cart lin2k", "Card button2"]
    ,["Bus stops","Showing bus stops on map","busProject()", "Show now!"]
    ,["JS skills review","A page full of JS functions","showProject()", "Go to page"]
];
const socialMedia = [
    ["LinkedIn", "https://www.linkedin.com/in/peter-hardy-2512175/"]
    , ["WhatsApp", "https://api.whatsapp.com/send?phone=32493630115"]
    , ["E-mail", "mailto:peter.hardy@hazerco.be"]
    , ["Github", "https://github.com/phozart"]
    , ["Facebook", "https://www.facebook.com/P3terHardy/"]
    , ["Instagram", "http://instagram.com/phozart.music"]
    
];


loadMainScreen();

function loadMainScreen()
    {
        loadHome();
        setNavBar();
        setFooter();
        
    }

function setNavBar()
    {
        let navBar = document.getElementById("header");
        navBar.className = "container rounded fixed-top text-uppercase bg-dark";
        let menuHTML = "<div class= 'position-relative w-100 text-sm-center text-center bg-dark  border-bottom rounded border-white'><h1 class='text-light'>Peter Hardy</h1>";
        menuHTML += " <p class='text-light'>A developer's portfolio </p></div>";
         menuHTML += "<nav><ul class='nav nav-pills justify-content-center bg-gradient-dark'>";
        for (i = 0; i < nav.length; i++)
        {
            let menuItem = nav[i];
                menuHTML += "<li class='nav-item'><button onclick = 'navigate(\u0022" + menuItem +"\u0022)' id=" + menuItem + 
                                    " class='nav-link text-uppercase text-light'>" + menuItem + "</button></li>";
        }
        menuHTML += "</ul></nav>"

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



function setSelectedMenuItem(menuItem)
{
   if (selectedMenuItem != "")
   {
    let elementToRemove = document.getElementById(selectedMenuItem);
    elementToRemove.classList.remove("active");
    }
    selectedMenuItem = menuItem;
    let element = document.getElementById(selectedMenuItem);
    element.classList.add("active");
    return;
    
}




function setFooter()
    {
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


    left.innerHTML += "<div id='rightText' class='bg-white'><p class='m-5 '>The homepage displays an introduction video.</p></div>";

    left.innerHTML += "<img id='portImage' onclick='flipImage()'  style= 'bottom: 0;  display:block;' width='100% height=100%' src=" + imgLoc + "></img>";

    right.innerHTML = "";
    right.innerHTML += "<div><strong>youtube video comes here</strong></div";
    if (socialMedia.length > 0)
    {
        var socials = "<div class = 'container border rounded bg-light'><div class = 'row justify-content-center'>"
        for(let i = 0; i < socialMedia.length; i++)
        {
            
            switch (socialMedia[i][0])
            {
                case "Facebook":
                    socials += "<div class='col-sm-3'><a href='" + socialMedia[i][1] + "' class='fa fa-facebook text-decoration-none' target='_blank']> </a></div>";
                break;
                case "LinkedIn":
                    socials += "<div class=' col-sm-3'><a href='" + socialMedia[i][1] + "' class='fa fa-linkedin  text-decoration-none' target='_blank'> </a></div>";
                break;
                case "Instagram":
                    socials += "<div class=' col-sm-3'><a href='" + socialMedia[i][1] + "' class='fa fa-instagram  text-decoration-none' target='_blank'> </a></div>";
                break;
                case "WhatsApp":
                    socials += "<div class=' col-sm-3'><a href='" + socialMedia[i][1] + "' class='fa fa-whatsapp  text-decoration-none' target='_blank'> </a></div>";
                break;
                case "E-mail":
                    socials += "<div class=' col-sm-3'><a href='" + socialMedia[i][1] + "' class='fa fa-envelope  text-decoration-none' target='_blank'> </a></div>";
                break;
                case "Github":
                    socials += "<div class=' col-sm-3'><a href='" + socialMedia[i][1] + "' class='fa fa-github  text-decoration-none' target='_blank'> </a></div>";
                break;
                default:
                
            }
             
        }
        socials += "</div></div>"
    }
    left.innerHTML += socials;
}

function flipImage() {
    let element = document.getElementById('portImage');
    sum += 90;
    if (sum === 360) sum = 0;
    element.style.transform = "rotate(" + sum + "deg)";
    
    
}



function loadAbout() {
    
    right.innerHTML = "";
    right.innerHTML += "<div><strong>Hi! </strong><p>My name is Peter Hardy, "
                    + calculateAge() + " years old. I live in Belgiume in a small village not far from brussels</div";
    let element = document.getElementById('rightText');
    element.innerHTML = "<p class='m-5 '>Find my short biography on this page.</p>";


}
function calculateAge(birthday) { // birthday is a date
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
    
    for (let i = 0; i < cards.length; i++)
    {
        right.innerHTML += "<div class='card position-relative' style='width: 16rem; display: inline-block;'> <div class='card-body'>"
            + "<h5 class='card-title'> " + cards[i][0] + " </h5>"
            +    "<p class='card-text'>"  + cards[i][1] + "</p>"
            + "<a onclick="+ cards[i][2] + " class='btn btn-primary stretched-link'>" + cards[i][3] + "</a></div> "
    }
    right.innerHTML += "</div>"
    let element = document.getElementById('rightText');
    element.innerHTML = "<p class='m-5 '>These are my projects, click on any of the bootstrap cards!</p>";





}
function loadContact() {
    
    right.innerHTML = "";
    //following contact form is copied from https://mdbootstrap.com/docs/b4/jquery/forms/contact/#html
    right.innerHTML += '<section class="mb-4">'
        + '<h2 class="h2-responsive font-weight-bold text-left my-4">Contact me</h2>'
        + '<div class="row"> <div class="col-md-9 mb-md-0 mb-5">'
        + '<strong>E-mail: <a href="mailto: peter.hardy@ouiqui.com"> peter.hardy@ouiqui.com</a> for any enquiries. </strong>'
        +  '</div></div></section>' ;
        let element = document.getElementById('rightText');
    element.innerHTML = "<p class='m-5 '>Send me an e-mail if you want to find out more!</p>";


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
    [-71.118625, 42.374863]
  ];
  var counterB = 0;
function busProject() {
    right.innerHTML = "";
    right.innerHTML = "<div class='justify-content-center'><h2>Bus stop exercise</h2><div><div class='row'>";
    right.innerHTML += "<div class='col-sm-8 positio-relative'>This project is showing the bus stops between MIT and Harvard. "
    right.innerHTML += "<a href='https://github.com/phozart/BusStops' class='btn btn-primary position-relative' target='_blank'>Go to GITHUB </a></div>"    ;
    right.innerHTML += "<div id='map' class = 'col-sm-4 justify-content-center position-relative'> </div></div>";
    let element = document.getElementById('rightText');
    element.innerHTML = "<p class='m-5 '>You are looking at the bus project now, <a onclick='loadProjects()' class='btn btn-primary'>click here</a> to go back to the projects page</p>";
    mapboxgl.accessToken = 'pk.eyJ1IjoicGhvemFydCIsImEiOiJja3RsaGY1dGwxdm1yMnpxbnlsMXdzbHdvIn0.hZDbJK32w1AJsD9scMci5A';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.104081, 42.365554],
      zoom: 13,
    });
move();
      
        marker.setLngLat([-71.092761, 42.357575])
        marker.addTo(map);
}
// This array contains the coordinates for all bus stops between MIT and Harvard


var b = 0
      
function move() {
    setTimeout(() => {
       
        if (counterB >= busStops.length-1) b = 1;
        if (counterB === 0) b=0;
        marker.setLngLat(busStops[counterB]);
        if(b===0) counterB++;
        if(b===1) counterB--;
        
        move();
       
      }, 500);
  }
  
  function showProject() {
    right.innerHTML = "";
    right.innerHTML = "<div class='justify-content-center'><h2>A page showing JS functions and exercises</h2><div><div class='row'>";
    right.innerHTML += "<div id='head' class='col col-sm-8 position-relative' > </div><div id='output' class='position-sticky mt-1'></div><div id = 'comment' class='position-sticky'> </div></div>";
    let element = document.getElementById('rightText');
    element.innerHTML = "<p class='m-5 '>You are looking at a project that I made to show JS functions. <a onclick='loadProjects()' class='btn btn-info'>Click here</a> to go back to the projects page</p>";
    starter();
  }
  

  
