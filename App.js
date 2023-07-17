import { lazy, Suspense, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Detail = lazy(() => import('./Detail'));

export default function App() {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Show Detail" onPress={() => setShowDetail(true)} />
      {showDetail && (
        <Suspense fallback={<View />}>
          <Detail />
        </Suspense>
      )}
    </View>
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
