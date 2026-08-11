import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { useFonts } from 'expo-font';
import * as Notifications from 'expo-notifications';
import type { RootStackParamList } from './src/navigation/types';
import { HomeScreen } from './src/screens/HomeScreen';
import { TableOfContentsScreen } from './src/screens/TableOfContentsScreen';
import { VigilScreen } from './src/screens/VigilScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { HymnScreen } from './src/screens/HymnScreen';
import { CalendarScreen } from './src/screens/CalendarScreen';
import { ConfessionScreen } from './src/screens/ConfessionScreen';
import { IntentionHistoryScreen } from './src/screens/IntentionHistoryScreen';
import { ExaminationScreen } from './src/screens/ExaminationScreen';
import { fonts } from './src/theme/theme';
import { ThemeProvider, useTheme } from './src/theme/ThemeContext';
import { LanguageProvider, useLanguage } from './src/i18n/LanguageContext';
import { refreshVigilReminderIfNeeded } from './src/utils/reminders';
import { initErrorReporting, wrapWithErrorReporting } from './src/utils/errorReporting';

initErrorReporting();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  const { colors, mode } = useTheme();
  const { t } = useLanguage();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.accent,
          headerTitleStyle: { color: colors.text, fontFamily: fonts.displaySemiBold, fontSize: 17 },
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="TableOfContents"
          component={TableOfContentsScreen}
          options={{ title: t('screens.contents') }}
        />
        <Stack.Screen name="Vigil" component={VigilScreen} options={{ title: t('screens.vigil') }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: t('screens.settings') }} />
        <Stack.Screen name="Hymn" component={HymnScreen} options={{ title: t('screens.hymn') }} />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{ title: t('screens.calendar') }} />
        <Stack.Screen
          name="Confession"
          component={ConfessionScreen}
          options={{ title: t('screens.confession') }}
        />
        <Stack.Screen
          name="IntentionHistory"
          component={IntentionHistoryScreen}
          options={{ title: t('screens.intentionHistory') }}
        />
        <Stack.Screen
          name="Examination"
          component={ExaminationScreen}
          options={{ title: t('screens.examination') }}
        />
      </Stack.Navigator>
      <StatusBar style={mode === 'night' ? 'light' : 'dark'} />
    </NavigationContainer>
  );
}

function App() {
  // The expo-font config plugin (app.json) embeds these natively for iOS/Android
  // builds, where text can reference the family names directly with no loading
  // gap. The web target has no such native embedding step, so useFonts here
  // fills that gap — same family names, so native behavior is unaffected.
  const [fontsLoaded] = useFonts({
    'Cinzel-Bold': require('./assets/fonts/Cinzel-Bold.ttf'),
    'Cinzel-SemiBold': require('./assets/fonts/Cinzel-SemiBold.ttf'),
    'Cinzel-Regular': require('./assets/fonts/Cinzel-Regular.ttf'),
    'LinuxLibertine-Regular': require('./assets/fonts/LinuxLibertine-Regular.ttf'),
    'LinuxLibertine-Semibold': require('./assets/fonts/LinuxLibertine-Semibold.ttf'),
    'LinuxLibertine-Bold': require('./assets/fonts/LinuxLibertine-Bold.ttf'),
    'LinuxLibertine-Italic': require('./assets/fonts/LinuxLibertine-Italic.ttf'),
    'LinuxLibertine-SemiboldItalic': require('./assets/fonts/LinuxLibertine-SemiboldItalic.ttf'),
  });

  useEffect(() => {
    refreshVigilReminderIfNeeded();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <LanguageProvider>
      <ThemeProvider>
        <SafeAreaProvider>
          <KeyboardProvider>
            <AppNavigator />
          </KeyboardProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default wrapWithErrorReporting(App);
