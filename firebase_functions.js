function getAllRelevantPosts(query) {
  let relevant_returns = {};
  query_array = [];
  // Converting query dictionary to array
  Object.keys(query).forEach((item, i) => {
    item = item.replace("_", "-");
    item = item.replace("/", "-");
    item = item.replace(" ", "-");
    query_array.push(item);
  });
  query_array.forEach((item, i) => {
    var doc_ref = db.collection("posts").doc(item).collection("uploads");
    doc_ref.get().then((returned_vals) => {
      console.log("Returning the below for query " + item);
      console.log(returned_vals.docs);
    });
  });
  //console.log(relevant_returns);
}
