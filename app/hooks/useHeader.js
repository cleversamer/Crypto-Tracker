import { useLayoutEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, Text } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
import useAuth from "../auth/useAuth";
import colors from "../config/colors";

const HeaderBackIcon = ({ navigation, headerTintColor }) => (
  <AntDesign
    color={headerTintColor.color}
    name="arrowleft"
    onPress={() => navigation.goBack()}
    size={24}
    style={styles.headerBack}
  />
);

const HeaderTitle = ({ avatarUrl, title }) => {
  const renderIcon = () =>
    avatarUrl ? { uri: avatarUrl } : require("../assets/user.png");

  return (
    <View style={styles.headerTitle.container}>
      <Avatar rounded source={renderIcon()} />
      <Text style={styles.headerTitle.title} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};

const HeaderLeft = ({ photoURL }) => {
  const renderIcon = () =>
    photoURL ? { uri: photoURL } : require("../assets/user.png");

  return (
    <TouchableOpacity style={styles.headerLeft} activeOpacity={0.5}>
      <Avatar rounded source={renderIcon()} />
    </TouchableOpacity>
  );
};

const HeaderRight = ({ LeftIcon, RightIcon }) => {
  return (
    <View style={styles.headerRight}>
      <TouchableOpacity activeOpacity={0.5}>
        <LeftIcon />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.5}>
        <RightIcon />
      </TouchableOpacity>
    </View>
  );
};

const useHeader = (navigation, options = {}) => {
  const { user } = useAuth();

  const renderHeaderLeft = () => () =>
    options.headerLeft ? (
      <HeaderLeft photoURL={user.photoURL} />
    ) : (
      <HeaderBackIcon {...options} navigation={navigation} />
    );

  const renderHeaderRight = () => () =>
    options.headerRight && (
      <HeaderRight
        LeftIcon={options.headerRight.left}
        RightIcon={options.headerRight.right}
      />
    );

  const renderHeaderTitle = () => () =>
    options.headerTitle && (
      <HeaderTitle avatarUrl={options.avatarUrl} title={options.title} />
    );

  useLayoutEffect(() => {
    navigation.setOptions({
      ...options,
      headerLeft: renderHeaderLeft(),
      headerRight: renderHeaderRight(),
      headerTitle: renderHeaderTitle(),
    });
  }, []);
};

const styles = StyleSheet.create({
  headerLeft: {
    marginRight: 15,
  },
  headerRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    width: 80,
  },
  headerBack: {
    marginRight: 15,
  },
  headerTitle: {
    container: {
      alignItems: "center",
      flexDirection: "row",
    },
    title: {
      color: colors.white,
      fontSize: 14,
      fontWeight: "800",
      marginLeft: 10,
      width: 150,
    },
  },
});

export default useHeader;
