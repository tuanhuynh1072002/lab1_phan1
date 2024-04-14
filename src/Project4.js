import React, {useState} from "react";
import {Text, Button, View} from "react-native";

export default () => {
    const [pressCount, setPressCount] = useState(0);

    return(
        <View style={{flex:1, alignItems:'center', marginTop: 20}}>
            <Text>You're pressed the button: {pressCount} time(s)</Text>
            <Button
            title={`Pressed ${pressCount} time (s)`}
            onPress={()=>setPressCount(pressCount + 1)}
            />
        </View>
    )
}