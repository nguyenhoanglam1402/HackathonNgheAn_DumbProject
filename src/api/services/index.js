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
          console.log(postItem)
        });
      console.log(list);
      return list
    });

  return posts;
}