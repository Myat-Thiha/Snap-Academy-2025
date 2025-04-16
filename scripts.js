/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// ----- Data -----
const burmeseFoods = [
  {
    name: "Mohinga",
    type: "Noodle Dish",
    region: "Lower Myanmar",
    spiceLevel: 3,
    vegetarian: false,
    image: "images/mohinga.jpg",
    description: "Rice noodle fish soup—Myanmar’s national dish.",
    wiki: "https://en.wikipedia.org/wiki/Mohinga"
  },
  {
    name: "Laphet Thoke",
    type: "Salad",
    region: "Nationwide",
    spiceLevel: 4,
    vegetarian: true,
    image: "images/laphet_thoke.jpg",
    description: "Fermented tea leaf salad with crunchy toppings.",
    wiki: "https://en.wikipedia.org/wiki/Laphet"
  },
  {
    name: "Shan Noodles",
    type: "Noodle Dish",
    region: "Shan State",
    spiceLevel: 2,
    vegetarian: true,
    image: "images/shan_noodles.jfif",
    description: "Mild rice noodles with tomato-based sauce and herbs.",
    wiki: "https://en.wikipedia.org/wiki/Burmese_noodles#Shan_noodles"
  },
  {
    name: "Ohn No Khao Swe",
    type: "Noodle Dish",
    region: "Yangon Region",
    spiceLevel: 2,
    vegetarian: false,
    image: "images/ohn_no_khao_swe.jpg",
    description: "Coconut chicken noodle soup with crispy toppings.",
    wiki: "https://en.wikipedia.org/wiki/Ohn_no_khao_swe"
  },
  {
    name: "Rakhine Mote Ti",
    type: "Noodle Dish",
    region: "Rakhine State",
    spiceLevel: 3,
    vegetarian: false,
    image: "images/mote_ti.jpg",
    description: "Spicy clear fish soup with thin rice noodle and fishcake",
    wiki: "https://en.wikipedia.org/wiki/Rakhine_Monti"
  },
  {
    name: "Tofu Nway",
    type: "Noodle Dish",
    region: "Shan State",
    spiceLevel: 2,
    vegetarian: true,
    image: "images/tofu_nway.jpg",
    description: "Warm tofu noodles topped with chickpea flour sauce.",
    wiki: "https://en.wikipedia.org/wiki/Burmese_tofu"
  },
  {
    name: "Kyay Oh",
    type: "Noodle Dish",
    region: "Nationwide",
    spiceLevel: 1,
    vegetarian: false,
    image: "images/kyay_oh.jpg",
    description: "Clear pork noodle soup with meatballs and egg.",
    wiki: "https://en.wikipedia.org/wiki/Kyay_oh"
  },
  {
    name: "Hta Min Chin",
    type: "Rice Dish",
    region: "Inle Lake",
    spiceLevel: 2,
    vegetarian: true,
    image: "images/htamin_chin.jpg",
    description: "Mashed fermented rice mixed with potatoes and garlic oil. Served with fried yellow tofu.",
    wiki: "https://en.wikipedia.org/wiki/Burmese_cuisine"
  },
  {
    name: "A Kyaw Sone",
    type: "Snack",
    region: "Nationwide",
    spiceLevel: 1,
    vegetarian: true,
    image: "images/kyaw_sone.jfif",
    description: "Assorted Burmese fritters made from vegetables, lentils, and tofu—crispy and flavorful street food.",
    wiki: "https://en.wikipedia.org/wiki/Burmese_cuisine"
  },
  {
    name: "Mote Lin Ma Yar",
    type: "Snack",
    region: "Nationwide",
    spiceLevel: 0,
    vegetarian: true,
    image: "images/mote_lin_mayar.webp",
    description: "Mini rice cakes often called 'husband and wife snacks'.",
    wiki: "https://en.wikipedia.org/wiki/Burmese_cuisine"
  },
  {
    name: "A Sone Tote",
    type: "Salad",
    region: "Nationwide",
    spiceLevel: 3,
    vegetarian: true,
    image: "images/sone_tote.jpg",
    description: "A mix of stuffed and rolled vegetables, tossed with sesame, chili, and lime for a fresh, spicy salad.",
    wiki: "https://en.wikipedia.org/wiki/Burmese_salads"
  },
  {
    name: "Hta Min Tote",
    type: "Rice Dish",
    region: "Nationwide",
    spiceLevel: 3,
    vegetarian: true,
    image: "images/hta_min_tote.webp",
    description: "Cold rice mixed with roasted chili, lime, garlic oil, and seasonal herbs—a flavorful Burmese rice salad.",
    wiki: "https://en.wikipedia.org/wiki/Burmese_cuisine"
  },
  {
    name: "Nan Gyi Thoke",
    type: "Noodle Dish",
    region: "Mandalay",
    spiceLevel: 3,
    vegetarian: false,
    image: "images/nan_gyi_thoke.jpg",
    description: "Thick rice noodles mixed with chicken curry, toasted chickpea flour, onions, and chili oil—a hearty dry noodle salad.",
    wiki: "https://en.wikipedia.org/wiki/Nan_gyi_thoke"
  },
  {
    name: "Htamin Paung",
    type: "Rice Dish",
    region: "Nationwide",
    spiceLevel: 0,
    vegetarian: false,
    image: "images/htamin_paung.jpg",
    description: "Simple steamed rice served with a gravy topping including boiled peas, vegetables, fried onions, and chicken/pork.",
    wiki: "https://en.wikipedia.org/wiki/Burmese_cuisine"
  },
  {
    name: "Si Hta Min",
    type: "Rice Dish",
    region: "Nationwide",
    spiceLevel: 0,
    vegetarian: true,
    image: "images/si_hta_min.jpg",
    description: "Sticky glutinous rice cooked with turmeric, salt, and onions, served with roasted sesame seeds and fried onions.",
    wiki: "https://en.wikipedia.org/wiki/Burmese_cuisine"
  }
];

