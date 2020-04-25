var category_name = localStorage.getItem('selected_category');
var categories = localStorage.getItem('returned_values');
var this_category_results = categories[category_name];

var title = document.querySelector('.text_collection > h1');
var subtext = document.querySelector('.text_collection > h3');

console.log(this_category_results);

// Put a switch/case area here to handle setting the titles
