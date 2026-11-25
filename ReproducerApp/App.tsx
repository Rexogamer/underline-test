/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: safeAreaInsets.top + 8,
          paddingBottom: safeAreaInsets.bottom + 8,
          paddingInline: 8,
        },
      ]}
    >
      <View>
        <Text style={styles.text}>System</Text>
        <Text style={styles.text2}>System</Text>
      </View>
      <View>
        <Text style={[styles.text, styles.textOpenSans]}>Open Sans</Text>
        <Text style={[styles.text2, styles.textOpenSans]}>Open Sans</Text>
      </View>
      <View>
        <Text style={[styles.text, styles.textInter]}>Inter</Text>
        <Text style={[styles.text2, styles.textInter]}>Inter</Text>
      </View>
      <View>
        <Text style={[styles.text, styles.textJetBrainsMono]}>
          JetBrains Mono
        </Text>
        <Text style={[styles.text2, styles.textJetBrainsMono]}>
          JetBrains Mono
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1AD4B2',
    textDecorationLine: 'underline',
  },
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F6F6F6',
    textDecorationLine: 'underline',
  },
  textOpenSans: {
    fontFamily: 'Open Sans',
  },
  textInter: {
    fontFamily: 'Inter',
  },
  textJetBrainsMono: {
    fontFamily: 'JetBrains Mono',
  },
});

export default App;
