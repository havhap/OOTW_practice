import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {Dimensions, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Fontisto,FontAwesome,Entypo } from '@expo/vector-icons';



//화면크기 맞추기
const { width: SCREEN_WIDTH } = Dimensions.get("window");
console.log(SCREEN_WIDTH);

const icons ={
  "Clouds": "cloudy",
  "Clear":"day-sunny",
  "Rain":"rain",
  "Snow":"snow"
}


export default function App() {
  return (
    <LinearGradient colors={['#72BAFD', '#6dd5ed']} style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>강남구 대치동</Text>
      </View>

      <View style={styles.weather}>
        <View style={styles.day}>
          <View style={{
            marginTop:50
          }}>
            <Fontisto 
            name="cloudy" 
            size={100} 
            color="black"
            />  
            {/* //날씨api를 받은이후에는 name={icons[dayweather~]} */}
          </View>
          <Text style={styles.temp}>19°</Text>
          <Text style={styles.description}>흐림</Text>
        </View>  
      </View>

      <ScrollView horizontal contentContainerStyle={styles.timeslot}>
        <View style={styles.timetemp}>
          <Text style={styles.time}>14시</Text>
          <View style={styles.timeicon}>
            <Fontisto name="cloudy" size={50} color="black" />  
            {/* //날씨api를 받은이후에는 name={icons[dayweather~]} */}
          </View>
          <Text style={styles.parttemp}>15°</Text>
        </View>
        <View style={styles.timetemp}>
          <Text style={styles.time}>14시</Text>
          <View style={styles.timeicon}>
            <Fontisto name="cloudy" size={50} color="black" />  
            {/* //날씨api를 받은이후에는 name={icons[dayweather~]} */}
          </View>
          <Text style={styles.parttemp}>15°</Text>
        </View>
        <View style={styles.timetemp}>
          <Text style={styles.time}>14시</Text>
          <View style={styles.timeicon}>
            <Fontisto name="day-sunny" size={50} color="black" />  
            {/* //날씨api를 받은이후에는 name={icons[dayweather~]} */}
          </View>
          <Text style={styles.parttemp}>15°</Text>
        </View>
        <View style={styles.timetemp}>
          <Text style={styles.time}>14시</Text>
          <View style={styles.timeicon}>
            <Fontisto name="cloudy" size={50} color="black" />  
            {/* //날씨api를 받은이후에는 name={icons[dayweather~]} */}
          </View>
          <Text style={styles.parttemp}>15°</Text>
        </View>
        <View style={styles.timetemp}>
          <Text style={styles.time}>14시</Text>
          <View style={styles.timeicon}>
            <Fontisto name="cloudy" size={50} color="black" />  
            {/* //날씨api를 받은이후에는 name={icons[dayweather~]} */}
          </View>
          <Text style={styles.parttemp}>15°</Text>
        </View>

      </ScrollView>

      {/* <NavigationContainer>
        <RootNavigator />
      </NavigationContainer> */}


    </LinearGradient> 
  );
};

const styles = StyleSheet.create({
  container: { //container이름은 아무거나 가능
    flex: 1,
    backgroundColor: '#72BAFD',

  },
  city: {
    flex:1.2,
    // backgroundColor: 'green',
    alignItems: 'center',

  },
  weather: {
    flex:3
  },
  cityName: {
    marginTop:80, //중앙정렬을 빼고 margin으로 조절함 (justifyContent)
    fontSize:25,
    fontWeight:'400',
    color:'black'
  },
  day:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    // backgroundColor:'yellow',
  },
  temp:{
    marginTop:50,
    fontSize: 80,
    fontWeight:'300',
    justifyContent:'center',
  },
  description:{
    marginTop:-10,
    fontSize:65,
    fontWeight:'300',

  },

  timeslot:{
    // flex:2.4,
    // flexDirection: 'row',//시간대별 온도 가로배치
    marginTop:-10,
    alignItems: 'center',

  },
  timetemp:{
    width:SCREEN_WIDTH/3,
    justifyContent:'center',
    alignItems: 'center',
    // backgroundColor:"yellow",
  },
  time:{
    fontSize:20,
    justifyContent:'center',
    alignItems: 'center',
  },
  parttemp:{
    marginTop:10,
    fontSize:40,
    fontWeight:'300',
  },
  timeicon:{
    marginTop:30
  }
//dimensions api를 이용해서 핸드폰 사이즈를 가져오기
});
//시간대별온도에서 온도가 아이콘에 밀리는건 marginTop때문인것같