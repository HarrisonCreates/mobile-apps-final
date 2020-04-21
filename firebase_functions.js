function getAllRelevantPosts(query) {
  let relevant_returns = {};
  query_array = [];
  // Converting query dictionary to array
  Object.keys(query).forEach((item, i) => {
    query_array.push(item);
  });
  console.log("Received:");
  console.log(query_array);
  query_array.forEach((item, i) => {
    console.log("Retrieving " + item);
    db.collection("posts").limit(200).get().then((item) => {
      returned_vals.forEach((result, i) => {
        relevant_returns[i] = result
      });
    });
  });
  console.log(relevant_returns);
}
