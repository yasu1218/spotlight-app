import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return ( 
  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* This is the root layout for the app. */}
        { /* -- Commenting out the tabs, this was for the very first exercise. 
        <Stack.Screen name="index" options={{ headerShown: true, title: "Home"}} />
        <Stack.Screen name="profile" options={{ headerShown: true, title: "Profile"}} />
        <Stack.Screen name="notifications" options={{ headerShown: true, title: "Notifications"}} />
        */ }
      </Stack>
    </SafeAreaView>
  </SafeAreaProvider>
  );

}
