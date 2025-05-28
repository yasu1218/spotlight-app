//import { tokenCache } from '@/cache'; // Import the tokenCache from cache.ts
import InitialLayout from '@/components/InitialLayout';
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Not sure if this is needed, but it was in the original code. (latest Clerk docs do not mention it)
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY! 
if(!publishableKey) {
  throw new Error("EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY is not set. Please set it in your .env file.");
} 
console.log("Clerk Key:", process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY);


export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
            {/* This is the root layout for the app. */}
            <InitialLayout />
            { /* -- Commenting out the tabs, this was for the very first exercise. 
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" options={{ headerShown: true, title: "Home"}} />
              <Stack.Screen name="profile" options={{ headerShown: true, title: "Profile"}} />
              <Stack.Screen name="notifications" options={{ headerShown: true, title: "Notifications"}} />
            </Stack>
            */ }
          </SafeAreaView>
        </SafeAreaProvider>
    </ClerkProvider>
  )
}



