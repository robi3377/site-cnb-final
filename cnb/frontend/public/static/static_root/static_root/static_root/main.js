let slide = document.querySelector("#slide");
let btnRight = document.querySelector("#btn-right");
let btnLeft = document.querySelector("#btn-left");
let k = 1;
let topOffset = window.pageYOffset
let width = screen.width
let contor = 1;
let isDesktop;
let isButtons = true;
let timer = 5000;

window.addEventListener('DOMContentLoaded', function() {});
///////////////////////////////////INDEX/////////////////////////////////////////////////
if (window.location.pathname=='/concursuri_de_angajare' || window.location.pathname=='/' || window.location.pathname=='/public/index.html' || window.location.pathname=='/public/anunturi.html' || window.location.pathname=='/anunturi' || window.location.pathname=='/istoric' || window.location.pathname=='/istoric.html') { // "/public/index.html" trebuie folosit numai pe proiectul local
    numberOfSlides = document.querySelector("#slideShow").children.length

    for( let i = 1 ; i < numberOfSlides; i++){
        if(window.location.pathname=='/istoric' || window.location.pathname=='/public/istoric.html'){

        }else{
            document.querySelector("#slideShowButtons").innerHTML += " <button onclick=slideShow("+ i +")><svg id='i"+ i +"' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-5 h-5 opacity-50 hover:opacity-70 duration-500'><path stroke-linecap='round' stroke-linejoin='round' d='M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/></svg></button>"
        }
    }
    let singleSlideWidth = document.querySelector("#container").clientWidth;
    document.querySelector("#slideShow").style.width = (numberOfSlides) * singleSlideWidth + "px"
 
    if(numberOfSlides > 1){
        intervalID = setInterval(() => {
            autoSlideShow();
        }, "5000");
    }

    if(window.location.pathname=='/index.html' || window.location.pathname=='/' || window.location.pathname=='/public/index.html'){
        document.querySelector("#vid").volume = 0.2;
    }
}

if(width > 1260) isDesktop = true;
else isDesktop =false

function openImagePhone(value){
    if(isDesktop == false)
    document.querySelector("#openImage").style.transform = "translateX(0px)";
    let bgImage = document.querySelector("#bgimage"+value).style.backgroundImage.slice(5,-2);
    document.querySelector("#openedImage").src = bgImage;
    document.querySelector("#downloadImage").href = bgImage;
}

function openImage(value){
    document.querySelector("#openImage").style.transform = "translateX(0px)";
    let bgImage = document.querySelector("#bgimage"+value).style.backgroundImage.slice(5,-2);
    document.querySelector("#openedImage").src = bgImage;
    document.querySelector("#downloadImage").href = bgImage;
}

function closeImage(){  
    document.querySelector("#openImage").style.transform = "translateX(100vw)";
}

function darken(value){
    if(isDesktop == true){
        document.querySelector("#container"+value).style.transform = "translateY(0px)";
    }
}

function lightup(value){
    if(isDesktop == true){
    let containerHeight = document.querySelector("#container"+value).offsetHeight;
    document.querySelector("#container"+value).style.transform = "translateY(" + containerHeight + "px)";
    }
}

let isAuto = false
function arrowLeftSlide(){

    if(isAuto === true){ 
        contor--;
    };

   if(contor == 0 && isAuto === true){
    contor++;
   }
   else if(contor > 1 ){
        contor--;
        let singleSlideWidth = document.querySelector("#singleSlide").clientWidth;
        let Slider = document.querySelector("#slideShow");
        Slider.style.transitionDuration = "500ms";
        Slider.style.transform = "translateX("+ (contor - 1) * -singleSlideWidth +"px)";
        isAuto = false;
        clearInterval(intervalID);
        setTimeout(intervalID = setInterval(() => {
            autoSlideShow();
        }, "5000"), 10000)
    }
    if(contor === 1){
        document.querySelector("#leftArrow").style.color = "gray"
    }
    else{document.querySelector("#rightArrow").style.color = "black"
    document.querySelector("#leftArrow").style.color = "black"}
}

