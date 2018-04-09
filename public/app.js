const createCat = function(){
  let cat = document.createElement("ul");
  cat.classList.add("cat");
  return cat;
}

const createName = function(name){
  let myName = document.createElement("li");
  myName.innerText = "Name: " + name;
  return myName;
}

const createFood = function(food){
  let myFood = document.createElement("li");
  myFood.innerText = "Favourite food: " + food;
  return myFood;
}

const createPicture = function(){
  let myPicture = document.createElement("li");
  return myPicture;
}

const createImage = function(picture){
  let myImage = document.createElement("img");
  myImage.width = "500";
  myImage.src = picture;
  return myImage;
}

const appendElements = function(cat, catName, catFood, catPicture, catImage){
  catPicture.appendChild(catImage);
  cat.appendChild(catName);
  cat.appendChild(catFood);
  cat.appendChild(catPicture);
  let cats = document.querySelector("#cats");
  cats.appendChild(cat);
}

const addCat = function(name, food, picture){
  const cat = createCat();
  const catName = createName(name);
  const catFood = createFood(food);
  const catPicture = createPicture();
  const catImage = createImage(picture);
  appendElements(cat, catName, catFood, catPicture, catImage);
}

const app = function(){

  addCat("Moggy", "Beans", "http://i0.kym-cdn.com/entries/icons/original/000/000/774/lime-cat.jpg");
  // debugger;
}

window.onload = app;
