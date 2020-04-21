user_selections = {};

if(localStorage.selected_categories != undefined){
   for(var i = 0; i < document.querySelector('.options').children.length; i++){
     let this_object = document.querySelector('.options').children[i];
     let this_value = this_object.innerHTML.toLowerCase();
     if(localStorage.selected_categories.includes(this_value)){
       this_object.className = 'enabled';
       user_selections[this_value] = true;
     }
   }
   document.querySelector('img').src = 'assets/arrow_svg.svg';
} else {
  document.querySelector('img').src = 'assets/arrow_svg_gray.svg';
}

function check_me(label){
  let result = label.className;
  let result_item = label.innerHTML.toLowerCase();
   if(result == 'disabled'){
     label.className = 'enabled';
     user_selections[result_item] = true;
     document.querySelector('img').src = 'assets/arrow_svg.svg';
   } else {
     label.className = 'disabled';
     delete user_selections[result_item];
     if(Object.keys(user_selections).length == 0){
       document.querySelector('img').src = 'assets/arrow_svg_gray.svg';
     }
   }
}

document.querySelector('img').addEventListener('click', () => {
   if(Object.keys(user_selections).length > 0){
     update_localstorage_vars(Object.keys(user_selections));
     if(getAllRelevantPosts(user_selections)== true){
       window.location = "dashboard.html";
     } else {
       alert("Something went wrong. Check your internet connection.");
     }
   } else {
     remind_purpose();
   }
});

function remind_purpose(){
  let message = 'Select one or multiple options to proceed';
  alert(message);
}
