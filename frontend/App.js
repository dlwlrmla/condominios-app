import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import page1 from './pages/page1';
import page2 from './pages/page2';

const Stack = createNativeStackNavigator()

export default function App() {
  return (


    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="page1"
        component ={page1}
        options={{title:'welcome'}}
       />

       <Stack.Screen 
        name="page2"
        component = {page2}

       />

      </Stack.Navigator>

    </NavigationContainer>
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
