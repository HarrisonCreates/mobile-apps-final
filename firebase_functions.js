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

function unlike_post(query, callback) {
  let category = query[0];
  let post = query[1];
  let doc_id = query[2];

  let doc_to_change = db.collection("posts").doc(category).collection("uploads").doc(doc_id);

  doc_to_change.get().then((doc) => {
    console.log(doc.data());
    callback(true);
  })
  .catch(function(error){
    console.log(error);
  });
/*
  var updating = doc_to_change.set({
    likes: 701
}, { merge: true });
*/
}

function like_post(query, callback) {
  let category = query[0];
  let post = query[1];
  let doc_id = query[2];

  let doc_to_change = db.collection("posts").doc(category).collection("uploads").doc(doc_id);

  doc_to_change.get().then((doc) => {
    console.log(doc.data());
    callback(true);
  })
  .catch(function(error) => {
    console.log(error);
  });
}
