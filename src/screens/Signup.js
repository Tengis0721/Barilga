import React from "react";
import { View, Text, Button , StyleSheet, TextInput } from "react-native";

export default function ({ navigation }) {
    return (
        <View>
            <Text style={{ textAlign: "center", fontSize: 30, marginTop: 120 }}> Бүртгүүлэх </Text>
            <TextInput placeholder="e-mail" style={style.inputField} />
            <TextInput  placeholder="Нэр" style={ style.inputField } />
            <TextInput  placeholder="Нууц үг" style={ style.inputField } /> 
            <TextInput  placeholder="Нууц үг давтан оруулах" style={ style.inputField } /> 
            
            <View style={style.Button} >
            <Button onPress={() => navigation.navigate("Login")} title="Бүртгүүлэх" />
            </View>
            <View style={style.Button}>
            <Button onPress={() => navigation.navigate("Login")} title="Болих" />
            </View>
            
        </View>
    )
}

const style = StyleSheet.create({
    inputField:{ 
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