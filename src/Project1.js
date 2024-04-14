import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Project1 = () =>{
    return(
        <View style={myStyle.viewStyle}>
            <Text style={myStyle.textStyle}>Hello World</Text>
        </View>
    )
}

export default Project1;

const myStyle = StyleSheet.create({
    viewStyle:{
        width: 100,
        height: 100,
        backgroundColor: 'aqua',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle:{
        color: 'black'
    }
})