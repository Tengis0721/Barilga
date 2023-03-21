import React from "react";
import { View, Text, Button , StyleSheet, TextInput } from "react-native";

export default function ({ navigation }) {
    return (
        <View>
            <Text style={{ textAlign: "center", fontSize: 30, marginTop: 120 }}> Нэвтрэх </Text>
            <TextInput  placeholder="Нэврэх Нэр" style={ style.inputField1 } />
            <TextInput  placeholder="Нууц үг" style={ style.inputField1 } /> 
            <View style={style.Button}>
            <Button onPress={() => navigation.navigate("Home")} title="Нэвтрэх"  />
            </View>
            
            <View style={style.Button} >
            <Button onPress={() => navigation.navigate("SignUp")} title="Бүртгүүлэх" />
            </View>

            <View style={style.Button} >
            <Button onPress={() => navigation.navigate("AdminPanel")} title="Admin" />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    inputField1:{ 
        fontSize: 20, 
        textAlign: "center", 
        borderBottomColor: "gray", 
        borderBottomWidth: 1.5, 
        marginHorizontal: 60, 
        marginVertical: 10, 
        padding: 10 
    },
    Button: {
        marginVertical: 5,
        marginHorizontal: 120,
        
    }

  });