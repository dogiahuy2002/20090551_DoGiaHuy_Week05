import React, {useState} from "react";
import {Pressable, View, Image, Text, button} from "react-native";



export default function  Screen02(){

    const [image, setImage] = useState(require("./assets/vs_blue.png"));
    return (
        <View style={{flex: 1}}>
            <View style={{flex:3, justifyContent: "center", alignItems:"center", backgroundColor: "white", flexDirection:"row"}}>
                <Image source={image}
                style={{
                    width:"112px",
                    height: "132px"
                }}
                resizeMode= 'contain'
                />
                <Text style={{
                    width:"164px",
                    height:"36px",
                    fontStyle: "Roboto",
                    fontSize: "15px",
                    fontWeight: "400",
                    lineHeight: "17.58px"
                }}> Điện thoại Vsmart J3 Hàng chính hãng</Text>
            </View>
            <View style={{flex:7, justifyContent: "center", alignItems:"center", backgroundColor: "gray"}}>
            <Text style={{
                    width:"258px",
                    height:"21px",
                    fontStyle: "Roboto",
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "21.09px"
                }}> Chọn một màu bên dưới:</Text>
            <Pressable style={{
                width: "80px", 
                height:"80px", 
                backgroundColor: "silver", 
                margin:"5px"
                }}
                onPress = {()=>{
                    setImage(require("./assets/vs_silver.png"));
                }}
                >
            </Pressable>
            <Pressable style={{
                width: "80px", 
                height:"80px", 
                backgroundColor: "red", 
                margin:"5px"
                }}
                onPress = {()=>{
                    setImage(require("./assets/vs_red.png"));
                }}
                >
            </Pressable>
            <Pressable style={{
                width: "80px", 
                height:"80px", 
                backgroundColor: "black", 
                margin:"5px"
                }}
                onPress = {()=>{
                    setImage(require("./assets/vs_black.png"));
                }}
                >
            </Pressable>
            <Pressable style={{
                width: "80px", 
                height:"80px", 
                backgroundColor: "blue", 
                margin:"5px"
                }}
                onPress = {()=>{
                    setImage(require("./assets/vs_blue.png"));
                }}
                >
            </Pressable>
            <button style={{
                backgroundColor: "#5F9EA0",
                width: "326px",
                height:"44px",
                borderRadius: "10px",
                border:"1px solid red",
                color: "white",
                fontSize:"20px"
            }}  >
                XONG
            </button>
            </View>
        </View>
    );
}
