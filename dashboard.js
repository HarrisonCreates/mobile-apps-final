console.log(JSON.parse(localStorage.getItem('returned_values')));

document.querySelector('.update_selection_btn').addEventListener('click', () => {
   window.location = "category_selection.html";
});
