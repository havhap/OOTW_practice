import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {Dimensions, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Fontisto,FontAwesome,Entypo } from '@expo/vector-icons';
import sunnyicon from '../../assets/images/sunnyicon.png';
import rainfall from '../../assets/images/rainfall.png';

//화면크기 맞추기
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

console.log(SCREEN_WIDTH);
console.log(SCREEN_HEIGHT);



export const Weather = () => {
    return (
      <LinearGradient colors={['#83D0FB', '#D1EFFF']} style={styles.container}>
      <View style={{flex:1,}}>
        <View style={{flex:1,margin:10}}>
          <Text style={{fontSize:35,alignItems:'center',marginTop:50,marginLeft:20}}>오늘 날씨</Text>
        </View>
      </View>

      <View style = {styles.weather}>
        <View style={styles.weatherleft}>
          <View style={styles.day}>
            <Text style={styles.temp}>19°</Text>
            <Text style={styles.description}>맑음</Text>
            <Text style={styles.maxtemp}>최고 33º</Text>
            <Text style={styles.mintemp}>최저 25º</Text>
          </View>
        </View>

        <View style={styles.weatherright}>
            <View>
              <Image source={sunnyicon}
                style={{width:140,height:140,marginTop:60}}
              />
            </View>
            <Text style={styles.city}>강남구 대치동</Text>
        
        </View>
      </View>
      {/* 구분선 */}
      <View style={{width:SCREEN_WIDTH,height:5,backgroundColor:'#D1EFFF',marginTop:-10,}}></View>
      <View style={{flex:0.3,}}>
        <Text style={{fontSize:14,marginTop:15,marginLeft:20,}}>실시간 정보</Text>

      </View>
      <ScrollView horizontal contentContainerStyle={styles.timeslot}>
        
        <View style={styles.timetemp}>
          <Text style={styles.time}>오전 12시</Text>
          <Image source={sunnyicon}
                style={styles.timeicon}
              />
          <Text style={styles.parttemp}>15°</Text>
          <Image source={rainfall}//강수량이미지
              style={styles.rainfallst}
          />
          <Text style={styles.rainfallpc}>10%</Text>
        </View>

        <View style={styles.timetemp}>
          <Text style={styles.time}>오전 1시</Text>
          <Image source={sunnyicon}
              style={styles.timeicon}
            />
          <Text style={styles.parttemp}>15°</Text>
          <Image source={rainfall}//강수량이미지
              style={styles.rainfallst}
          />
          <Text style={styles.rainfallpc}>10%</Text>

        </View>
        <View style={styles.timetemp}>
          <Text style={styles.time}>오전 2시</Text>
          <Image source={sunnyicon}
                style={styles.timeicon}
              />
          <Text style={styles.parttemp}>15°</Text>
          <Image source={rainfall}//강수량이미지
              style={styles.rainfallst}
          />
          <Text style={styles.rainfallpc}>10%</Text>
        </View>

        <View style={styles.timetemp}>
          <Text style={styles.time}>오전 3시</Text>
            <Image source={sunnyicon}
                style={styles.timeicon}
              />
          <Text style={styles.parttemp}>15°</Text>
          <Image source={rainfall}//강수량이미지
              style={styles.rainfallst}
          />
          <Text style={styles.rainfallpc}>30%</Text>
        </View>

        <View style={styles.timetemp}>
          <Text style={styles.time}>오전 4시</Text>
          <Image source={sunnyicon}
                style={styles.timeicon}
              />
          <Text style={styles.parttemp}>15°</Text>
          <Image source={rainfall}//강수량이미지
              style={styles.rainfallst}
          />
          <Text style={styles.rainfallpc}>10%</Text>
        </View>
          
        <View style={styles.timetemp}>
          <Text style={styles.time}>오전 5시</Text>
          <Image source={sunnyicon}
                style={styles.timeicon}
              />
          <Text style={styles.parttemp}>15°</Text>
          <Image source={rainfall}//강수량이미지
              style={styles.rainfallst}
          />
          <Text style={styles.rainfallpc}>20%</Text>
        </View>

        <View style={styles.timetemp}>
          <Text style={styles.time}>오전 6시</Text>
          <Image source={sunnyicon}
                style={styles.timeicon}
              />
          <Text style={styles.parttemp}>14°</Text>
          <Image source={rainfall}//강수량이미지
              style={styles.rainfallst}
          />
          <Text style={styles.rainfallpc}>20%</Text>
        </View>

        <View style={styles.timetemp}>
          <Text style={styles.time}>오전 7시</Text>
          <Image source={sunnyicon}
                style={styles.timeicon}
              />
          <Text style={styles.parttemp}>15°</Text>
          <Image source={rainfall}//강수량이미지
              style={styles.rainfallst}
          />
          <Text style={styles.rainfallpc}>20%</Text>
        </View>

        <View style={styles.timetemp}>
          <Text style={styles.time}>오전 8시</Text>
          <Image source={sunnyicon}
                style={styles.timeicon}
              />
          <Text style={styles.parttemp}>13°</Text>
          <Image source={rainfall}//강수량이미지
              style={styles.rainfallst}
          />
          <Text style={styles.rainfallpc}>10%</Text>
        </View>

        <View style={styles.timetemp}>
          <Text style={styles.time}>오전 9시</Text>
          <Image source={sunnyicon}
                style={styles.timeicon}
              />
          <Text style={styles.parttemp}>11°</Text>
          <Image source={rainfall}//강수량이미지
              style={styles.rainfallst}
          />
          <Text style={styles.rainfallpc}>0%</Text>
        </View>





      </ScrollView>

    </LinearGradient> 
    )
};

