var category_name = localStorage.getItem('selected_category');
var categories = JSON.parse(localStorage.getItem('returned_values'));
var this_category_results = categories[category_name];

var title = document.querySelector('.text_collection > h1');
var subtext = document.querySelector('.text_collection > h3');

Object.keys(this_category_results).forEach((item) => {
   // Basically, create a new div per item
});

// Put a switch/case area here to handle setting the titles
if(category_name == "breakup_divorce"){
   title.innerHTML = "HEARTBROKEN?";
   subtext.innerHTML = "BROKEN DOORS ARE EASIER TO OPEN";
} else if(category_name == "loneliness"){
  title.innerHTML = "LONELY?";
  subtext.innerHTML = "LET'S FIX THAT";
}
