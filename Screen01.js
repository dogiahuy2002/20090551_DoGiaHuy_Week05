import React, {useEffect, useState} from "react";
import {Pressable, View, Image, Text, button, Button} from "react-native";


export default function Screen01({navigation}){
    var [image, setImage] = useState();
    /*useEffect(()=>{
        setImage(route.params);
    }, [route.params])*/
    return(
        
        <View style={{
            flex: 1,
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"
        }}>
            <Image source={require("./assets/vs_blue.png")}
            style={{width:"301px", height:"361px"}}
            resizeMode = "contain"
            />
            <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            <View style={{flex: 1, flexDirection:"row", margin:"10px"}}>
            <Image
                source={require("./assets/star.png")}
                style={{
                    width:"20px",
                    height:"20px",
                }}
            /> 
            <Image
            source={require("./assets/star.png")}
            style={{
                width:"20px",
                height:"20px",
            }}
            /> 
            <Image
            source={require("./assets/star.png")}
            style={{
                width:"20px",
                height:"20px",
            }}
            />
            <Image
                source={require("./assets/star.png")}
                style={{
                    width:"20px",
                    height:"20px",
                }}
            />
            <Image
                source={require("./assets/star.png")}
                style={{
                    width:"20px",
                    height:"20px",
                }}
            />
            <Text style={{marginLeft:"40px"}}>(Xem 828 đánh giá)</Text>
        
            </View>
            <View style={{flex: 1, flexDirection:"row"}}>
                <Text>1.790.000 đ </Text>
                <Text style={{
                    marginLeft:"40px",
                    textDecorationLine: "line-through",
                    color:"gray"
                }}>1.790.000 đ </Text>
            </View>
            <View style={{flex: 3, flexDirection:"column", justifyContent:"center", }}>
                
                <Text style={{
                    marginRight:"0px",
                    width:"164px",
                    height:"14px",
                    fontStyle: "Roboto",
                    fontSize: "12px",
                    fontWeight: "700",
                    lineHeight: "14.06px",
                    color:"red",
                    justifyContent:'center',
                    alignContent:"center"
                }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN </Text>

                <View style={{flex: 1, flexDirection:"row", margin: '15px'}}>
                    <Pressable style={{
                        backgroundColor: "white",
                        width: "332px",
                        height:"34px",
                        borderRadius: "10px",
                        border:"1px solid black",
                        color: "white",
                        fontSize:"20px",
                        justifyContent:"center",
                        alignContent:"center",
                        alignItems:"center",
                        flexDirection:"row"}}
                        onPress={()=> navigation.navigate("Screen02")}
                        >
                        <Text style={{
                            color: "black",
                            fontSize:"20px",}}>
                                4 MÀU- CHỌN MÀU
                        </Text>
                        <Image
                        source={require('.//assets/Vector.png')}
                        style={{
                            marginLeft:"40px",
                            width:"11.5px",
                            height:'14px',
                            backgroundColor:"gray"
                        }}
                        
                            />
                        
                    
                    </Pressable>
                </View>
                
            </View>
            
            <View style={{flex: 1, flexDirection:"row"}}>
            <Pressable style={{
                    backgroundColor: "#CA1536",
                    width: "326px",
                    height:"44px",
                    borderRadius: "10px",
                    border:"1px solid black",
                    color: "white",
                    fontSize:"20px",
                    justifyContent:"center",
                    alignContent:"center",
                    alignItems:"center",
                    flexDirection:"row"}}
                    onPress={()=> navigation.navigate("Screen02")}
                    >
                        <Text style={{
                            color: "black",
                            fontSize:"20px",}}>
                                CHỌN MUA
                        </Text>
            </Pressable>
            
            </View>
            
        </View>
    );
}