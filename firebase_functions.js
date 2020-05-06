function getAllRelevantPosts(query, callback) {
  let relevant_returns = {};
  var query_array = [];
  Object.keys(query).forEach((item, i) => {
    item = item.replace(/ /g, "-");
    item = item.replace(/_/g, "-");
    item = item.replace("/", "-");
    query_array.push(item);
  });
  query_array.forEach((item, i) => {
    var temp_array = {};
    var num = 0;
    var doc_ref = db.collection("posts").doc(item).collection("uploads").orderBy("likes", "desc");
    doc_ref.get().then((returned_vals) => {
      returned_vals.forEach((doc) => {
        var this_doc = doc.data();
        var new_key = "entry_" + num;
        this_doc['id'] = doc.id;
        temp_array[new_key] = this_doc;
        var new_item = item.toString().replace(/-/g, "_");
        relevant_returns[new_item] = temp_array;
        num += 1
      });
      callback(relevant_returns);
    });
  });
}
async function add_post_to_category(post_object, category){
  db.collection("posts").doc(category).collection("uploads").add(post_object);
  callback(true);
}
function like_unlike_post(query, type, callback) {
  let category = query[0].replace(/_/g, "-");
  let post = query[1];
  let doc_id = query[2];

  let doc_to_change = db.collection("posts").doc(category).collection("uploads").doc(doc_id);

  doc_to_change.get().then(function(doc) {
    var found_obj = doc.data();
    var num_likes = found_obj.likes;
    if (type == "like") {
      var new_likes = num_likes + 1;
    } else {
      var new_likes = num_likes - 1;
    }
    doc_to_change.set({
      likes: new_likes
    }, {
      merge: true
    }).then(function(res) {
      callback(true);
    }).catch(function(err) {
      console.log(err);
    })
  }).catch(function(error) {
    console.log(error);
  });
}
