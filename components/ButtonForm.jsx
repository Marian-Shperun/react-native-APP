import { Button } from "@rneui/themed";

const ButtonForm = ({ title, onPress }) => {
  return (
    <Button
      title={title}
      titleStyle={{ fontSize: 19 }}
      buttonStyle={{
        marginTop: 27,
        padding: 16,
        color: "#FFFFF",
        backgroundColor: "#FF6C00",
        borderRadius: 100,
      }}
      onPress={onPress}
    />
  );
};

export default ButtonForm;