function arrowRightSlide(){

    if(isAuto === true && contor == 1){
    }
    else{
        if(isAuto === true){ 
            contor--;
            isAuto = false;
        }
        if(contor < numberOfSlides - 1){
            contor++;
            let singleSlideWidth = document.querySelector("#singleSlide").clientWidth;
            let Slider = document.querySelector("#slideShow");
            Slider.style.transitionDuration = "500ms";
            Slider.style.transform = "translateX("+ (contor - 1) * -singleSlideWidth +"px)";
            isAuto = false;
            clearInterval(intervalID);
            setTimeout(intervalID = setInterval(() => {
                autoSlideShow();
            }, "5000"), 10000)
        }
        if(contor === numberOfSlides - 1){
            document.querySelector("#rightArrow").style.color = "gray"
        }
        else{document.querySelector("#rightArrow").style.color = "black"
        document.querySelector("#leftArrow").style.color = "black"}
    }
}

function autoSlideShow(){
    isAuto = true;
    let singleSlideWidth = document.querySelector("#singleSlide").clientWidth;
    let sliderWidth = document.querySelector("#slideShow").clientWidth;
    let Slider = document.querySelector("#slideShow");
    Slider.style.transform = "translateX("+ (contor - 1) * -singleSlideWidth +"px)";
   if(window.location.pathname != "/istoric")
    for( let i = 1 ; i < document.querySelector("#slideShow").children.length ; i++){
        if(isButtons === true){
            if(i != contor ){
                document.querySelector("#i"+i).style.opacity = "0.5";
                document.querySelector("#i"+i).style.height = "1.25rem";
                document.querySelector("#i"+i).style.width = "1.25rem";
            }
            else{
                document.querySelector("#i"+i).style.opacity = "0.8";
                document.querySelector("#i"+i).style.height = "1.5rem";
                document.querySelector("#i"+i).style.width = "1.5rem";
            }
        }
    }
    if( contor === numberOfSlides - 1 ){
        if(window.location.pathname === "/istoric"){
            document.querySelector("#leftArrow").style.color = "gray"
            document.querySelector("#rightArrow").style.color = "gray"}
        Slider.style.transitionDuration = "500ms";
        setTimeout(function(){
            Slider.style.transform = "translateX(-"+ (sliderWidth - singleSlideWidth) +"px)";
        },4500)
        contor = 1;
    }
    else if( contor === 1 ){
        if(window.location.pathname === "/istoric"){
        document.querySelector("#leftArrow").style.color = "gray"
        document.querySelector("#rightArrow").style.color = "black"
    }
        Slider.style.transitionDuration = "0s";
        contor++;
    }
    else if( contor != numberOfSlides - 1 && contor != 1){
        if(window.location.pathname === "/istoric"){
        document.querySelector("#rightArrow").style.color = "black"
        document.querySelector("#leftArrow").style.color = "black"
    }
        contor++;
        Slider.style.transitionDuration = "500ms";
    }


}

// function searchResults( searchText , searchURL ){
//     this.searchText = searchText;
//     this.searchURL = searchURL;
// }
//////////////////////////// SEARCH_BAR /////////////////////////////////////////
// let searchResults = [
//     {   
//         "textSearch":"olimpici",
//         "url":"http://www.w3schools.com",
//     },
//     {   
//         "textSearch":"Atlas",
//         "url":"https://www.tutorialspoint.com/how-to-stop-refreshing-the-page-on-submit-in-javascript",
//     },
//     {
//         "textSearch":"Test1234",
//         "url":"http://127.0.0.1:8000/admin/core/consiliu/",
//     },
// ]
// searchResults.push()
// function Search(){
//     for( let i = 0 ; i < searchResults.length ; i++ )
//         if(document.querySelector("#searchBar").value == searchResults[i].textSearch)
//             window.location.href = searchResults[i].url;
// }
const apiUrl = 'http://127.0.0.1:8000/test'; // Replace this with your API endpoint URL

// Function to fetch options from the API endpoint
async function apirequest() {
    const response = await fetch(apiUrl);
    const movies = await response.json();
    console.log(movies);
  }

    let searchBar = document.getElementById('searchBar');
    let searchButton = document.getElementById('searchButton');
    let dropdown = document.getElementById('dropdown');
    let dropdownList = document.getElementById('dropdown-list');
    let primaOptiune = document.getElementById('primaOptiune');
    let divOptiuni = document.getElementById('divOptiuni');

