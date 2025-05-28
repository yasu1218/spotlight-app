import { useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, InteractionManager, SafeAreaView, Text } from "react-native";

export default function InitialLayout() {

  const { isLoaded, isSignedIn } = useAuth(); // Check if the Clerk auth state is loaded and if the user is signed in
  const segments = useSegments(); // Get the current segments of the route
  const router = useRouter(); // Use the router to navigate

  // debugging..
  console.log("InitialLayout mounted.");


  useEffect(() => {

    if (!isLoaded) { return; } // Wait until auth state is loaded

    const inAuthScreen = segments[0] === "(auth)"; // Check if the current segment is an auth screen

    InteractionManager.runAfterInteractions(() => {
      if (!isSignedIn && !inAuthScreen) {
        router.replace("/(auth)/login"); // Redirect to the login screen if user is signed in but not on an auth screen
      }
      else if (isSignedIn && inAuthScreen) {
        router.replace("/(tabs)"); // Redirect to the main app if already logged in
      }
    });

  }, [isLoaded, isSignedIn, segments]);

  // debugging..
  console.log("InitialLayout status:", { isLoaded, isSignedIn, segments });


if (!isLoaded) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <ActivityIndicator color="white" />
      <Text style={{ color: 'white', marginTop: 10 }}>Authenticating...</Text>
    </SafeAreaView>
  );
}
  // If the auth state is loaded, render the Stack component
  return <Stack screenOptions={{ headerShown: false }} />; // Render the Stack
}
