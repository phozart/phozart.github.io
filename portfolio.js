const footer = "© 2021 Peter Hardy";
const nav = ["Home", "About", "Projects", "Contact"];
var selectedMenuItem = "";
const imgLoc = "images/image.jpg";
var right = document.getElementById('right-column');
var left = document.getElementById('left-column');
const cards = [
    ["card Title","Card content","Cart link", "Card button"]
    ,["Moving eyes","Card content2","Cart lin2k", "Card button2"]
    ,["card Title2","Card content2","Cart lin2k", "Card button2"]
    ,["Phozart DJ","Wordpress site by Peter hardy","http://www.phozart.net", "Go to website"]
    ,["JS skills review","A page full of JS functions","myhomepage.html", "Go to page"]
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
        let menuHTML = "<nav><ul class='nav nav-pills'>";
        for (i = 0; i < nav.length; i++)
        {
            let menuItem = nav[i];
                menuHTML += "<li class='nav-item'><button onclick = 'navigate(\u0022" + menuItem +"\u0022)' id=" + menuItem + 
                                    " class='nav-link text-uppercase text-light'>" + menuItem + "</button></li>";
                                    console.log(menuItem);
        }
        menuHTML += "</ul></nav>";
        console.log(nav[0]);
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
    left.innerHTML += "<h1 class='text-center m-5'>Peter Hardy</h1>";
    left.innerHTML += "<div id = 'removingText'><strong class='text-center '>A developer's portfolio</strong></div>";

    left.innerHTML += "<img style= 'bottom: 0;  display:block;' width='100% height=100%' src=" + imgLoc + "></img>";

    right.innerHTML = "";
    right.innerHTML += "<div><strong>youtube video comes here</strong></div";
    var element = document.getElementById('removingText');
    setInterval(removeThatText(element),1000);

}
var counter = 0;
function removeThatText(element){
    var cur_left=parseFloat(element.style.left);
    
    element.style.top = (cur_left+10)+"px";
    console.log(element.style.top)
    counter++;
  // if (counter===50) clearTimeout();
    


}

function loadAbout() {
    
    right.innerHTML = "";
    right.innerHTML += "<div><strong>Hi! </strong><p>My name is Peter Hardy, I live in Belgiume in a small village not far from brussels</div";


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
            + "<a href="+ cards[i][2] + " target = '_blank' class='btn btn-primary stretched-link'>" + cards[i][3] + "</a></div> "
    }
    right.innerHTML += "</div>"





}
function loadContact() {
    
    right.innerHTML = "";
    right.innerHTML += "<div>Contact form come here</div";
    //following contact form is copied from https://mdbootstrap.com/docs/b4/jquery/forms/contact/#html
    right.innerHTML += '<section class="mb-4">'
        + '<h2 class="h1-responsive font-weight-bold text-center my-4">Contact me</h2>'
        + '<div class="row"> <div class="col-md-9 mb-md-0 mb-5">'
        +  '<form id="contact-form" name="contact-form" action="mail.php" method="POST">'
        +  '<div class="row"><div class="col-md-6"><div class="md-form mb-0">'
        +  '<input type="text" id="name" name="name" class="form-control">'
        +  '<label for="name" class="">Your name</label></div>'
        +  '</div><div class="col-md-6"><div class="md-form mb-0">'
        +   '<input type="text" id="email" name="email" class="form-control">'
        +   '<label for="email" class="">Your email</label></div></div></div>'
        +   '<div class="row"><div class="col-md-12"><div class="md-form mb-0">'
        +  '<input type="text" id="subject" name="subject" class="form-control">'
        +   '<label for="subject" class="">Subject</label></div></div></div>'
        +  '<div class="row"><div class="col-md-12"><div class="md-form">'
        +  '<textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>'
        +  '<label for="message">Your message</label> </div></div></div></form>'
        +  '<div class="text-center text-md-left">'
        +  '<a class="btn btn-primary" onclick="document.getElementById(&apos;contact-form&apos;).submit();">Send</a>'
        +  '</div><div class="status"></div> </div><div class="col-md-3 text-center">'
        +  '<ul class="list-unstyled mb-0"><li><i class="fas fa-map-marker-alt fa-2x"></i><p>Belgium</p></li>'
        +  '<li><i class="fas fa-phone mt-4 fa-2x"></i><p>+ 32 493 63 01 15</p></li>'
        +  '<li><i class="fas fa-envelope mt-4 fa-2x"></i><p>peter.hardy@ouiquic.com</p></li></ul></div></div></section></div>'


}