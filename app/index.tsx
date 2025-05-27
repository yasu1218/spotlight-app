import { Redirect } from 'expo-router';
import React from 'react';

export default function Index() {
  // This is the root of the app, redirecting to the tabs
  return <Redirect href="/(tabs)" />;
}