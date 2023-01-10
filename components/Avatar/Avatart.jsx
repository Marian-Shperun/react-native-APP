import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as DocumentPicker from "expo-document-picker";

import { View, Image,  } from "react-native";

import { Icon } from "@rneui/themed";

import { styles, COLORS } from "./style";

const Avatart = ({ getPhotoProfile, photoProfile, profile }) => {
  const [avatar, setAvatar] = useState(photoProfile ? photoProfile : "");

  const dispatch = useDispatch();

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: false,
      type: "*/*",
      multiple: true,
    });

    if (!avatar) {
      setAvatar(result.uri);
      getPhotoProfile(result.uri);
    } else {
      setAvatar(result.uri);
      // dispatch(updateCurrentUserProfile(result.uri));
    }
  };
  return (
    <View style={styles.avatar}>
      <View
        style={{
          ...styles.imgAvatar,
          top: profile ? -92 : 0,
        }}
      >
        {avatar && (
          <Image
            source={{ uri: avatar }}
            style={{ width: "100%", height: "100%", borderRadius: 16 }}
          />
        )}

        <View
          style={{
            ...styles.addAvatar,
            transform: [{ rotate: !avatar ? "0deg" : "45deg" }],
            borderColor: !avatar ? COLORS.akcent : COLORS.gray,
            backgroundColor: !avatar ? "none" : COLORS.white,
          }}
          accessibilityRole="button"
        >
          <Icon
            name="add"
            type="ionicon"
            color={!avatar ? COLORS.akcent : "#BDBDBD"}
            size={21}
            style={{ right: -0.8 }}
            onPress={() => {
              if (!avatar) {
                pickDocument();
              } else {
                setAvatar("");
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Avatart;