if (window.innerWidth < 1280)
{
    searchBar = document.getElementById('searchBarTel');
    searchButton = document.getElementById('searchButtonTel');
    dropdown = document.getElementById('dropdownTel');
    dropdownList = document.getElementById('dropdown-listTel');
}

// Function to fetch options from the API endpoint
async function fetchOptions() {
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (!data || typeof data !== 'object') {
            throw new Error('Data from the API is not an object');
        }
        return data;
    } catch (error) {
        console.error('Error fetching options:', error);
        return {};
    }
    
}

// Function to populate the dropdown options
function populateDropdownOptions(options) {
    for (const optionName in options) {
        const listItem = document.createElement('li');
        listItem.textContent = optionName;
        listItem.classList.add('py-1', 'px-4', 'cursor-pointer');
        dropdownList.appendChild(listItem);

        // Redirect to the URL when an option is clicked
        listItem.addEventListener('click', function () {
            window.location.href = options[optionName];
        });
    }
}

// Show the dropdown options when the search bar gains focus
searchBar.addEventListener('focus', async function () {
    searchBar.classList.add('rounded-b-sm', 'rounded-t-3xl');
    divOptiuni.classList.add('items-center', 'absolute', 'self-center', 'bottom-4');
    try {
        const options = await fetchOptions();
        dropdownList.innerHTML = ''; // Clear previous options
        populateDropdownOptions(options);
        dropdown.style.display = 'block';
    } catch (error) {
        console.error('Error while showing dropdown options:', error);
    }
});

// Hide the dropdown options when the search bar loses focus
searchBar.addEventListener('blur', function () {
    setTimeout(() => {
        dropdown.style.display = 'none';
        searchBar.classList.remove('rounded-b-sm', 'rounded-t-3xl');
        divOptiuni.classList.remove('items-center', 'absolute', 'self-center', 'bottom-4');

    }, 100); // Delay hiding to give time to click on the dropdown options
});

// Event listener for input change in the search bar
searchBar.addEventListener('input', function () {

    const searchValue = searchBar.value.toLowerCase();
    const options = Array.from(dropdownList.getElementsByTagName('li'));

    // Filter the dropdown options based on the search input
    options.forEach(option => {
        const optionText = option.textContent.toLowerCase();
        if (optionText.includes(searchValue)) {
            option.style.display = 'block';
        } else {
            option.style.display = 'none';
        }
    });

    // Show the dropdown if there are filtered options, hide it otherwise
    dropdown.style.display = options.some(option => option.style.display === 'block') ? 'block' : 'none';
});

searchBar.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default "Enter" key behavior

        // Trigger the search button click or perform the search action directly
        // Here, we'll trigger the search button click
        searchButton.click(); // Simulate a click on the search button
    }
});
// Event listener for the search button click
searchButton.addEventListener('click', async function () {
    const optionsData = await fetchOptions();
    const searchValue = searchBar.value.toLowerCase();
    const options = Array.from(dropdownList.getElementsByTagName('li'));
    const firstMatchingOption = options.find(option => option.textContent.toLowerCase().includes(searchValue));

    if (firstMatchingOption) {
        const matchingOptionName = firstMatchingOption.textContent;
        const matchingOptionURL = optionsData[matchingOptionName];
        if (matchingOptionURL) {
            window.location.href = matchingOptionURL;
        }
    }
});

// Initialize the dropdown options on page load
window.addEventListener('DOMContentLoaded', async function () {
    try {
        const optionsData = await fetchOptions();
        populateDropdownOptions(optionsData);
    } catch (error) {
        console.error('Error while initializing dropdown options:', error);
    }
});

searchBar.addEventListener('focus', function () {
    dropdownContainer.classList.add('active');
  });
  
searchBar.addEventListener('blur', function () {
    dropdownContainer.classList.remove('active');
  });

////////////////////////////////////////////////

function slideShow(value){
    let singleSlideWidth = document.querySelector("#singleSlide").clientWidth;
    document.querySelector("#slideShow").style.transform = "translateX("+ (value - 1) * -singleSlideWidth +"px)";

    for( let i = 1 ; i < document.querySelector("#slideShow").children.length ; i++){
            if(i != value){
                document.querySelector("#i"+i).style.opacity = "0.5";
                document.querySelector("#i"+i).style.height = "1.25rem";
                document.querySelector("#i"+i).style.width = "1.25rem";
            }
            else{
                document.querySelector("#i"+i).style.opacity = "0.8";
                document.querySelector("#i"+i).style.height = "1.5rem";
                document.querySelector("#i"+i).style.width = "1.5rem";
            }
        }

    contor = value;
    setTimeout(function(){

    },20000)
}

