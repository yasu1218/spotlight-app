import { Link } from "expo-router";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.styles";

export default function Index() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Hello</Text>

      {/* Using TouchableOpacity for a button */}
      <TouchableOpacity onPress={() => alert("Button Pressed!")}>
        <Text>Press Me</Text>
      </TouchableOpacity>

      {/* Using Pressable for a button */}
      <Pressable onPress={() => alert("Pressable Pressed!")}>
        <Text>Press me</Text>
      </Pressable>

      {/* Using Image component */}
      <Image source={require("../../assets/images/icon.png")} style={{width: 150, height: 150}} />

      {/* Using remote image */}
      <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png"}} style={{width: 100, height: 100}} />
      <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/M31-Andromede-16-09-2023-Hamois.jpg/1024px-M31-Andromede-16-09-2023-Hamois.jpg"}} style={{width: 200, height: 150 }} />

      {/* Using Link component for navigation. 
          This is handled by the Stack in _layout.tsx */}
      <Link href="/profile">Visit Profiles Screen</Link>
      <Link href="/notifications">Visit Notifications Screen</Link>
      
    </View>
  );
}

