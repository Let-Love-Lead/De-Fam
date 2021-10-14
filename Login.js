import React from "react";
import { View, Text, Image, TouchableOpacity, Button, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Login({ navigation }) {
    return (
        < View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image
                style={{
                    width: 250,
                    height: 250,
                    borderRadius: 20,
                    marginBottom: 50,
                    transform: [{ rotate:"45deg" }]
                }}
                source={{
                    uri: "https://media.istockphoto.com/photos/blonde-woman-in-wild-patterned-dress-picture-id108329358?k=20&m=108329358&s=612x612&w=0&h=3EbdScg7Xa-_97kGLWwI3KVOsR_p2HVSqXTtmdATdAs="
                }}
                /*source={require("../assets/icon.png)}, for import local images*/
            />
            <Text style={{ color: "black", fontSize: 24, fontweight: 600 }}> Welcome to YakaKlodin</Text>
            <Text style={{ color: "black", fontSize: 30, fontWeight:"bold" }}> Where you dress to Suit the occassion</Text>
            <TouchableOpacity style={{ flexDirection:"row", backgroundColor: "gray", padding: 10, paddingHorizontal: 50, marginTop: 20, }}>
                <AntDesign name="google" size={24} color="red"/>
                <Text style={{ fontSize: 17, marginLeft:10, fontWeight: 600 }}>Login with Gmail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "row", backgroundColor: "black", padding: 10, paddingHorizontal: 50, marginTop: 20, }}>
                <AntDesign name="apple1" size={24} color= "white" />
                <Text style={{ marginLeft: 10, fontSize: 20, fontweight: 600, color: "white", }}>Login with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{ marginTop: 10, fontweight: '500', color: 'gray' }}> Not a member?{" "}
                <Text style={{ color: "orange", fontWeight: "bold", }}>SignUp</Text>
            </Text>
            </TouchableOpacity>
            <View style={{paddingTop: 20}}>
            <Pressable>
                <Button
                    andriod_ripple
                    onPress={() => {
                        navigation.navigate("Home")}}
                   title="Next"/>
                </Pressable>
                </View>
    </View >
        );
}