function scrollNavBar(){
    let top = window.pageYOffset;
    if( top === 0 ){
        document.querySelector("#nav").style.backgroundColor = "rgb(118 36 36 / 0)"
    }
    else{
        document.querySelector("#nav").style.backgroundColor = "rgb(118 36 36 / 0.9)"
    }
}

///////////////////////////////////ISTORIC/////////////////////////////////////////////////

var images = ["url('./assets/scan0003.jpg')",
"url('./assets/scan0003.jpg')",
"url('./assets/scan0004.jpg')",
"url('./assets/scan0006.jpg')",
"url('./assets/scan0003.jpg')",
"url('./assets/scan0004.jpg')",
"url('./assets/scan0006.jpg')"];
var index = 0;
var div = document.createElement('div');

function makeImage() {
    if(screen.width>700)
        {div.style.width="80vw";
        div.style.height="80vh";
        div.style.backgroundSize="contain";}
    else
        {div.style.width="100vw";
        div.style.height="60vh";
        div.style.backgroundSize="contain";}   
   div.style.margin="auto"
   div.style.backgroundImage=images[0];
   div.style.backgroundPosition="center center";
   div.style.backgroundRepeat="no-repeat";
   document.getElementById('content').appendChild(div);
}
if (window.location.pathname=='/istoric.html' || window.location.pathname=='/public/istoric.html') {
setInterval(() => {
    slideShowIstoric();
  }, "3000");
}
function slideShowIstoric(){
    index++;
    if(index == 7)
        index = 0;
    index = index % images.length;
    div.style.backgroundImage=images[index];
}

function moveRight(){
    var div = document.getElementById('content').getElementsByTagName('div')[2];
    div.style.position="center"
    if(index==7)
         index=0;
    index++;
    index = index % images.length;
    if(screen.width>700)
         {div.style.backgroundSize="contain";
         div.style.backgroundRepeat="no-repeat";}
     else
         div.style.backgroundSize="contain"; 
    div.style.backgroundImage="none";
    div.style.backgroundImage=images[index];
 }
 
 function moveLeft(){
     var div = document.getElementById('content').getElementsByTagName('div')[2];
     div.style.position="center"
     if(index==0)
         index=7;
     index--;
     index = index % images.length;
     if(screen.width>700)
         {div.style.backgroundSize="contain";
         div.style.backgroundRepeat="no-repeat";}
     else
         div.style.backgroundSize="contain";  
     div.style.backgroundImage="none";
     div.style.backgroundImage=images[index];
  }

///////////////////////////////////CATEDRE/////////////////////////////////////////////////

let boolCatedre = [];
for (let index = 1; index <= 16; index++) {
    boolCatedre[index] = true;
}
function dropCatedre(value){
    if(boolCatedre[value] === true){
        document.querySelector("#materie"+value).style.display = "flex";
        document.querySelector("#border"+value).style.borderBottom="thin solid rgb(27 27 27)";
    }
    else{
        document.querySelector("#materie"+value).style.display = "none";
        document.querySelector("#border"+value).style.borderBottom="none";
    }
    boolCatedre[value] = !boolCatedre[value]; 
}

///////////////////////////////////INFORMATII/////////////////////////////////////////////////
let boolInformatii = [];
for (let index = 1; index <= 9; index++) {
    boolInformatii[index] = true;
}
function dropInformatii(value){
    if(boolInformatii[value] === true){
        document.querySelector("#info"+value).style.display = "flex";
        document.querySelector("#arrow"+value).style.transform = "rotate(180deg)"
    }
    else{
        document.querySelector("#info"+value).style.display = "none";
        document.querySelector("#arrow"+value).style.transform = "rotate(0deg)"
    }
    boolInformatii[value] = !boolInformatii[value]; 
}

