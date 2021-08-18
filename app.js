/* 
This APP shows capabilities to:
- String manipulations 
- use of let, var and const
- Array manipulations (filter, Length)
- Use of objects

- Create CSS drawings and modify drawings in Javascript
- Move images on screen



*/

// Define defaults
const divOutput = document.getElementById('output');
const divHeader = document.getElementById('head');
const comment = document.getElementById('comment');
const outputFrame = document.getElementById('outputFrame');
let ouLeft = window.getComputedStyle(divOutput,null).getPropertyValue('left');
let ouTop = window.getComputedStyle(divOutput,null).getPropertyValue('top');
let ouWidth = window.getComputedStyle(divOutput,null).getPropertyValue('width');
let ouHeight = window.getComputedStyle(divOutput,null).getPropertyValue('height');
const maxX = 575; //Number(ouLeft.replace(/[a-z]/g, '')) + Number(ouWidth.replace(/[a-z]/g, ''));
const maxY = 375; //Number(ouTop.replace(/[a-z]/g, '')) + Number(ouHeight.replace(/[a-z]/g, ''));
const minX = 0 ;//Number(ouLeft.replace(/[a-z]/g, ''));
const minY = 0 ;//Number(ouHeight.replace(/[a-z]/g, ''));
var balls = [];
var balltimer;
var b = false;
var arrSim = {};
var arrCom = {};
var tim;
setDefault();
loadHeaderButtons();
var comm = false;



function loadHeaderButtons()
{
    divHeader.innerHTML += '<button onclick="enterStringOnWebpage()">Single String</button> ';
    divHeader.innerHTML += '<button onclick="enterSentenceOnWebpage()">Sentence</button> ';
    divHeader.innerHTML += '<button onclick="putStringValuesInArray()">Split Sentence</button> ';
    divHeader.innerHTML += '<button onclick="putParagraphValuesInArrayAndSort()">Get word Count from paragraph</button> ';
    divHeader.innerHTML += '<button onclick="arraySplice()">Splice Array</button> <br><br>';   
    divHeader.innerHTML += '<button onclick="arraySlice()">Slice Array</button> ';
    divHeader.innerHTML += '<button onclick="arrayPop()">Pop Array</button> ';
    divHeader.innerHTML += '<button onclick="arrayPush()">Push Array</button> ';
    divHeader.innerHTML += '<button onclick="arrayShift()">Shift Array</button> ';
    divHeader.innerHTML += '<button onclick="arrayUnshift()">Unshift Array</button> ';
    divHeader.innerHTML += '<button onclick="getFilteredArray()">Filter Array</button> <br></br>';
    divHeader.innerHTML += '<button onclick="createBall()">Create A ball</button> ';
    divHeader.innerHTML += '<button onclick="updateBalls()">Move that balls</button> ';
    divHeader.innerHTML += '<button onclick="ballFactory()">Create more balls</button> ';
    let timTest ;
    timtest = setTimeout(()=> divHeader.innerHTML += '<button onclick="timeout()">TIME OUT!</button> <button onclick="setDefault()">  Clear </button>',5000);
    

}

function createBall()
{
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
   
        ball = document.createElement("div");
        ball.style.backgroundColor = randomColor;
        ball.className = "ball";
        ball.style.top = (maxY + 100) ;
        ball.style.left =  maxX + 20;
        balls.push(ball);
        divOutput.appendChild(ball);
    setComment('This function creates a ball in the output box on a fixed location.');



}
function getRandom(step, type) {
  let min = 0;
  let max = 0;

    if (type === 'x') {
        min = Math.ceil(minX);
        max = Math.floor(maxX);
       
    }
        
    if (type === 'y') 
    {
        min = Math.ceil(minY);
        max = Math.floor(maxY);
    }

  return Math.floor(Math.random() * (max - min) + min);
  }
function updateBalls() {
    
    let step = 2;
    
    for (let i = 0; i < balls.length; i++) {
        balls[i].style.left = getRandom(step,'x') +'px';
        balls[i].style.top = getRandom(step,'y') +'px';
    }
    
   balltimer =  setTimeout(updateBalls, 100); 
 //  setComment('This function updates the ball(s) location in the output box randomly.');
  }

  function ballFactory()
  {
     
    var nob = prompt("Please enter a number between 0 and 100 to create this amount of balls.", "Enter a number!");
   if (nob <= 100 && nob >=0 ){
    for (let i=0; i < nob; i++)
    {
        createBall();
    }
    }
    else
    {
        
        divOutput.innerHTML = ('Please select a number from 0-100')
    }
    setComment('This function creates the amount of balls entered in the output box and will start updating locations.');
 
  }

function createArray(type)
{
    if (type === 1) return  ['Apple', 'Banana','Pineapple'];
    if (type === 2) return {userID: 1, username: 'Peter', role: 'Admin'};
    if (type === 3) return  artists.data; 
}

function arraySplice()
{
    let arr = createArray(1);
    let orig = "";
    arr.forEach( item => orig += item + ' ');
    let someText = "This is the original array: <b>" + orig + "</b></BR></BR> This is the modified array, item 2 is removed and replaced by 2 other fruits: ";
    arr.splice(1,1,"blueberry","kiwi");
    let modif = '';
    arr.forEach(item => {modif += item + ' '; } );
    divOutput.innerHTML = someText + modif;
    setComment('This function is using the splice function to remove the item with index 1 (position 2 = Banana) and adds 2 new fruits');

}

