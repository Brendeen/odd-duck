'use strict';

console.log('bruh');

// *************** GLOBALS *****************

let productArr = [];

let votingRounds = 25;




// ************* DOM WINDOWING ****************

let imageContainer = document.getElementById('img-container');

let imgOne = document.getElementById('image-one');
let imgTwo = document.getElementById('image-two');
let imgThree = document.getElementById('image-three');

let resultsButton = document.getElementById('results-button');
let resultsList = document.getElementById('results-container');

// ***************** CONSTRUCTOR FUNCTION ***************

function Product(name, imgExtension = 'jpg') {
  this.name = name;
  this.img = `img/${name}.${imgExtension}`;
  this.votes = 0;
}




// ****************** HELPER FUNCTIONS *********************

function randomIndex(){
  return Math.floor(Math.random() * productArr.length);
}


function renderImg(){

  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex();
  let imgThreeIndex = randomIndex();

  while(imgOneIndex === imgTwoIndex || imgTwoIndex === imgThreeIndex || imgOneIndex === imgThreeIndex){
    imgOneIndex = randomIndex();
    imgTwoIndex = randomIndex();
    imgThreeIndex = randomIndex();
  }

  imgOne.src = productArr[imgOneIndex].img;
  imgOne.title = productArr[imgOneIndex].name;
  imgOne.alt = `This is an image of ${productArr[imgOneIndex].name}`;

  imgTwo.src = productArr[imgTwoIndex].img;
  imgTwo.title = productArr[imgTwoIndex].name;
  imgTwo.alt = `This is an image of ${productArr[imgTwoIndex].name}`;

  imgThree.src = productArr[imgThreeIndex].img;
  imgThree.title = [imgThreeIndex].name;
  imgThree.alt = `This is an image of ${productArr[imgThreeIndex].name}`;

}



// ************** EVENT HANDLERS ********************

function handleClick(event){

  let imgClicked = event.target.title;

  for(let i = 0; i < productArr.length; i++){
    if(imgClicked === productArr[i].name){
      productArr[i].votes++;
    }
  }

  votingRounds--;

  renderImg();

  if(votingRounds === 0){
    imageContainer.removeEventListener('click', handleClick);
    alert('Thank you for voting!');
  }

}


function handleShowResults(){
  if(votingRounds === 0){
    for(let i = 0; i < productArr.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${productArr[i].name} was voted: ${productArr[i].votes} time(s)`;
      resultsList.appendChild(liElem);
    }
    resultsButton.removeEventListener('click', handleShowResults);
  }
}




// ****************** EXECUTABLE CODE ************************

let bag = new Product('bag');
let banana = new Product('banana');
let bathRoom = new Product('bathroom');
let boots = new Product('boots');
let breakfast = new Product('breakfast');
let bubblegum = new Product('bubblegum');
let chair = new Product('chair');
let cthulhu = new Product('cthulhu');
let dogDuck = new Product('dog-duck');
let dragon = new Product('dragon');
let pen = new Product('pen');
let petSweep = new Product('pet-sweep');
let scissors = new Product('scissors');
let shark = new Product('shark');
let sweep = new Product('sweep', 'png');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let waterCan = new Product('water-can');
let wineGlass = new Product('wine-glass');

productArr.push(bag, banana, bathRoom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);

console.log(productArr);

renderImg();

imageContainer.addEventListener('click', handleClick);
resultsButton.addEventListener('click', handleShowResults);
