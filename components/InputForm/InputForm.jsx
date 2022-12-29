import { Icon } from "@rneui/themed";
import React, { useState } from "react";
import { TextInput, View } from "react-native";

import { COLORS } from "../../constants";
import { styles } from "./style";

const InputForm = ({
  label,
  iconName,
  error,
  typeIcon,
  password,
  ...props
}) => {
  const [hiddenPass, setHiddenPass] = useState(password);
  return (
    <View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          {...props}
          autoCorrect={false}
          secureTextEntry={hiddenPass}
        />
        {password && (
          <Icon
            style={{ top: 12, marginRight: 12 }}
            onPress={() => setHiddenPass(!hiddenPass)}
            name={hiddenPass ? "ios-eye-outline" : "ios-eye-off-outline"}
            type="ionicon"
            color={COLORS.akcent}
          />
        )}
      </View>
    </View>
  );
};

export default InputForm;
