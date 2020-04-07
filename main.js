/*

     SETTING LOCALSTORAGE VAIRABLES TO EMPTY STATES IF NOT ALREADY SET

*/

function update_localstorage_vars(categories=undefined, last_page=undefined){
  localStorage.selected_categories = categories;
  localStorage.last_page = last_page;
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function() {
    }, function() {
    });
  } else {
}

var deferredPrompt;

window.addEventListener('beforeinstallprompt', function (e) {
  deferredPrompt = e;
  showAddToHomeScreen();
});

function showAddToHomeScreen() {
    var a2hsBtn = document.querySelector(".ad2hs-prompt");
    a2hsBtn.style.display = "block";
    a2hsBtn.addEventListener("click", addToHomeScreen);
}
function addToHomeScreen() {
  var a2hsBtn = document.querySelector(".ad2hs-prompt");
  a2hsBtn.style.display = 'none';
  deferredPrompt.prompt();
  deferredPrompt.userChoice
    .then(function(choiceResult){
      if (choiceResult.outcome === 'accepted') {
      } else {
      }
      deferredPrompt = null;
    });
}
