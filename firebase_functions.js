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
        var this_doc = doc.data();
        temp_array[num] = this_doc;
        num += 1
      });
    });
    relevant_returns[item] = temp_array;
  });
  try {
    console.log(relevant_returns);
    console.log(JSON.stringify(relevant_returns));
    localStorage.setItem("returned_posts", JSON.stringify(relevant_returns));
    //return true;
  } catch {
    //return false;
  }
}
