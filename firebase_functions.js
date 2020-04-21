function getAllRelevantPosts(query) {
  let relevant_returns = {};
  query_array = [];
  // Converting query dictionary to array
  Object.keys(query).forEach((item, i) => {
    item = item.replace("_", "-");
    item = item.replace("/", "-");
    query_array.push(item);
  });
  console.log("Received:");
  console.log(query_array);
  query_array.forEach((item, i) => {
    db.collection("posts").collection(item.toString()).limit(200).get().then((returned_vals) => {
      returned_vals.forEach((result, i) => {
        relevant_returns[item] = result
      });
    });
  });
  console.log(relevant_returns);
}
