import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import homesunny1 from '../../assets/images/homesunny1.png';
import rain from '../../assets/images/rain.png';

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

console.log(SCREEN_WIDTH);
console.log(SCREEN_HEIGHT);

export const Home = () => {
    return (
        <LinearGradient colors={['#D1EFFF', '#FFFFFF']} style={styles.container}>

              <Image source={homesunny1}
                style={styles.homeweathericon}
              />

          {/* //날씨 전체 틀// */}
          <View style={styles.weather}>        
            
            <View style={styles.weatherleft}>
              <Text style={styles.description}>오늘의 날씨는{"\n"}{"\t"}맑음이네요</Text>
            </View>
            <View style={styles.weatherright}>
              <Text style={styles.temp}>19°</Text>
              <View style={styles.maxmin}>
                <Text style={styles.maxtemp}>최고 23°</Text>
                <Text style={{fontSize:15}}>/</Text>
                <Text style={styles.mintemp}>최저 17°</Text>
              </View>
            </View>
            
          </View>    

          <View style={styles.codicomment}>
            <View style={styles.codibox}>

            </View>
            <Text style={styles.comment}>기온에 맞는 코디를 참고하세요</Text>
          </View>

        </LinearGradient> 
    )
};

const styles = StyleSheet.create({
  container: { //container이름은 아무거나 가능
    flex: 1,
  },

  homeweathericon: {
    width:SCREEN_WIDTH,
    height:SCREEN_WIDTH,
    marginTop:-(SCREEN_WIDTH/2)
  },
  weather:{
    flex:1,
    flexDirection:'row',
  },
  weatherleft:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
  },
  weatherright:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
  },
  description:{
    fontSize:30,
    fontWeight:100,
  },
  temp:{
    fontSize:90,
    fontWeight:300,
  },
  maxmin:{
    flexDirection:'row',
  },
  maxtemp:{
    fontSize:15,
    alignItems: 'center',
    justifyContent:'center',
    marginRight:5,
  },
  mintemp:{
    fontSize:15,
    alignItems: 'center',
    justifyContent:'center',
    marginLeft:5,
  },

  codicomment:{
    flex:1.5,
    alignItems: 'center',
    justifyContent:'center',
  },
  codibox:{
    width:SCREEN_WIDTH-80,
    height:(SCREEN_WIDTH-80)/2,
    backgroundColor:"white",
    borderRadius:18,
  },
  comment:{
    fontSize:20,
    fontWeight:100,
    marginTop:20,
  },

});
