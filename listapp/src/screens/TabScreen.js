import React from 'react';
import {Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const { height: SCREEN_HEIGHT } = Dimensions.get("window");


console.log(SCREEN_WIDTH);
console.log(SCREEN_HEIGHT);


export const Codi = () => {
    return (
        <LinearGradient colors={['#83D0FB', '#D1EFFF']} style={styles.container}>            
            <View style={{flex:1,margin:10}}>
                <Text style={{fontSize:35,alignItems:'center',marginTop:50,marginLeft:20}}>오늘 코디</Text>
            </View>

            <View style={styles.codi}>

                <View style={styles.box}>
                    <View style={styles.codiFirst}>
                        <Text style={styles.codiname}>코{"\n"}디{"\n"}{"\t"}1</Text>
                    </View>
                    <View style={styles.codibox}>
                        <Text style={styles.codicomment}>양말을 챙기세요</Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.codiSecond}>
                        <Text style={styles.codiname}>코{"\n"}디{"\n"}{"\t"}2</Text>
                    </View>
                    <View style={styles.codibox}>
                        <Text style={styles.codicomment}>양말을 챙기세요</Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.codiThird}>
                        <Text style={styles.codiname}>코{"\n"}디{"\n"}{"\t"}3</Text>
                    </View>
                    <View style={styles.codibox}>
                        <Text style={styles.codicomment}>양말을 챙기세요</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    codi:{
        flex:7,
        marginTop:20,
    },
    box:{
        flex:2.5,
        flexDirection:"row",
        alignItems: 'center',
        justifyContent:'center',
    },
    codiFirst:{
        backgroundColor:'#D1EFFF',
        width:(SCREEN_WIDTH-80)/4,
        height:(SCREEN_WIDTH-100)/2,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:18,
    },
    codiSecond:{
        backgroundColor:'#83D0FB',
        width:(SCREEN_WIDTH-80)/4,
        height:(SCREEN_WIDTH-100)/2,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:18,
    },
    codiThird:{
        backgroundColor:'#72BAFD',
        width:(SCREEN_WIDTH-80)/4,
        height:(SCREEN_WIDTH-100)/2,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:18,
    },
    codiname:{
        fontSize:25,
    },
    codibox:{
        backgroundColor:"white",
        width:SCREEN_WIDTH-150,
        height:(SCREEN_WIDTH-100)/2,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:18,
    },
    codicomment:{
        fontSize:20,
    },
});
// export const Weather = () => {
//     return (
//         <Container>
//             <StyledText>뭘써야되나요</StyledText>
//         </Container>
//     )
// };

// export const Home = () => {
//     return(
//         <Container>
//             <StyledText>Home</StyledText>
//         </Container>
//     )
// };





/* src/screens/TabScreen.js */