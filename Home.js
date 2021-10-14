import React from "react";
import { View, Text, Button, Image, ScrollView, } from "react-native";
import { Ionicons, MaterialCommunityIcons, Foundation, MaterialIcons } from '@expo/vector-icons';

export default function Home() {
    return (
        <View style={{
            backgroundColor: "white", flex: 1, paddingTop: 55, paddingHorizontal: 20,
        }}>
            <View style={{paddingHorizontal:10, flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                <Ionicons name="menu" size={24} color="black" />
                <MaterialCommunityIcons name="dresser" size={24} color="black" />
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="search-sharp" size={20} color="black" />
                    <Ionicons name="notifications" size={20} color="black" /> 
                </View>
            </View>
            <Text style={{ paddingHorizontal:10, fontWeight: '500', marginTop: 10, color: 'gray', }}>The World's {""}<Text style={{ fontWeight: "bold", color: "orange" }}>Best Clothes</Text>
            </Text>
            <Text style={{ paddingHorizontal: 10, marginTop: 10, fontWeight: "bold", color: "black" }}>Categories</Text>
            <View style={{ paddingTop: 20, flexDirection: 'row', alignContent: 'center', justifyContent: 'space-evenly' }}>
                <Button
                    color='gray' title="All" />
                <Button
                    color='gray' title="Office wear" />
                <Button
                    color='gray' title="Casual wear" />
                <Button
                    color='gray' title="Occassions" />
                <Button
                    color='gray' title="Extra"/>
            </View>
            <View style={{ flexDirection: 'row', paddingTop:20}}>
                <Image
                    style={{
                        width: 250,
                        height: 500,
                        borderRadius: 20,
                        marginHorizontal:10,
                        transform: [{ rotate: "0deg" }]
                    }}
                    source={{
                        uri: "data:image/jpeg;base64,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"
                    }} />
                <Image
                    style={{
                        width: 250,
                        height: 500,
                        borderRadius: 20,
                        marginHorizontal: 10,
                        transform: [{ rotate: "0deg" }]
                    }}
                    source={{
                        uri:"data:image/jpeg;base64,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"
                    }} />
                <Image
                    style={{
                        width: 250,
                        height: 500,
                        borderRadius: 20,
                        marginHorizontal: 10,
                        transform: [{ rotate: "0deg" }]
                    }}
                    source={{
                        uri:"data:image/jpeg;base64,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"
                    }} />
                <Image
                    style={{
                        width: 250,
                        height: 500,
                        borderRadius: 20,
                        marginHorizontal: 10,
                        transform: [{ rotate: "0deg" }]
                    }}
                    source={{
                        uri:"data:image/jpeg;base64,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"
                    }} />
            </View>
            <View style={{paddingTop:20, paddingHorizontal: 10, flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between'}}>
                <Foundation name="home" size={24} color="black" />
                <View style={{ backgroundColor:'white'}}>
                    <MaterialCommunityIcons name="microphone" size={24} color="black" />
                    </View>
                <MaterialIcons name="shopping-bag" size={24} color="black" />
            </View>

        </View>
        );
}