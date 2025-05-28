import { COLORS } from '@/constants/theme'
import { styles } from '@/styles/auth.styles'
import { useAuth, useSSO } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function login() {

  const { isSignedIn } = useAuth(); // Check if the user is already signed in
  const {startSSOFlow} = useSSO(); // Import the startSSOFlow function from Clerk to handle SSO login
  const router = useRouter(); // Use the router to navigate after login

  useEffect(() => {
    console.log("Auth status:", isSignedIn);
    // If the user is already signed in, redirect to the main app
    if (isSignedIn) {
      router.replace("/(tabs)"); // Redirect to the main app after login
    }
  }, [isSignedIn]);

  const handleGoogleSignIn = async () => {
    try {
      console.log('Starting Google SSO flow...');
      const { createdSessionId, setActive } = await startSSOFlow({ strategy: 'oauth_google' });
      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });
        router.replace("/(tabs)"); // Redirect to the main app after login
      }
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  const handleAppleSignIn = async () => {
    try {
      console.log('Starting Apple SSO flow...');
      const { createdSessionId, setActive } = await startSSOFlow({ strategy: 'oauth_apple' });
      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });
        router.replace("/(tabs)"); // Redirect to the main app after login
      }
    } catch (error) {
      console.error('Apple login failed:', error);
    }
  };

  // Debugging...
  console.log("login screen loaded. isSignedIn:", isSignedIn);

  // This is the login screen for the app
  // It includes options to login with Google or Apple, and displays a brand section with an illustration.
  // The brand section includes a logo, app name, and tagline.
  // The login section includes buttons for Google and Apple login, and a terms and conditions text.
  return (
    <View style={styles.container}>
      
      {/* BRAND SECTION */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>spotlight</Text>
        <Text style={styles.tagline}>don't miss anything</Text>
      </View>

      {/* ILLUSTRATION */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require('../../assets/images/auth-bg-2.png')}
          style={styles.illustration}
          resizeMode="cover"
        />
      </View>

      {/* LOGIN SECTION */}
      <View style={styles.loginSection}>

        {/* Login with Google */}
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleSignIn}
          activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Login with Apple */}
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleAppleSignIn}
          activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-apple" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Continue with Apple</Text>
        </TouchableOpacity>

        {/* Terms and Conditions */}
        <Text style={styles.termsText}>
          By continuing, you agree to our Terms and Privacy Policy
        </Text>

      </View>


    </View>
  )
}
