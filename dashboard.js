var categories = JSON.parse(localStorage.getItem('returned_values'));
var dashboard_results = document.querySelector('.simplified_options');
var selection_btn = document.querySelector('.update_selection_btn');
var slideout = document.querySelector('.slideout');
var footer = document.querySelector('.footer');
var menu_toggle = document.querySelector('.menu_toggle');
var toggle_state = false;

document.querySelector('.update_selection_btn').addEventListener('click', () => {
   window.location = "category_selection.html";
});

function post(){
   window.location = "create_post.html";
}

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

menu_toggle.addEventListener('click', () => {
   if(toggle_state){
     // close the menu
     menu_toggle.setAttribute('src', 'assets/hamburger.svg');
     slideout.style.opacity = "0";
     slideout.style.marginLeft = "-100%";
     footer.style.display = "flex";
     dashboard_results.style.display = "flex";
     selection_btn.style.display = "flex";
     var wait = setTimeout(function(){
       footer.style.opacity = "1";
       dashboard_results.style.opacity = "1";
       selection_btn.style.opacity = "1";
     }, 100);

     toggle_state = false;
   } else {
     // open the menu
     menu_toggle.setAttribute('src', 'assets/x-icon.svg');
     slideout.style.opacity = "1";
     slideout.style.marginLeft = "0";
     footer.style.opacity = "0";
     dashboard_results.style.opacity = "0";
     selection_btn.style.opacity = "0";
     var wait = setTimeout(function(){
       footer.style.display = "none";
       dashboard_results.style.display = "none";
       selection_btn.style.display = "none";
     }, 500);
     toggle_state = true;
   }
});
