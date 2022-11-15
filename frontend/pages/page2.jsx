import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'


const page2 = ({navigation}) => {

  const [datos, setDatos] =  useState([])

  const a = () => {
    console.log("a")
    alert("a")
  }

  const getData = async() => {

    try{
      const res = await fetch(`http://localhost:3001/api/casas`)
      const json = await res.json()
      setDatos(json.data)
      return json
    }catch(error) {
      console.error(error)
    }
  } 


   useEffect(() => {
    console.log("useffect")
    getData()
    
  },[]) 

  return (
    <View>
        <Text>aa</Text>
        <Text>{datos}</Text>
        <Button
          title="data"
          onPress={a}
         />
    </View>
  )
}

export default page2