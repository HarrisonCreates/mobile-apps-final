categories = JSON.parse(localStorage.getItem('returned_values'));
dashboard_results = document.querySelector('.simplified_options');

document.querySelector('.update_selection_btn').addEventListener('click', () => {
   window.location = "category_selection.html";
});

Object.keys(categories).forEach((item) => {
  var temp_div = document.createElement('div');
  var temp_div_title = document.createElement('p');
  var temp_div_arrow = document.createElement('img');
  temp_div.setAttribute('class', item + '_posts');
  let item_stringified = '"' + item + '"';
  let process_str = 'process('+ item_stringified +')';
  temp_div.setAttribute('onclick', process_str);
  temp_div_arrow.setAttribute('src', 'assets/arrow_svg.svg');
  temp_div_title.innerHTML = '"' + item.toString().toUpperCase().replace(/_/g, " ") + '"' + " POSTS";

  temp_div.appendChild(temp_div_title);
  temp_div.appendChild(temp_div_arrow);
  dashboard_results.appendChild(temp_div);
});

function process(category_name){
   localStorage.setItem('selected_category', category_name);
   window.location.assign('results_page.html');
}
