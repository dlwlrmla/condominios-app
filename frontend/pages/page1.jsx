import React from 'react'
import { Button, Text, View } from 'react-native'

const page1 = ({navigation}) => {
  return (
    <View>
    <Text>a</Text>
    <Button
        title ="go page2"
        onPress = {() => 
        navigation.navigate('page2')}
    />
    </View>
  )
}

export default page1