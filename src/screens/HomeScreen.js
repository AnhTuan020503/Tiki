import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Image 
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeSectionComponent from '../components/HomeSectionComponents';
const HomeScreen =() =>{
    return(
      
      <View>
        <StatusBar barStyle="dark-contentc"/>
         {/* */}
        <View style={styles.headerContainer}>
          <View style={styles.inputContainer}>
            <FontAwesome name="search" size={24} color="#969696" />
            <Text style={styles.inputText}>Bạn tìm gì hôm nay</Text>
          </View>
           {/* */}
          <View style={styles.cartContainer}>
            <FontAwesome name="shopping-cart" size={24} color="#fff"/>
          </View>
           {/* */}
        </View>
        {/* */}
        <View style={styles.bodyContainer}>
         <ScrollView>
             <HomeSectionComponent/> 
             <HomeSectionComponent/>
         </ScrollView>
        </View>
      </View>
    );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection:'row',
    paddingTop:50,
    paddingBottom:4,
    backgroundColor:'#1e88e5'
  },
  inputContainer:{
    backgroundColor:'#fff',
    flexDirection:'row',
    flex:1,
    marginLeft:10,
    alignItems:'center',
    marginBottom:4,
    paddingVertical:10,
  },
  inputText:{
    color:'#969696',
    fontSize:14,
    marginLeft:8,
    fontWeight:'500',
  },
  cartContainer:{
    paddingHorizontal:20,
    alignItems:'center',
    justifyContent:'center',
  },
  bodyContainer:{
    backgroundColor:'#fff',
  },
  
});

export default HomeScreen;
