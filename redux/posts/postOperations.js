import db from "../../firebase/config";
import { postsSlice } from "./postsReducer";

const { updatePosts } = postsSlice.actions;

export const getAllPosts = () => async (dispatch, getState) => {
  try {
    await db
      .firestore()
      .collection("posts")
      .onSnapshot((data) => {
        let posts = [];
        data.docs.map((doc) => posts.push({ ...doc.data(), id: doc.id }));
        dispatch(updatePosts(posts));
      });
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};
