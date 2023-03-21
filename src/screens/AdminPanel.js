import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

export default function ({ navigation }) {
    
    return (
        <View style={style.Button}>
        <Text>AdminPanelScreen</Text>
        <Button onPress={() => navigation.navigate("Login")} title="Болих" />
        <View style={style.Button}>
            <Button onPress={() => navigation.navigate("AddPost")} title="Post Нэмэх"  /> 
        </View>
        
        </View>
  )
}

const style= StyleSheet.create({
    Button: {
        marginVertical: 5,
        marginHorizontal:120,
    }
})
