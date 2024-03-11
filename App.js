import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Navigation from '@navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { AppStateProvider } from './app/state/AppContext';

export default function App() {
  return (
    <AppStateProvider>
      <NavigationContainer style={styles.container}>
        <Navigation />
      </NavigationContainer>
    </AppStateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
