const createCat = function(){
  let cat = document.createElement("ul");
  cat.classList.add("cat");
  return cat;
}

const createName = function(name){
  let myName = document.createElement("li");
  myName.innerText = "Name: Moggy";
  return myName;
}

const createFood = function(food){
  let myFood = document.createElement("li");
  myFood.innerText = "Favourite food: Beans";
  return myFood;
}

const createPicture = function(){
  let myPicture = document.createElement("li");
  return myPicture;
}

const createImage = function(picture){
  let myImage = document.createElement("img");
  myImage.width = "500";
  myImage.src = "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg";
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

  addCat("Moggy", "Beans", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");
  // // 1. Create parent 'ul' and its className (cat)
  // let cat = document.createElement("ul");
  // cat.classList.add("cat");
  //
  // // 2. Create 'child 'li' for name and its text: 'Name: xyz'
  // let name = document.createElement("li");
  // name.innerText = "Name: Moggy";
  //
  // // 3. Create 'child 'li' for food and its text: 'Favourite food: abc'
  // let food = document.createElement("li");
  // food.innerText = "Favourite food: Beans"
  //
  // // 4. Create child 'li' for picture and its img
  // let picture = document.createElement("li");
  //
  // let image = document.createElement("img");
  // image.width = "500";
  // image.src = "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"
  //
  // // 5. Append the img 'image' to the 'picture' li
  // picture.appendChild(image);
  //
  // // 6. Append the li 'name' to the 'cat' ul
  // cat.appendChild(name);
  //
  // // 7. Append the li 'food' to the 'cat' ul
  // cat.appendChild(food);
  //
  // // 8. Append the li 'picture' to the 'cat' ul
  // cat.appendChild(picture);
  //
  // // 9. Add the 'ul' cat to the list of cats
  // let cats = document.querySelector("#cats");
  // cats.appendChild(cat);

  // debugger;
}

window.onload = app;
