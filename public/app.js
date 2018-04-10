const createUL = function(className){
  let ul = document.createElement("ul");
  ul.classList.add(className);
  return ul;
}

const createLI = function(text){
  let li = document.createElement("li");
  if (text){
    li.innerText = text;
  }
  return li;
}

const createIMG = function(url, width){
  let img = document.createElement("img");
  img.width = width;
  img.src = url;
  return img;
}

const createCat = function(){
  return createUL("cat");
}

const createName = function(name){
  return createLI("Name: " + name);
}

const createFood = function(food){
  return createLI("Favourite food: " + food);
}

const createPicture = function(){
  return createLI();
}

const createImage = function(picture){
  return createIMG(picture, "500");
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
  addCat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
  addCat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg");
  addCat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");
  addCat("Moggy", "Limes", "http://i0.kym-cdn.com/entries/icons/original/000/000/774/lime-cat.jpg");
  addCat("Smelly", "Beans", "http://i0.kym-cdn.com/photos/images/original/000/793/387/c96.jpg");
  addCat("Furry", "Birds", "https://upload.wikimedia.org/wikipedia/commons/1/14/Chinchilla_cat_%285833713404%29.jpg");
  // debugger;
}

window.onload = app;