function displayFoods(foodList) {
  const catalog = document.getElementById("catalog");
  catalog.innerHTML = "";

  for (var i = 0; i < foodList.length; i++) {
    var food = foodList[i];

    var card = document.createElement("div");
    card.className = "food-card";

    card.innerHTML =
      '<img src="' + food.image + '" alt="' + food.name + '">' +
      '<h3><a href="' + food.wiki + '" target="_blank">' + food.name + '</a></h3>' +
      '<p><b>Type:</b> ' + food.type + '</p>' +
      '<p><b>Region:</b> ' + food.region + '</p>' +
      '<p><b>Spice Level:</b> ' + getSpiceIcons(food.spiceLevel) + '</p>' +
      '<p>' + food.description + '</p>';

    catalog.appendChild(card);
  }
}

function getSpiceIcons(level) {
  var spice = "";
  for (var i = 0; i < level; i++) {
    spice += "🌶️";
  }
  return spice;
}

function showAll() {
  displayFoods(burmeseFoods);
}

function showVegetarian() {
  var result = [];
  for (var i = 0; i < burmeseFoods.length; i++) {
    if (burmeseFoods[i].vegetarian) {
      result.push(burmeseFoods[i]);
    }
  }
  displayFoods(result);
}

function filterByType() {
  var selectedType = document.getElementById("typeFilter").value;

  if (selectedType === "All") {
    displayFoods(burmeseFoods);
  } else {
    var filtered = [];
    for (var i = 0; i < burmeseFoods.length; i++) {
      if (burmeseFoods[i].type === selectedType) {
        filtered.push(burmeseFoods[i]);
      }
    }
    displayFoods(filtered);
  }
}

function sortBySpice() {
  var sorted_food = burmeseFoods.slice();
  sorted_food.sort(function (a, b) {
    return b.spiceLevel - a.spiceLevel;
  });
  displayFoods(sorted_food);
}

function sortByName() {
  var sorted = burmeseFoods.slice();
  sorted.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
  displayFoods(sorted);
}

function searchFood() {
  var query = document.getElementById("searchInput").value.toLowerCase();
  var result = [];

  for (var i = 0; i < burmeseFoods.length; i++) {
    var name = burmeseFoods[i].name.toLowerCase();
    if (name.indexOf(query) !== -1) {
      result.push(burmeseFoods[i]);
    }
  }

  displayFoods(result);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

window.onload = showAll;
