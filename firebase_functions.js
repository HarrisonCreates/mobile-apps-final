function getAllRelevantPosts(query, callback) {
  let relevant_returns = {};
  var query_array = [];
  Object.keys(query).forEach((item, i) => {
    item = item.replace(/ /g, "-");
    item = item.replace(/_/g, "-");
    item = item.replace("/", "-");
    query_array.push(item);
  });
  console.log(query_array);
  query_array.forEach((item, i) => {
    var temp_array = {};
    var num = 0;
    var doc_ref = db.collection("posts").doc(item).collection("uploads").orderBy("likes", "desc");
    doc_ref.get().then((returned_vals) => {
      returned_vals.forEach((doc) => {
        var this_doc = doc.data();
        var new_key = "entry_" + num;
        temp_array[new_key] = this_doc;
        var new_item = item.toString().replace(/-/g, "_");
        relevant_returns[new_item] = temp_array;
        num += 1
      });
      callback(relevant_returns);
    });
  });
}

function unlike_post(query, callback) {
  console.log("Received:");
  console.log(query);
  let category = query[0];
  let post = query[1];
  console.log(category + ", " + post);

  let doc_to_change = db.collection("posts").doc(category).collection("uploads").doc(post);

  console.log(doc_to_change.data());
/*
  var updating = doc_to_change.set({
    likes: doc_to_change[] + 1
}, { merge: true });
*/
  callback(true);
}

function like_post(query, callback) {
  console.log("Received:");
  console.log(query);
  let category = query[0];
  let post = query[1];
  console.log(category + ", " + post);

  let doc_to_change = db.collection("posts").doc(category).collection("uploads").doc(post);

  console.log(doc_to_change);

  callback(true);
  /*
  var doc_ref = db.collection("posts").doc(item).collection("uploads").orderBy("likes", "desc");
  doc_ref.post().then((returned_vals) => {
    returned_vals.forEach((doc) => {
      var this_doc = doc.data();
      callback(relevant_returns);
    });
  });
  */
}
