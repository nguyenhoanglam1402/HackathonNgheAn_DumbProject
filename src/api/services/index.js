import firebase from "firebase";

export const fetchPosts = async () => {
  const posts = await firebase
    .firestore()
    .collection("newsfeed")
    .get()
    .then((querySnapshot) => {
      let list = [];
      querySnapshot.forEach((item) => {
        let postItem = { ...item.data(), id: item.id };
        list.push(postItem);
      });
      return list;
    });

  return posts;
};

export const fetchCategory = async () => {
  const categories = await firebase
    .firestore()
    .collection("category-product")
    .get()
    .then((querySnapShot) => {
    const items = [];
    querySnapShot.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });
      return items;
    });
  return categories;
}

