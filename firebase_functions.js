function getAllRelevantPosts(query) {
  let relevant_returns = {};
  query.forEach((item, i) => {
    console.log("Retrieving " + item);
    db.collection("posts").limit(200).get().then((item) => {
      returned_vals.forEach((result, i) => {
        relevant_returns[i] = result
      });
    });
  });
  console.log(relevant_returns);
}
