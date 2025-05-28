import { Redirect } from 'expo-router';

export default function Index() {
  // This is the root of the app, redirecting to the tabs
  //return <Redirect href="/(tabs)" />;
  return <Redirect href="/(auth)/login" />;
}