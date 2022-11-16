import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
export default function App() {

  const [users, setUsers] = useState([])
  const connectDatabase = async () => {
    const response = await fetch('http://10.0.2.2:3000/users')
    const data = await response.json()
    console.log(data)
    setUsers(data)
  }
useEffect(() => {
  connectDatabase()
}, [])

  return (
    <View style={styles.container}>
      {users.map((user) => (
        <Text key={user.id}>Departamento número: {user.name}</Text>
      ))}

      <StatusBar style="auto" />
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