///////////////////////////////////CONTACT/////////////////////////////////////////////////
if (window.location.pathname=='/contact.html' || window.location.pathname=='/public/contact.html') {
    let inputs = document.querySelector("form").childNodes;
    for( let i  = 1 ; i <= inputs.length ; i = i + 2 ){
        inputs[i].style.outline = "none";
    }
    }

///////////////////////////////////CREARE PROIECT/////////////////////////////////////////////////
if (window.location.pathname=='/creare%20proiect.html' || window.location.pathname=='/public/creare%20proiect.html') {
    function previewBeforeUpload(id){
        document.querySelector("#"+id).addEventListener("change",function(e){
          if(e.target.files.length == 0){
            return;
          }
          let file = e.target.files[0];
          let url = URL.createObjectURL(file);
          document.querySelector("#preview-image").src = url;
        });
      }
      
      previewBeforeUpload("file");

      
}

///////////////////////////////////GENERAL/////////////////////////////////////////////////
let droped = false;
function dropDown(value){
    if( value == 0 ){
        document.querySelector("#dropDown").style.display = "block";
        setTimeout(() => {
            document.querySelector("#dropDown").style.opacity = "1";
        },100)
        droped = true;
    }
    else if (value == 1){
        if(droped == true){document.querySelector("#dropDown").style.opacity = "1";
        setTimeout(() => {
            document.querySelector("#dropDown").style.display = "block";
        },100)}
        makeDropedFalse();
    }

}
function dropFade(){
    document.querySelector("#dropDown").style.opacity = "0";
    setTimeout(() => {
        document.querySelector("#dropDown").style.display = "none";
    },100)

}
function makeDropedFalse(){
    droped = false;
}

let opened = false;
function secondaryMenu(){
    if(opened === false){
        document.querySelector("#secondaryMenu").style.transform = "translateX(0px)";
        opened = !opened;
    }
    else{
        document.querySelector("#secondaryMenu").style.transform = "translateX(250px)";
        opened = !opened;
    }
}

if(topOffset > 0){
    document.querySelector("#nav").style.backgroundColor = "rgb(118 36 36 / 0.9)"
}

function navmod(){
    let top = window.pageYOffset;
    if( top === 0 ){
        document.querySelector("#nav").style.backgroundColor = "rgb(118 36 36 / 0)"
    }
    else{
        document.querySelector("#nav").style.backgroundColor = "rgb(118 36 36 / 0.9)"
    }
}

///////////////////////////////////NUME/////////////////////////////////////////////////

// document.addEventListener('DOMContentLoaded', function () {
//     // Access the data passed from Django
//     const dataFromDjango = jsonData;

//     // Now you can use the data to run your functions
//     for (const key in dataFromDjango) {
//         if (dataFromDjango.hasOwnProperty(key)) {
//             const value = dataFromDjango[key];
//             console.log(`${key}: ${value}`);
//         }
//     }
// });

// let personNames = ["Matu Dragos Gabriel", "Filip Miriam-Valentina"]
// let functions = ["billionaire", "trilionaire"]
// function appearFunctions(value){
//     document.querySelector("#function"+value).innerHTML = functions[value]
// }

// function appearPersonNames(value){
//     document.querySelector("#function"+value).innerHTML = personNames[value]
// }

// javascript_file.js
let persoane = []
let functii = []

document.addEventListener('DOMContentLoaded', function () {
    // Access the data passed from Django
    const dataFromDjango = jsonData;
    console.log(dataFromDjango);
    // Now you can use the data to run your functions
    for (const key in dataFromDjango) {
        if (dataFromDjango.hasOwnProperty(key)) {
            const value = dataFromDjango[key];
            persoane.push(key);
            functii.push(value);
            console.log(value);
        }
    }
     
    // let personNames = ["Matu Dragos Gabriel", "Filip Miriam-Valentina"]
    // let functions = ["billionaire", "trilionaire"]
    
});

function appearFunctions(value){
    document.querySelector("#function"+value).innerHTML = functii[value]
}

function appearPersonNames(value){
    document.querySelector("#function"+value).innerHTML = persoane[value]
}

if (window.location.pathname=='/'){
    console.log("SUCCES TUTUROR!")
}

function easterEgg(){
    console.log("Robi: dacă sunt ceva erori nu e din vina noastră")
    console.log("Dragoș: It's not a bug, it's a feature")
}