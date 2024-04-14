import React from "react";
import {SectionList, Text, View, StyleSheet, SafeAreaView} from "react-native";

const myStyle = StyleSheet.create({
    row:{
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1
    },
    name:{
        fontSize: 16
    },
    separator:{
        backgroundColor: "rgba(0,0,0,0.5)",
        height: 1,
    },
    sectionHeader:{
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "rbg(170, 170, 170)",
    }
})

const groupPeopleByLastName = (_data) => {
    const data = [..._data];
    const groupedData = data.reduce((accumulator, item) =>{
        const group = item.name.last[0].toUpperCase();

        if(accumulator[group]){
            accumulator[group].data.push(item);
        }else{
            accumulator[group] = {
                title: group,
                data: [item],
            }
        }
        return accumulator;
    }, {})
    const sections = Object.keys(groupedData).map((key) => {
        return groupedData[key];
    })
    return sections.sort((a,b)=>{
        if(a.title > b.title){
            return 1;
        }
        return -1;
    })
}

export default () => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <SectionList
            sections={groupPeopleByLastName(PEOPLE)}
            keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
            renderSectionHeader={({section}) => {
                return(
                    <View style={myStyle.sectionHeader}>
                        <Text style={{fontWeight: "bold", color: "blue"}}>{section.title}</Text>
                    </View>
                )
            }}
            renderItem={({item}) => {
                return(
                    <View style={myStyle.row}>
                        <Text style={myStyle.name}>
                            {item.name.first} {item.name.last}
                        </Text>
                    </View>
                )
            }}
            ItemSeparatorComponent={() => <View style={myStyle.separator}/>}
            />
        </SafeAreaView>
    )
}

const PEOPLE = [
    {
        name:{
            title: "Ms",
            first: "Maeva",
            last: "Scott",
        },
    },
    {
        name:{
            title: "Ms",
            first: "Maeva",
            last: "Sungkada",
        },
    },
    {
        name:{
            title: "Ms",
            first: "Maelle",
            last: "Henry",
        },
    },
    {
        name:{
            title: "Ms",
            first: "Mohamoud",
            last: "Faaij",
        },
    },
]