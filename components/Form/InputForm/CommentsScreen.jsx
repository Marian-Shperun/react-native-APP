import { useState, useEffect } from "react";
import db from "../../../firebase/config";

import {
  Image,
  View,
  Text,
  TextInput,
  FlatList,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

import { useKeyboardState } from "../../../hooks/ContextProvider";

import { Feather } from "@expo/vector-icons";
import { styles, COLORS } from "./style";
import { IMGS } from "../../../constants";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native";

// const com = [
//   {
//     userPhoto: IMGS.userAva,
//     comment: "ваоіалвіолалі івлоалівраолів",
//     date: Date.now(),
//   },
//   {
//     userPhoto: IMGS.userAva,
//     comment: "ваоіалвіолалі івлоалівраолів",
//     date: Date.now(),
//   },
//   {
//     userPhoto: IMGS.userAva,
//     comment: "ваоіалвіолалі івлоалівраолів",
//     date: Date.now(),
//   },
//   {
//     userPhoto: IMGS.userAva,
//     comment: "ваоіалвіолалі івлоалівраолів",
//     date: Date.now(),
//   },
//   {
//     userPhoto: IMGS.userAva,
//     comment: "ваоіалвіолалі івлоалівраолів",
//     date: Date.now(),
//   },
//   {
//     userPhoto: IMGS.userAva,
//     comment: "ваоіалвіолалі івлоалівраолів",
//     date: Date.now(),
//   },
//   {
//     userPhoto: IMGS.userAva,
//     comment: "ваоіалвіолалі івлоалівраолів",
//     date: Date.now(),
//   },
// ];

const renderItem = ({ item, index }) => {
  const evenItem = index % 2 === 0;
  return (
    <View
      style={{
        ...styles.commentBlock,
        flexDirection: evenItem ? "row-reverse" : "row",
      }}
    >
      <View>
        <Image
          source={{ uri: item.photoProfile }}
          style={{ width: 28, height: 28, borderRadius: 50, marginBottom: 8 }}
        />
        <Text>{item.nickName}</Text>
      </View>
      <View style={styles.commentText}>
        <Text>{item.comment}</Text>

        <Text
          style={{
            ...styles.commentDate,
            textAlign: evenItem ? "left" : "right",
          }}
        >
          {new Date(item.date_comment).toLocaleString()}
        </Text>
      </View>
    </View>
  );
};

const CommentsScreen = ({ route }) => {
  const { isShowKeyboard, setIsShowKeyboard } = useKeyboardState();
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const { nickName, photoProfile } = useSelector((stete) => stete.auth);

  const { postId, postPhoto } = route.params;

  useEffect(() => {
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsShowKeyboard(false);
    });

    return () => {
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    getComment();
  }, []);
  const commentHandler = (text) => setComment(text);

  const createComment = async () => {
    await db
      .firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .add({ comment, nickName, photoProfile, date_comment: Date.now() });
    setComment("");
    console.log("відправлено");
    Keyboard.dismiss();
  };

  const getComment = async () => {
    await db
      .firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .onSnapshot((data) =>
        setAllComments(data.docs.map((doc) => ({ ...doc.data() })))
      );
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : 0}
      style={styles.container}
    >
      <SafeAreaView style={{ marginTop: 32, justifyContent: "flex-end" }}>
        <FlatList
          style={styles.content}
          data={allComments}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={renderItem}
          ListHeaderComponent={
            <Image source={{ uri: postPhoto }} style={styles.photo} />
          }
          // stickyHeaderIndices={[0]}
        />
        <View
          style={{
            ...styles.inputContainer,
            marginBottom: isShowKeyboard
              ? Platform.OS === "ios"
                ? 65
                : 0
              : 16,
          }}
        >
          <TextInput
            style={styles.input}
            onFocus={() => {
              setIsShowKeyboard(true);
            }}
            value={comment}
            onChangeText={commentHandler}
            placeholder="Коментувати..."
          />
          <View style={styles.btnSubmit}>
            <Feather
              name="arrow-up"
              size={24}
              color={COLORS.white}
              onPress={createComment}
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default CommentsScreen;
