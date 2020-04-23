function getAllRelevantPosts(query) {
  let relevant_returns = {};
  var query_array = [];
  Object.keys(query).forEach((item, i) => {
    item = item.replace("_", "-");
    item = item.replace("/", "-");
    item = item.replace(" ", "-");
    query_array.push(item);
  });
  query_array.forEach((item, i) => {
    var temp_array = {};
    var num = 0;
    var doc_ref = db.collection("posts").doc(item).collection("uploads").orderBy("likes", "desc");
    doc_ref.get().then((returned_vals) => {
      returned_vals.forEach((doc) => {
        var this_doc = doc.data().resolve().then((final_doc) => {
          console.log("We're Working With:");
          console.log(final_doc);
          console.log(type(final_doc));
          //var new_key = "entry_" + num;
          //temp_array[new_key] = this_doc;
          //num += 1
        });
      });
    });
    //var new_item = item.toString().replace("-", "_");
    //new_item = new_item.replace(" ", "_");
    //relevant_returns[new_item] = temp_array;
  });
  try {
    return ["true", relevant_returns];
  } catch {
    return ["false"];
  }
}
