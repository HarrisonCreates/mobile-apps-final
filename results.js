var category_name = localStorage.getItem('selected_category');
var categories = JSON.parse(localStorage.getItem('returned_values'));
var this_category_results = categories[category_name];

var title = document.querySelector('.text_collection > h1');
var subtext = document.querySelector('.text_collection > h3');

var posts_area = document.querySelector('.posts_results');

function like_unlike(heart) {
  let entry_name = category_name + "_" + heart.parentNode.parentNode.className;
  // this may actually be slightly tricky.
  if (localStorage.getItem(entry_name) == "false") {
     // Set this post to "liked"
     console.log("Liking post...");
     localStorage.setItem(entry_name, "true");
  } else {
    console.log("Unliking post...");
    localStorage.setItem(entry_name, "false");
    // call firebase function to decrement the like
  }

  //let firebase_params = [category_name, entry_name];

  //set heart to white & call firebase function to add to the like, passing the above as a parameter
}

Object.keys(this_category_results).forEach((item) => {
  var post = document.createElement('div'),
    post_title = document.createElement('h1'),
    post_contents = document.createElement('p'),
    likes_div = document.createElement('div'),
    likes_img = document.createElement('img'),
    likes_counter = document.createElement('p'),
    this_item = this_category_results[item];

  post.setAttribute('class', item);
  post_title.innerHTML = this_item.title;
  post_contents.innerHTML = this_item.content;
  likes_counter.innerHTML = this_item.likes;

  likes_div.setAttribute('class', 'likes');
  if(localStorage.getItem(category_name + "_" + item) == "true"){
     likes_img.setAttribute('src', 'assets/heart_icon.svg');
     localStorage.setItem(category_name + "_" + item, "false");
  } else {
    likes_img.setAttribute('src', 'assets/heart_icon_filled.svg');
    localStorage.setItem(category_name + "_" + item, "true");
  }
  likes_img.setAttribute('onclick', 'like_unlike(this)');
  likes_counter.setAttribute('class', 'like_count');
  likes_div.appendChild(likes_img);
  likes_div.appendChild(likes_counter);

  post.appendChild(post_title);
  post.appendChild(post_contents);
  post.appendChild(likes_div);

  posts_area.appendChild(post);
});

if (category_name == "breakup_divorce") {
  title.innerHTML = "HEARTBROKEN?";
  subtext.innerHTML = "BROKEN DOORS ARE EASIER TO OPEN";
} else if (category_name == "loneliness") {
  title.innerHTML = "LONELY?";
  subtext.innerHTML = "LET'S FIX THAT";
} else if (category_name == "feeling_down_sad") {
  title.innerHTML = "FEELING DOWN?";
  subtext.innerHTML = "LET'S LIFT YOU UP";
} else if (category_name == "panic_attack") {
  title.innerHTML = "PANIC ATTACK?";
  subtext.innerHTML = "BACK TO EARTH";
} else if (category_name == "feeling_empty") {
  title.innerHTML = "FEELING EMPTY?";
  subtext.innerHTML = "LET'S FILL YOU UP";
} else if (category_name == "just_need_a_friend") {
  title.innerHTML = "NEED A FRIEND?";
  subtext.innerHTML = "WHY NOT A HUNDRED";
} else if (category_name == "frustration_angry") {
  title.innerHTML = "FRUSTRATED/ANGRY?";
  subtext.innerHTML = "RELAX WITH US";
}