const styles = StyleSheet.create({
  container: { //container이름은 아무거나 가능
    flex: 1,
    // backgroundColor: '#72BAFD',
  },
  weather: {
    flex:3,
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

  city: {
    flex:1,
    alignItems: 'center',
    fontSize:20,
    fontWeight:'300',
    color:'black',
    marginTop:30

  },

  day:{
    marginTop:-50,
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    // backgroundColor:'yellow',
  },


  temp:{
    fontSize: 90,
    fontWeight:'300',
    alignItems: 'center',
    // backgroundColor:'blue',
  },
  description:{//맑음,흐림
    fontSize:45,
    fontWeight:'200',
    // backgroundColor:'red',
  },
  maxtemp:{
    fontSize:20,
    alignItems: 'center',
    justifyContent:'center',
    marginTop:15,
  },
  mintemp:{
    fontSize:20,
    alignItems: 'center',
    justifyContent:'center',
  },

  timeslot:{ //가로 스크롤을 위한 공간분할
    // flex:2.4,
    // flexDirection: 'row',//시간대별 온도 가로배치
    // marginTop:-10,
    alignItems: 'center',
    // backgroundColor:'yellow',
    marginTop:-40,
    marginBottom:-30,
  },

  timetemp:{//시간대별 박스
    width:(SCREEN_WIDTH-60)/6,
    height:SCREEN_HEIGHT/4,
    margin:5,
    marginTop:-5,
    borderRadius:18,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:"white",

  },
  time:{//시간 ex)오전12시,,
    fontSize:12,
    justifyContent:'center',
    alignItems: 'center',
    // marginTop:
  },
  parttemp:{ //시간대별온도
    marginTop:10,
    fontSize:18,
    fontWeight:'500',
  },
  timeicon:{//시간대별 날씨아이콘
    width:40,
    height:40,
    marginTop:15,   
  },
  rainfallst:{//빗물아이콘
    width:19,
    height:20,
    marginTop:7,
  },
  rainfallpc:{//강수량퍼센트
    fontSize:12,
    marginTop:10,
  },

//dimensions api를 이용해서 핸드폰 사이즈를 가져오기
});
//시간대별온도에서 온도가 아이콘에 밀리는건 marginTop때문인것같
