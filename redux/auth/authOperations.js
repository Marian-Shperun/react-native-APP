import db from "../../firebase/config";

import { authSlice } from "./authReducer";

const { updateUserProfile, authStateChange, authSignOut, updateStateProfile } =
  authSlice.actions;

export const authSignUpUser =
  (email, password, name, avatar) => async (dispatch, getState) => {
    try {
      await db.auth().createUserWithEmailAndPassword(email, password);
      const user = await db.auth().currentUser;

      await user.updateProfile({
        displayName: name,
        photoURL: avatar,
      });
      const { displayName, photoURL, uid } = await db.auth().currentUser;

      const userUpdateProfile = {
        nickName: displayName,
        photoProfile: photoURL,
        userEmail: email,
        userId: uid,
      };

      dispatch(updateUserProfile(userUpdateProfile));
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };

export const authSignInUser =
  (email, password) => async (dispatch, getState) => {
    try {
      await db.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("error", error);
      console.log("error.code", error.code);
      console.log("error.message", error.message);
    }
  };

export const authStateCahngeUser = () => async (dispatch, getState) => {
  await db.auth().onAuthStateChanged((user) => {
    if (user) {
      const userUpdateProfile = {
        nickName: user.displayName,
        photoProfile: user.photoURL,
        userEmail: user.email,
        userId: user.uid,
      };

      dispatch(authStateChange({ stateChange: true }));
      dispatch(updateUserProfile(userUpdateProfile));
    }
  });
};

export const authSignOutUser = () => async (dispatch, getState) => {
  await db.auth().signOut();
  dispatch(authSignOut());
};

// export const updateCurrentUserProfile =
//   (avatar) => async (dispatch, getState) => {
//     try {
//       const user = auth.currentUser;
//       await updateProfile(user, {
//         photoURL: avatar,
//       });
//       const { photoURL } = user;

//       const userUpdateProfile = {
//         photoProfile: photoURL,
//       };
//       dispatch(updateStateProfile(userUpdateProfile));
//     } catch (error) {
//       console.log("error", error);
//       console.log("error.message", error.message);
//     }
//   };
