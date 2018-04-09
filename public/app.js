

const app = function(){
  // 1. Create parent 'ul' and its className (cat)
  let cat = document.createElement("ul");
  cat.classList.add("cat");

  // 2. Create 'child 'li' for name and its text: 'Name: xyz'
  let name = document.createElement("li");
  name.innerText = "Name: Moggy";

  // 3. Create 'child 'li' for food and its text: 'Favourite food: abc'
  let food = document.createElement("li");
  food.innerText = "Favourite food: Beans"

  // 4. Create child 'li' for picture and its img
  let picture = document.createElement("li");

  let image = document.createElement("img");
  image.width = "500";
  image.src = "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"

  // 5. Append the img 'image' to the 'picture' li
  picture.appendChild(image);

  // 5. Append the li 'name' to the 'cat' ul
  cat.appendChild(name);

  // 5. Append the li 'food' to the 'cat' ul
  cat.appendChild(food);

  // 5. Append the li 'picture' to the 'cat' ul
  cat.appendChild(picture);

  // 6. Add the 'ul' cat to the list of cats
  let cats = document.querySelector("#cats");
  cats.appendChild(cat);

  // debugger;
}

window.onload = app;
