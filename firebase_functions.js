function getAllRelevantPosts(query) {
  let relevant_returns = {};
  var query_array = [];
  // Converting query dictionary to array
  Object.keys(query).forEach((item, i) => {
    item = item.replace("_", "-");
    item = item.replace("/", "-");
    item = item.replace(" ", "-");
    query_array.push(item);
  });
  query_array.forEach((item, i) => {
    var temp_array = [];
    var doc_ref = db.collection("posts").doc(item).collection("uploads");
    doc_ref.get().then((returned_vals) => {
      console.log("Found these for " + item);
      returned_vals.forEach((doc) => {
         var this_doc = doc.data();
         temp_array.push(this_doc);
      });
    relevant_returns[item] = temp_array;
    });
  });
  console.log(relevant_returns);
}