function arraySlice() {
    let arr = createArray(1);
    let orig = "";
    arr.forEach( item => orig += item + ' ');
    let someText = "This is the original array: <b>" + orig + "</b></BR></BR> This is the modified array, only part of the array is displayed ";
    
    let modif = arr.slice(1,3);;
    
    divOutput.innerHTML = someText + modif;
    setComment('This function is using the slice function display a defined part of the array');


}
function arrayPop() {
    let arr = createArray(1);
    let orig = "";
    arr.forEach( item => orig += item + ' ');
    let someText = "This is the original array: <b>" + orig + "</b></BR></BR> This is the modified array: ";
    
    let modif = '';
    arr.pop();
    arr.forEach(item => {modif += item + ' '; } );
    divOutput.innerHTML = someText + modif;
    setComment('This function is using the pop function to remove the last item in the array');


}

function arrayPush() {
    let arr = createArray(1);
    let orig = "";
    arr.forEach( item => orig += item + ' ');
    let someText = "This is the original array: <b>" + orig + "</b></BR></BR> This is the modified array: ";
    
    let modif = '';
    arr.push('the added option');
    arr.forEach(item => {modif += item + ' '; } );
    divOutput.innerHTML = someText + modif;
    setComment('This function is using the push function to add to the end of the array an item');


}
function arrayShift() {
    let arr = createArray(1);
    let orig = "";
    arr.forEach( item => orig += item + ' ');
    let someText = "This is the original array: <b>" + orig + "</b></BR></BR> This is the modified array: ";
    
    let modif = '';
    arr.shift();
    arr.forEach(item => {modif += item + ' '; } );
    divOutput.innerHTML = someText + modif;
    setComment('This function is using the shift function to remove the first item from the array');

}
function arrayUnshift() {
    let arr = createArray(1);
    let orig = "";
    arr.forEach( item => orig += item + ' ');
    let someText = "This is the original array: <b>" + orig + "</b></BR></BR> This is the modified array: ";
    
    let modif = '';
    arr.unshift('the added option');
    arr.forEach(item => {modif += item + ' '; } );
    divOutput.innerHTML = someText + modif;
    setComment('This function is using the unshift function to add a new first item to the array');


}

function getFilteredArray() {
    let arr = createArray(3);
    let orig = "";
    arr.forEach( item => orig += item + ' ');
    let someText = "This is the filtered array: ";
    
    let modif = '';
    let arrF = arr.filter( (artist) => artist[2] >= 1000000);
    arrF.forEach(item => {modif += item + ' '; } );
    divOutput.innerHTML = someText + modif;
    setComment('This function is using the filter function to filter out artists that made > 1M (dummy data) from a js datafile');


}

function setDefault() {    
    if (b === false) comment.innerHTML = 'Select a button. The timer and clear button will appear after 5 seconds.';
    else  comment.innerHTML = 'Select a button.';
    b = true;
    divOutput.innerHTML = "";
    clearInterval(tim);
    clearTimeout(balltimer);

}

function createString(type)
{
    // function that shows the use of a SWITCH
    switch (type){
    case  'singleWord':
        return 'AppleJuice';
        break;
    case 'singleSentence' :
        return "This is a sentence.";
        break;
    case 'paragraph' :
        return "This is a sentence and there is a lot, of infomration. in this sentence. We will find out what the most used word is in this sentence by counting the words in a split array.";
        break;
    default:
        return null;
    }
}




function clearOutput(){
    divOutput.innerHTML = "";
    setDefault();
    
}

function enterStringOnWebpage()
{
    divOutput.innerHTML = ("<p>" + createString('singleWord') + "</p>");
    setComment('This function displays a simple string in a paragraph.');
   
}
function enterSentenceOnWebpage()
{
    divOutput.innerHTML = ("<p>" + createString('singleSentence') + "</p>");
    setComment('This function displays a sentence string in a paragraph.');
   
}

function timeout()
{
    clearOutput();
    tim = setInterval(function startTimer () {divOutput.innerHTML += "<p> I will never stop running unless you press the clear button!</p>";},1000);
    setComment('This function displays a sentence continuously every second until clear is pressed.');
   
}

function putStringValuesInArray() {
    
    let orig = createString('singleSentence')
    let someText = "This is the original sentence: <b>" + orig + "</b></BR></BR> This is the modified sentence: ";
    let html = "";
    orig = orig.replace(".","");
    let arrVal = orig.split(" ");
    
    arrVal.forEach(item =>   html += '<li>' + item + '</li>');
    divOutput.innerHTML = (someText + "<ul>" + html+ "</ul>");
    setComment('This function is splitting a sentence in a paragraph, removes the dot and places the items in the array in an unordered list.');
}
function putParagraphValuesInArrayAndSort() {
    
    let orig = createString('paragraph')
    let someText = "This is the original sentence: <b>" + orig + "</b></BR></BR> This is the modified sentence: ";
    let html = "";
    orig = orig.replace(/\./g,"");
    orig = orig.replace(",","");
    orig = orig.toLowerCase();

    let arrVal = orig.split(" ");
    
    let wordCount = {};
    arrVal.forEach((item) => {
        if (wordCount[item] == null) wordCount[item] = 1;
        else  wordCount[item] += 1;

      });

    let barrVal = Object.entries(wordCount);
    barrVal.sort( (a,b)=>  {return b[1]-a[1];}
    );
    
    barrVal.forEach(item =>   html += '<li>' + item[0] + ':' + item[1] + '</li>');
    divOutput.innerHTML = (someText + "<ol>" + html+ "</ol>");
    setComment('This function is splitting a sentence in a paragraph, removes the dot and comma, counts the times the words are present, sorts the list with highest number descending, places the items in the array in an ordered list.');
}

function setComment(text) {

    comment.innerHTML = " " + text;
}