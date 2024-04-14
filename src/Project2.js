import React from "react";
import {View, Button, TouchableOpacity, Text, StyleSheet} from "react-native";
const Project2 = () => {
    return(
        <View style={myStyle.viewStyle}>
            <Button title="Button 1" onPress={() => alert("Hello!")}/>
            <TouchableOpacity onPress={() => alert("Hello 2!")} style={myStyle.buttonStyle}>
                <Text style={myStyle.textStyle}>Button 2</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Project2;
const myStyle = StyleSheet.create({
    viewStyle:{
        flex: 1,
        justifyContent: 'center'
    },
    buttonStyle:{
        backgroundColor: 'blue',
        padding: 10,
        alignItems: 'center',
        marginTop: 10
    },
    textStyle:{
        color: 'white',
        fontSize: 18
    }
})